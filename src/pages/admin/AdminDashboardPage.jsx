import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAdminAuth from "../../hooks/useAdminAuth";
import { api } from "../../lib/api";
import ChangePasswordForm from "../../components/admin/ChangePasswordForm";

export default function AdminDashboardPage() {
  const navigate = useNavigate();
  const { status, username } = useAdminAuth();
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [showPasswordForm, setShowPasswordForm] = useState(false);

  useEffect(() => {
    document.title = "Blog Admin | Fridge Repairs Near Me";
  }, []);

  const loadPosts = () => {
    setLoadingPosts(true);
    api
      .listPosts()
      .then(setPosts)
      .finally(() => setLoadingPosts(false));
  };

  useEffect(() => {
    if (status === "ready") loadPosts();
  }, [status]);

  const handleDelete = async (post) => {
    if (!window.confirm(`Delete "${post.title}"? This cannot be undone.`)) return;
    await api.deletePost(post.id);
    loadPosts();
  };

  const handleLogout = async () => {
    await api.logout();
    navigate("/admin/login", { replace: true });
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
          <h1>Blog Admin</h1>
          <p>Signed in as {username}</p>
        </div>
        <div className="admin-topbar__actions">
          <button className="btn btn-outline btn-sm" onClick={() => setShowPasswordForm((v) => !v)}>
            {showPasswordForm ? "Close" : "Change Password"}
          </button>
          <button className="btn btn-outline btn-sm" onClick={handleLogout}>Logout</button>
        </div>
      </header>

      {showPasswordForm && <ChangePasswordForm onDone={() => setShowPasswordForm(false)} />}

      <div className="admin-panel">
        <div className="admin-panel__head">
          <h2>Blog Posts</h2>
          <Link to="/admin/posts/new" className="btn btn-primary btn-sm">+ New Post</Link>
        </div>

        {loadingPosts && <p>Loading posts…</p>}
        {!loadingPosts && posts.length === 0 && <p>No posts yet — create your first one.</p>}

        {!loadingPosts && posts.length > 0 && (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th></th>
                  <th>Title</th>
                  <th>Category</th>
                  <th>Updated</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {posts.map((post) => (
                  <tr key={post.id}>
                    <td>
                      {post.featured_image ? (
                        <img src={post.featured_image} alt="" className="admin-table__thumb" />
                      ) : (
                        <span className="admin-table__thumb admin-table__thumb--empty" />
                      )}
                    </td>
                    <td>{post.title}</td>
                    <td>{post.category}</td>
                    <td>{new Date(post.updated_at).toLocaleDateString()}</td>
                    <td className="admin-table__actions">
                      <Link to={`/admin/posts/${post.slug}/edit`} className="btn btn-outline btn-sm">Edit</Link>
                      <button className="btn btn-sm admin-btn-danger" onClick={() => handleDelete(post)}>Delete</button>
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
