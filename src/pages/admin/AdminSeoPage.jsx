import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAdminAuth from "../../hooks/useAdminAuth";
import { api } from "../../lib/api";
import usePageSeo from "../../hooks/usePageSeo";
import "../../styles/admin.css";

const EMPTY_FORM = {
  title: "", meta_description: "", canonical_url: "", robots_directive: "",
  h1: "", primary_keyword: "", secondary_keywords: "", schema_json: "",
};

export default function AdminSeoPage() {
  const { status } = useAdminAuth();
  usePageSeo({ noindex: true });

  const [pages, setPages] = useState([]);
  const [loading, setLoading] = useState(true);
  const [editingPath, setEditingPath] = useState(null);
  const [form, setForm] = useState(EMPTY_FORM);
  const [error, setError] = useState("");
  const [schemaError, setSchemaError] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    document.title = "SEO Manager | Blog Admin";
  }, []);

  const loadPages = () => {
    setLoading(true);
    api.listPageSeo().then(setPages).finally(() => setLoading(false));
  };

  useEffect(() => {
    if (status === "ready") loadPages();
  }, [status]);

  const startEdit = (page) => {
    setEditingPath(page.url_path);
    setError("");
    setSchemaError("");
    setForm({
      title: page.title || "",
      meta_description: page.meta_description || "",
      canonical_url: page.canonical_url || "",
      robots_directive: page.robots_directive || "",
      h1: page.h1 || "",
      primary_keyword: page.primary_keyword || "",
      secondary_keywords: page.secondary_keywords || "",
      schema_json: page.schema_json || "",
    });
  };

  const cancelEdit = () => {
    setEditingPath(null);
    setForm(EMPTY_FORM);
  };

  const handleSave = async (e) => {
    e.preventDefault();
    setError("");
    setSchemaError("");
    if (form.schema_json.trim()) {
      try {
        JSON.parse(form.schema_json);
      } catch (err) {
        setSchemaError(`Schema JSON is not valid: ${err.message}`);
        return;
      }
    }
    setSaving(true);
    try {
      await api.savePageSeo({ url_path: editingPath, ...form });
      cancelEdit();
      loadPages();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleClear = async (path) => {
    if (!window.confirm(`Remove the SEO override for ${path}? The page will go back to its built-in defaults.`)) return;
    await api.deletePageSeo(path);
    if (editingPath === path) cancelEdit();
    loadPages();
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
          <h1>SEO Manager</h1>
          <p>Override title, description, canonical, robots, keywords and schema for any page.</p>
        </div>
        <div className="admin-topbar__actions">
          <Link to="/admin" className="btn btn-outline btn-sm">← Back to Dashboard</Link>
        </div>
      </header>

      <div className="admin-panel">
        <div className="admin-panel__head">
          <h2>Pages</h2>
        </div>

        {loading && <p>Loading pages…</p>}

        {!loading && (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Page</th>
                  <th>URL</th>
                  <th>Override</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {pages.map((page) => (
                  <tr key={page.url_path}>
                    <td>{page.label}</td>
                    <td><code>{page.url_path}</code></td>
                    <td>{page.has_override ? "Custom" : "Default"}</td>
                    <td className="admin-table__actions">
                      <button className="btn btn-outline btn-sm" onClick={() => startEdit(page)}>Edit</button>
                      {page.has_override && (
                        <button className="btn btn-sm admin-btn-danger" onClick={() => handleClear(page.url_path)}>Clear</button>
                      )}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

      {editingPath && (
        <form className="admin-panel admin-post-form" onSubmit={handleSave} style={{ marginTop: 24 }}>
          <div className="admin-panel__head">
            <h2>Editing: <code>{editingPath}</code></h2>
          </div>

          <p className="admin-field__hint">
            Leave a field blank to keep the page's built-in default for it.
          </p>

          <label className="admin-field">
            <span>Title</span>
            <input value={form.title} onChange={(e) => setForm({ ...form, title: e.target.value })} />
          </label>

          <label className="admin-field">
            <span>Meta Description</span>
            <textarea value={form.meta_description} onChange={(e) => setForm({ ...form, meta_description: e.target.value })} rows={2} />
          </label>

          <div className="admin-field-row">
            <label className="admin-field">
              <span>Canonical URL</span>
              <input value={form.canonical_url} onChange={(e) => setForm({ ...form, canonical_url: e.target.value })} placeholder="https://fridgerepairsnearme.com.au/..." />
            </label>
            <label className="admin-field">
              <span>Robots Directive</span>
              <input value={form.robots_directive} onChange={(e) => setForm({ ...form, robots_directive: e.target.value })} placeholder="e.g. noindex, nofollow" />
            </label>
          </div>

          <label className="admin-field">
            <span>H1 (reference only — not yet applied to the page body automatically)</span>
            <input value={form.h1} onChange={(e) => setForm({ ...form, h1: e.target.value })} />
          </label>

          <div className="admin-field-row">
            <label className="admin-field">
              <span>Primary Keyword</span>
              <input value={form.primary_keyword} onChange={(e) => setForm({ ...form, primary_keyword: e.target.value })} />
            </label>
            <label className="admin-field">
              <span>Secondary Keywords (comma-separated)</span>
              <input value={form.secondary_keywords} onChange={(e) => setForm({ ...form, secondary_keywords: e.target.value })} />
            </label>
          </div>

          <label className="admin-field">
            <span>JSON-LD Schema (full object or array)</span>
            <textarea
              className="admin-content-editor"
              value={form.schema_json}
              onChange={(e) => setForm({ ...form, schema_json: e.target.value })}
              rows={6}
            />
            {schemaError && <p className="admin-error">{schemaError}</p>}
          </label>

          {error && <p className="admin-error">{error}</p>}

          <div className="admin-form__actions">
            <button type="submit" className="btn btn-primary" disabled={saving}>
              {saving ? "Saving…" : "Save Override"}
            </button>
            <button type="button" className="btn btn-outline" onClick={cancelEdit}>Cancel</button>
          </div>
        </form>
      )}
    </div>
  );
}
