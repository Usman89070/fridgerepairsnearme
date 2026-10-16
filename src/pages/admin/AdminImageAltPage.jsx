import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import useAdminAuth from "../../hooks/useAdminAuth";
import { api } from "../../lib/api";
import usePageSeo from "../../hooks/usePageSeo";
import "../../styles/admin.css";

export default function AdminImageAltPage() {
  const { status } = useAdminAuth();
  usePageSeo({ noindex: true });

  const [overrides, setOverrides] = useState([]);
  const [loading, setLoading] = useState(true);
  const [imageSrc, setImageSrc] = useState("");
  const [altText, setAltText] = useState("");
  const [error, setError] = useState("");
  const [saving, setSaving] = useState(false);

  useEffect(() => {
    document.title = "Image Alt Text | Blog Admin";
  }, []);

  const loadOverrides = () => {
    setLoading(true);
    api.listImageAlt().then(setOverrides).finally(() => setLoading(false));
  };

  useEffect(() => {
    if (status === "ready") loadOverrides();
  }, [status]);

  const handleSave = async (e) => {
    e.preventDefault();
    setError("");
    setSaving(true);
    try {
      await api.saveImageAlt({ image_src: imageSrc, alt_text: altText });
      setImageSrc("");
      setAltText("");
      loadOverrides();
    } catch (err) {
      setError(err.message);
    } finally {
      setSaving(false);
    }
  };

  const handleDelete = async (row) => {
    if (!window.confirm(`Remove the alt text override for ${row.image_src}?`)) return;
    await api.deleteImageAlt(row.id);
    loadOverrides();
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
          <h1>Image Alt Text</h1>
          <p>Override alt text for the logo and gallery images by their path.</p>
        </div>
        <div className="admin-topbar__actions">
          <Link to="/admin" className="btn btn-outline btn-sm">← Back to Dashboard</Link>
        </div>
      </header>

      <div className="admin-panel">
        <p className="admin-field__hint">
          This covers the header/footer logo and the homepage gallery images — the images that
          appear on every page or are managed outside the blog. Blog post images already get
          their alt text from the post title, and can be refined from each post's editor.
        </p>
      </div>

      <form className="admin-panel admin-post-form" onSubmit={handleSave} style={{ marginTop: 24 }}>
        <div className="admin-panel__head">
          <h2>Add / Update Override</h2>
        </div>

        <div className="admin-field-row">
          <label className="admin-field">
            <span>Image Path</span>
            <input value={imageSrc} onChange={(e) => setImageSrc(e.target.value)} placeholder="/logo-192.webp" required />
          </label>
          <label className="admin-field">
            <span>Alt Text</span>
            <input value={altText} onChange={(e) => setAltText(e.target.value)} required />
          </label>
        </div>

        {error && <p className="admin-error">{error}</p>}

        <div className="admin-form__actions">
          <button type="submit" className="btn btn-primary" disabled={saving}>
            {saving ? "Saving…" : "Save"}
          </button>
        </div>
      </form>

      <div className="admin-panel" style={{ marginTop: 24 }}>
        <div className="admin-panel__head">
          <h2>Current Overrides</h2>
        </div>

        {loading && <p>Loading…</p>}
        {!loading && overrides.length === 0 && <p>No overrides yet.</p>}

        {!loading && overrides.length > 0 && (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Image Path</th>
                  <th>Alt Text</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {overrides.map((row) => (
                  <tr key={row.id}>
                    <td><code>{row.image_src}</code></td>
                    <td>{row.alt_text}</td>
                    <td className="admin-table__actions">
                      <button className="btn btn-sm admin-btn-danger" onClick={() => handleDelete(row)}>Delete</button>
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
