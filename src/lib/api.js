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
};
