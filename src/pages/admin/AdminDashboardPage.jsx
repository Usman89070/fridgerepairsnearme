import { useEffect, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import useAdminAuth from "../../hooks/useAdminAuth";
import { api } from "../../lib/api";
import ChangePasswordForm from "../../components/admin/ChangePasswordForm";
import "../../styles/admin.css";

export default function AdminDashboardPage() {
  const navigate = useNavigate();
  const { status, username } = useAdminAuth();
  const [posts, setPosts] = useState([]);
  const [loadingPosts, setLoadingPosts] = useState(true);
  const [enquiries, setEnquiries] = useState([]);
  const [loadingEnquiries, setLoadingEnquiries] = useState(true);
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

  const loadEnquiries = () => {
    setLoadingEnquiries(true);
    api
      .listEnquiries()
      .then(setEnquiries)
      .finally(() => setLoadingEnquiries(false));
  };

  useEffect(() => {
    if (status === "ready") {
      loadPosts();
      loadEnquiries();
    }
  }, [status]);

  const handleDelete = async (post) => {
    if (!window.confirm(`Delete "${post.title}"? This cannot be undone.`)) return;
    await api.deletePost(post.id);
    loadPosts();
  };

  const handleDeleteEnquiry = async (enquiry) => {
    if (!window.confirm(`Delete the enquiry from "${enquiry.name}"? This cannot be undone.`)) return;
    await api.deleteEnquiry(enquiry.id);
    loadEnquiries();
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
          <h2>Contact Form Enquiries</h2>
        </div>

        {loadingEnquiries && <p>Loading enquiries…</p>}
        {!loadingEnquiries && enquiries.length === 0 && <p>No enquiries yet.</p>}

        {!loadingEnquiries && enquiries.length > 0 && (
          <div className="admin-table-wrap">
            <table className="admin-table">
              <thead>
                <tr>
                  <th>Date</th>
                  <th>Name</th>
                  <th>Contact</th>
                  <th>Suburb</th>
                  <th>Appliance / Brand</th>
                  <th>Message</th>
                  <th>Email</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>
                {enquiries.map((enquiry) => (
                  <tr key={enquiry.id}>
                    <td>{new Date(enquiry.created_at).toLocaleString()}</td>
                    <td>{enquiry.name}</td>
                    <td><a href={`mailto:${enquiry.email}`}>{enquiry.email}</a></td>
                    <td>{enquiry.suburb}</td>
                    <td>{enquiry.appliance}{enquiry.brand ? ` — ${enquiry.brand}` : ""}</td>
                    <td className="admin-table__message">{enquiry.message}</td>
                    <td>
                      {Number(enquiry.email_sent) === 1 ? (
                        <span className="admin-status admin-status--ok">Sent</span>
                      ) : (
                        <span className="admin-status admin-status--fail">Not sent</span>
                      )}
                    </td>
                    <td className="admin-table__actions">
                      <button className="btn btn-sm admin-btn-danger" onClick={() => handleDeleteEnquiry(enquiry)}>Delete</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>

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
