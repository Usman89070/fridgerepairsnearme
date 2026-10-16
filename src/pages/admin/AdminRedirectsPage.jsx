import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAdminAuth from "../../hooks/useAdminAuth";
import { api } from "../../lib/api";
import usePageSeo from "../../hooks/usePageSeo";
import "../../styles/admin.css";

export default function AdminRedirectsPage() {
  const { status } = useAdminAuth();
  usePageSeo({ noindex: true });

  const [redirects, setRedirects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [fromPath, setFromPath] = useState("");
  const [toPath, setToPath] = useState("");
  const [statusCode, setStatusCode] = useState(301);
  const [note, setNote] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    document.title = "Redirects | Blog Admin";
  }, []);

  const loadRedirects = () => {
    setLoading(true);
    api.listRedirects().then(setRedirects).finally(() => setLoading(false));
  };

  useEffect(() => {
    if (status === "ready") loadRedirects();
  }, [status]);

  const handleCreate = async (e) => {
    e.preventDefault();
    setError("");
    setSaving(true);
    try {
      await api.createRedirect({ from_path: fromPath, to_path: toPath, status_code: Number(statusCode), note });
      setFromPath("");
      setToPath("");
      setStatusCode(301);
      setNote("");
      loadRedirects();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleToggleActive = async (r) => {
    await api.updateRedirect(r.id, {
      from_path: r.from_path, to_path: r.to_path, status_code: r.status_code,
      is_active: r.is_active ? 0 : 1, note: r.note,
    });
    loadRedirects();
  };

  const handleDelete = async (r) => {
    if (!window.confirm(`Delete the redirect from ${r.from_path}?`)) return;
    await api.deleteRedirect(r.id);
    loadRedirects();
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
          <h1>Redirects</h1>
          <p>301/302 redirects for old or changed URLs.</p>
        </div>
        <div className="admin-topbar__actions">
          <Link to="/admin" className="btn btn-outline btn-sm">← Back to Dashboard</Link>
        </div>
      </header>

      <div className="admin-panel">
        <p className="admin-field__hint">
          Redirects here don't go live on their own — this site is deployed as static files,
          so a database lookup can't safely sit in front of every page request (that's what
          caused the site-wide outage this was built to prevent). Instead:
          download the Apache rules below and paste them into <code>public/.htaccess</code> just
          under <code>RewriteBase /</code>, then include that change in your next deploy.
        </p>
        <a
          className="btn btn-outline btn-sm"
          href={api.redirectsHtaccessUrl()}
          target="_blank"
          rel="noreferrer"
        >
          Download .htaccess rules →
        </a>
      </div>

      <form className="admin-panel admin-post-form" onSubmit={handleCreate} style={{ marginTop: 24 }}>
        <div className="admin-panel__head">
          <h2>Add Redirect</h2>
        </div>

        <div className="admin-field-row">
          <label className="admin-field">
            <span>From Path (old URL)</span>
            <input value={fromPath} onChange={(e) => setFromPath(e.target.value)} placeholder="/old-page/" required />
          </label>
          <label className="admin-field">
            <span>To Path (new URL)</span>
            <input value={toPath} onChange={(e) => setToPath(e.target.value)} placeholder="/new-page/" required />
          </label>
        </div>

        <div className="admin-field-row">
          <label className="admin-field">
            <span>Status Code</span>
            <select value={statusCode} onChange={(e) => setStatusCode(e.target.value)}>
              <option value={301}>301 (permanent)</option>
              <option value={302}>302 (temporary)</option>
            </select>
          </label>
          <label className="admin-field">
            <span>Note (optional)</span>
            <input value={note} onChange={(e) => setNote(e.target.value)} placeholder="Why this redirect exists" />
          </label>
        </div>

        {error && <p className="admin-error">{error}</p>}

        <div className="admin-form__actions">
          <button type="submit" className="btn btn-primary" disabled={saving}>
            {saving ? "Adding…" : "Add Redirect"}
          </button>
        </div>
      </form>

      <div className="admin-panel" style={{ marginTop: 24 }}>
        <div className="admin-panel__head">
          <h2>All Redirects</h2>
        </div>

        {loading && <p>Loading…</p>}
        {!loading && redirects.length === 0 && <p>No redirects yet.</p>}

        {!loading && redirects.length > 0 && (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>From</th>
                  <th>To</th>
                  <th>Code</th>
                  <th>Active</th>
                  <th>Note</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {redirects.map((r) => (
                  <tr key={r.id}>
                    <td><code>{r.from_path}</code></td>
                    <td><code>{r.to_path}</code></td>
                    <td>{r.status_code}</td>
                    <td>
                      <button className="btn btn-outline btn-sm" onClick={() => handleToggleActive(r)}>
                        {r.is_active ? "Active" : "Disabled"}
                      </button>
                    </td>
                    <td>{r.note}</td>
                    <td className="admin-table__actions">
                      <button className="btn btn-sm admin-btn-danger" onClick={() => handleDelete(r)}>Delete</button>
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
