import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAdminAuth from "../../hooks/useAdminAuth";
import { api } from "../../lib/api";
import usePageSeo from "../../hooks/usePageSeo";
import "../../styles/admin.css";

const ISSUE_LABELS = {
  broken_link: "Broken link",
  missing_image: "Missing image",
  meta_description_length: "Description length",
  title_length: "Title length",
  duplicate_title: "Duplicate title",
  empty_override: "Empty SEO override",
};

export default function AdminSeoAuditPage() {
  const { status } = useAdminAuth();
  usePageSeo({ noindex: true });

  const [issues, setIssues] = useState([]);
  const [loading, setLoading] = useState(true);
  const [running, setRunning] = useState(false);
  const [lastRun, setLastRun] = useState(null);
  const [error, setError] = useState("");

  useEffect(() => {
    document.title = "SEO Audit | Blog Admin";
  }, []);

  const loadIssues = () => {
    setLoading(true);
    api.listAuditIssues().then(setIssues).finally(() => setLoading(false));
  };

  useEffect(() => {
    if (status === "ready") loadIssues();
  }, [status]);

  const handleRun = async () => {
    setRunning(true);
    setError("");
    try {
      const result = await api.runAudit();
      setIssues(result.issues);
      setLastRun(new Date());
    } catch (err) {
      setError(err.message);
    } finally {
      setRunning(false);
    }
  };

  const handleResolve = async (issue) => {
    await api.resolveAuditIssue(issue.id);
    setIssues((prev) => prev.filter((i) => i.id !== issue.id));
  };

  if (status === "checking") {
    return (
      <div className="admin-shell">
        <p>Checking session…</p>
      </div>
    );
  }

  return (
    <div className="admin-shell">
      <header className="admin-topbar">
        <div>
          <h1>SEO Audit</h1>
          <p>Broken links and blog content issues, checked from the server.</p>
        </div>
        <div className="admin-topbar__actions">
          <Link to="/admin" className="btn btn-outline btn-sm">← Back to Dashboard</Link>
        </div>
      </header>

      <div className="admin-panel">
        <p className="admin-field__hint">
          This is a React app with no server-side rendering, so this audit can't read a page's
          final on-screen title or meta tags the way a browser-based crawler could — that part
          already happens live via the SEO Manager and each page's own defaults. What it
          checks reliably: every known page and blog post actually resolves (no 404/500), plus
          missing images, short/long meta descriptions, long titles, duplicate blog titles, and
          SEO overrides that were started but left blank.
        </p>
        <button className="btn btn-primary btn-sm" onClick={handleRun} disabled={running}>
          {running ? "Running…" : "Run Audit"}
        </button>
        {lastRun && <span className="admin-field__hint" style={{ marginLeft: 12 }}>Last run {lastRun.toLocaleTimeString()}</span>}
        {error && <p className="admin-error">{error}</p>}
      </div>

      <div className="admin-panel" style={{ marginTop: 24 }}>
        <div className="admin-panel__head">
          <h2>Open Issues ({issues.length})</h2>
        </div>

        {loading && <p>Loading…</p>}
        {!loading && issues.length === 0 && <p>No open issues — run the audit to check again.</p>}

        {!loading && issues.length > 0 && (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Severity</th>
                  <th>Type</th>
                  <th>Page</th>
                  <th>Detail</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {issues.map((issue) => (
                  <tr key={issue.id}>
                    <td>{issue.severity === "error" ? "⚠ Error" : "Warning"}</td>
                    <td>{ISSUE_LABELS[issue.issue_type] || issue.issue_type}</td>
                    <td><code>{issue.url_path}</code></td>
                    <td>{issue.detail}</td>
                    <td className="admin-table__actions">
                      <button className="btn btn-outline btn-sm" onClick={() => handleResolve(issue)}>Dismiss</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}
