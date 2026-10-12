const BASE = "/api";

async function request(path, options = {}) {
  const res = await fetch(`${BASE}${path}`, {
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  const text = await res.text();
  let data = null;
  let parseFailed = false;
  if (text) {
    try {
      data = JSON.parse(text);
    } catch {
      parseFailed = true;
    }
  }

  if (!res.ok) {
    throw new Error((data && data.error) || `Request failed (${res.status})`);
  }
  // A 200 that isn't valid JSON means the request never actually reached
  // the PHP endpoint (e.g. it fell through to the SPA's catch-all and
  // got index.html back) — treat that as a failure rather than silently
  // resolving with null, which crashes callers that expect an array/object.
  if (parseFailed) {
    throw new Error("Unexpected response from server.");
  }
  return data;
}

async function uploadImage(file) {
  const formData = new FormData();
  formData.append("image", file);

  const res = await fetch(`${BASE}/upload.php`, {
    method: "POST",
    credentials: "same-origin",
    body: formData,
  });

  let data = null;
  try {
    data = await res.json();
  } catch {
    data = null;
  }

  if (!res.ok) {
    throw new Error((data && data.error) || `Upload failed (${res.status})`);
  }
  return data;
}

export const api = {
  listPosts: () => request("/posts.php"),
  getPost: (slug) => request(`/posts.php?slug=${encodeURIComponent(slug)}`),
  createPost: (payload) => request("/posts.php", { method: "POST", body: JSON.stringify(payload) }),
  updatePost: (id, payload) => request(`/posts.php?id=${encodeURIComponent(id)}`, { method: "PUT", body: JSON.stringify(payload) }),
  deletePost: (id) => request(`/posts.php?id=${encodeURIComponent(id)}`, { method: "DELETE" }),
  uploadImage,

  login: (username, password) => request("/login.php", { method: "POST", body: JSON.stringify({ username, password }) }),
  logout: () => request("/logout.php", { method: "POST" }),
  me: () => request("/me.php"),
  changePassword: (currentPassword, newPassword) =>
    request("/change_password.php", { method: "POST", body: JSON.stringify({ currentPassword, newPassword }) }),

  submitEnquiry: (payload) => request("/enquiry.php", { method: "POST", body: JSON.stringify(payload) }),

  // SEO: per-page overrides
  getPageSeo: (path) => request(`/seo.php?path=${encodeURIComponent(path)}`),
  listPageSeo: () => request("/seo.php?all=1"),
  savePageSeo: (payload) => request("/seo.php", { method: "POST", body: JSON.stringify(payload) }),
  deletePageSeo: (path) => request(`/seo.php?path=${encodeURIComponent(path)}`, { method: "DELETE" }),

  // SEO: redirects
  listRedirects: () => request("/redirects.php"),
  createRedirect: (payload) => request("/redirects.php", { method: "POST", body: JSON.stringify(payload) }),
  updateRedirect: (id, payload) => request(`/redirects.php?id=${encodeURIComponent(id)}`, { method: "PUT", body: JSON.stringify(payload) }),
  deleteRedirect: (id) => request(`/redirects.php?id=${encodeURIComponent(id)}`, { method: "DELETE" }),
  redirectsHtaccessUrl: () => `${BASE}/redirects.php?export=htaccess`,

  // SEO: image alt text
  getImageAltMap: () => request("/image_alt.php"),
  listImageAlt: () => request("/image_alt.php?admin=1"),
  saveImageAlt: (payload) => request("/image_alt.php", { method: "POST", body: JSON.stringify(payload) }),
  deleteImageAlt: (id) => request(`/image_alt.php?id=${encodeURIComponent(id)}`, { method: "DELETE" }),

  // SEO: audit
  listAuditIssues: () => request("/seo_audit.php"),
  runAudit: () => request("/seo_audit.php?run=1", { method: "POST" }),
  resolveAuditIssue: (id) => request(`/seo_audit.php?id=${encodeURIComponent(id)}`, { method: "DELETE" }),
};
