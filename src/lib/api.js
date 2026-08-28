const BASE = "/api";

async function request(path, options = {}) {
  const res = await fetch(`${BASE}${path}`, {
    credentials: "same-origin",
    headers: { "Content-Type": "application/json" },
    ...options,
  });

  let data = null;
  try {
    data = await res.json();
  } catch {
    data = null;
  }

  if (!res.ok) {
    throw new Error((data && data.error) || `Request failed (${res.status})`);
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
};
