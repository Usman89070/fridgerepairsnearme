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

export const api = {
  listPosts: () => request("/posts"),
  getPost: (slug) => request(`/posts/${encodeURIComponent(slug)}`),
  createPost: (payload) => request("/posts", { method: "POST", body: JSON.stringify(payload) }),
  updatePost: (id, payload) => request(`/posts/${encodeURIComponent(id)}`, { method: "PUT", body: JSON.stringify(payload) }),
  deletePost: (id) => request(`/posts/${encodeURIComponent(id)}`, { method: "DELETE" }),

  login: (username, password) => request("/login", { method: "POST", body: JSON.stringify({ username, password }) }),
  logout: () => request("/logout", { method: "POST" }),
  me: () => request("/me"),
  changePassword: (currentPassword, newPassword) =>
    request("/change-password", { method: "POST", body: JSON.stringify({ currentPassword, newPassword }) }),
};
