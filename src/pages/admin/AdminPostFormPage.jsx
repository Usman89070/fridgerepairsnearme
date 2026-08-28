import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAdminAuth from "../../hooks/useAdminAuth";
import { api } from "../../lib/api";

export default function AdminPostFormPage() {
  const { slug } = useParams();
  const isEditing = Boolean(slug);
  const navigate = useNavigate();
  const { status } = useAdminAuth();

  const [postId, setPostId] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [slugField, setSlugField] = useState("");
  const [loading, setLoading] = useState(isEditing);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    document.title = `${isEditing ? "Edit" : "New"} Post | Blog Admin`;
  }, [isEditing]);

  useEffect(() => {
    if (status !== "ready" || !isEditing) return;
    api
      .getPost(slug)
      .then((post) => {
        setPostId(post.id);
        setTitle(post.title);
        setCategory(post.category);
        setExcerpt(post.excerpt);
        setContent(post.content);
        setSlugField(post.slug);
        setLoading(false);
      })
      .catch(() => {
        setError("Could not load this post.");
        setLoading(false);
      });
  }, [status, isEditing, slug]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    const payload = { title, category, excerpt, content, slug: slugField };
    try {
      if (isEditing) {
        await api.updatePost(postId, payload);
      } else {
        await api.createPost(payload);
      }
      navigate("/admin", { replace: true });
    } catch (err) {
      setError(err.message);
      setSubmitting(false);
    }
  };

  if (status === "checking" || loading) {
    return (
      <div className="admin-shell">
        <p>Loading…</p>
      </div>
    );
  }

  return (
    <div className="admin-shell">
      <header className="admin-topbar">
        <h1>{isEditing ? "Edit Post" : "New Post"}</h1>
      </header>

      <form className="admin-panel admin-post-form" onSubmit={handleSubmit}>
        <label className="admin-field">
          <span>Title</span>
          <input value={title} onChange={(e) => setTitle(e.target.value)} required />
        </label>

        <div className="admin-field-row">
          <label className="admin-field">
            <span>Category</span>
            <input
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              placeholder="e.g. Maintenance Tips"
              required
            />
          </label>
          <label className="admin-field">
            <span>URL Slug (optional — auto-generated from title if left blank)</span>
            <input value={slugField} onChange={(e) => setSlugField(e.target.value)} placeholder="auto-generated" />
          </label>
        </div>

        <label className="admin-field">
          <span>Excerpt (shown on blog cards)</span>
          <textarea value={excerpt} onChange={(e) => setExcerpt(e.target.value)} rows={2} required />
        </label>

        <label className="admin-field">
          <span>
            Article Body — start a new heading with <code>## </code> on its own line;
            leave a blank line between paragraphs.
          </span>
          <textarea
            className="admin-content-editor"
            value={content}
            onChange={(e) => setContent(e.target.value)}
            rows={18}
            required
          />
        </label>

        {error && <p className="admin-error">{error}</p>}

        <div className="admin-form__actions">
          <button type="submit" className="btn btn-primary" disabled={submitting}>
            {submitting ? "Saving…" : isEditing ? "Save Changes" : "Publish Post"}
          </button>
          <button type="button" className="btn btn-outline" onClick={() => navigate("/admin")}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
