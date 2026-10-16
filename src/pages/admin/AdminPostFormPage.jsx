import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAdminAuth from "../../hooks/useAdminAuth";
import { api } from "../../lib/api";
import usePageSeo from "../../hooks/usePageSeo";
import "../../styles/admin.css";

export default function AdminPostFormPage() {
  const { slug } = useParams();
  const isEditing = Boolean(slug);
  const navigate = useNavigate();
  const { status } = useAdminAuth();

  usePageSeo({ noindex: true });

  const [postId, setPostId] = useState(null);
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [excerpt, setExcerpt] = useState("");
  const [content, setContent] = useState("");
  const [slugField, setSlugField] = useState("");
  const [featuredImage, setFeaturedImage] = useState("");
  const [uploadingImage, setUploadingImage] = useState(false);
  const [imageError, setImageError] = useState("");
  const [loading, setLoading] = useState(isEditing);
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const [showSeo, setShowSeo] = useState(false);
  const [metaTitle, setMetaTitle] = useState("");
  const [metaDescription, setMetaDescription] = useState("");
  const [canonicalUrl, setCanonicalUrl] = useState("");
  const [primaryKeyword, setPrimaryKeyword] = useState("");
  const [secondaryKeywords, setSecondaryKeywords] = useState("");
  const [schemaJson, setSchemaJson] = useState("");
  const [schemaError, setSchemaError] = useState("");

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
        setFeaturedImage(post.featured_image || "");
        setMetaTitle(post.meta_title || "");
        setMetaDescription(post.meta_description || "");
        setCanonicalUrl(post.canonical_url || "");
        setPrimaryKeyword(post.primary_keyword || "");
        setSecondaryKeywords(post.secondary_keywords || "");
        setSchemaJson(post.schema_json || "");
        setLoading(false);
      })
      .catch(() => {
        setError("Could not load this post.");
        setLoading(false);
      });
  }, [status, isEditing, slug]);

  const handleImageChange = async (e) => {
    const file = e.target.files?.[0];
    e.target.value = "";
    if (!file) return;

    setImageError("");
    setUploadingImage(true);
    try {
      const result = await api.uploadImage(file);
      setFeaturedImage(result.url);
    } catch (err) {
      setImageError(err.message);
    } finally {
      setUploadingImage(false);
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSchemaError("");
    if (schemaJson.trim()) {
      try {
        JSON.parse(schemaJson);
      } catch (err) {
        setSchemaError(`Schema JSON is not valid: ${err.message}`);
        return;
      }
    }
    setSubmitting(true);
    const payload = {
      title, category, excerpt, content, slug: slugField, featured_image: featuredImage,
      meta_title: metaTitle, meta_description: metaDescription, canonical_url: canonicalUrl,
      primary_keyword: primaryKeyword, secondary_keywords: secondaryKeywords, schema_json: schemaJson,
    };
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

        <div className="admin-field">
          <span>Featured Image</span>
          {featuredImage && (
            <div className="admin-featured-image">
              <img src={featuredImage} alt="Featured" />
              <button type="button" className="btn btn-outline btn-sm" onClick={() => setFeaturedImage("")}>
                Remove Image
              </button>
            </div>
          )}
          <input type="file" accept="image/jpeg,image/png,image/webp,image/gif" onChange={handleImageChange} disabled={uploadingImage} />
          {uploadingImage && <p className="admin-field__hint">Uploading…</p>}
          {imageError && <p className="admin-error">{imageError}</p>}
        </div>

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

        <div className="admin-field">
          <button type="button" className="btn btn-outline btn-sm" onClick={() => setShowSeo((v) => !v)}>
            {showSeo ? "Hide SEO Settings" : "SEO Settings"}
          </button>
        </div>

        {showSeo && (
          <>
            <label className="admin-field">
              <span>Meta Title (leave blank to use the title above)</span>
              <input value={metaTitle} onChange={(e) => setMetaTitle(e.target.value)} placeholder={title} />
            </label>

            <label className="admin-field">
              <span>Meta Description (leave blank to use the excerpt)</span>
              <textarea value={metaDescription} onChange={(e) => setMetaDescription(e.target.value)} rows={2} placeholder={excerpt} />
            </label>

            <label className="admin-field">
              <span>Canonical URL (leave blank for the default /blog/{"<slug>"} URL)</span>
              <input value={canonicalUrl} onChange={(e) => setCanonicalUrl(e.target.value)} placeholder="https://fridgerepairsnearme.com.au/blog/..." />
            </label>

            <div className="admin-field-row">
              <label className="admin-field">
                <span>Primary Keyword</span>
                <input value={primaryKeyword} onChange={(e) => setPrimaryKeyword(e.target.value)} placeholder="e.g. fridge not cooling" />
              </label>
              <label className="admin-field">
                <span>Secondary Keywords (comma-separated)</span>
                <input value={secondaryKeywords} onChange={(e) => setSecondaryKeywords(e.target.value)} placeholder="e.g. fridge warm, fridge repair cost" />
              </label>
            </div>

            <label className="admin-field">
              <span>JSON-LD Schema (optional — paste a full schema.org object or array)</span>
              <textarea
                className="admin-content-editor"
                value={schemaJson}
                onChange={(e) => setSchemaJson(e.target.value)}
                rows={6}
                placeholder='{"@context": "https://schema.org", "@type": "BlogPosting", ...}'
              />
              {schemaError && <p className="admin-error">{schemaError}</p>}
            </label>
          </>
        )}

        {error && <p className="admin-error">{error}</p>}

        <div className="admin-form__actions">
          <button type="submit" className="btn btn-primary" disabled={submitting || uploadingImage}>
            {submitting ? "Saving…" : isEditing ? "Save Changes" : "Publish Post"}
          </button>
          <button type="button" className="btn btn-outline" onClick={() => navigate("/admin")}>Cancel</button>
        </div>
      </form>
    </div>
  );
}
