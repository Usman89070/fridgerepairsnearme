import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "../../lib/api";
import "../../styles/admin.css";

export default function AdminLoginPage() {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [submitting, setSubmitting] = useState(false);

  useEffect(() => {
    document.title = "Admin Login | Fridge Repairs Near Me";
  }, []);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setSubmitting(true);
    try {
      await api.login(username, password);
      navigate("/admin", { replace: true });
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="admin-auth">
      <form className="admin-auth__card" onSubmit={handleSubmit}>
        <h1>Admin Login</h1>
        <p className="admin-auth__sub">Fridge Repairs Near Me — Blog Admin</p>

        <label className="admin-field">
          <span>Username</span>
          {/* eslint-disable-next-line jsx-a11y/no-autofocus */}
          <input value={username} onChange={(e) => setUsername(e.target.value)} autoFocus required />
        </label>

        <label className="admin-field">
          <span>Password</span>
          <input type="password" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </label>

        {error && <p className="admin-error">{error}</p>}

        <button type="submit" className="btn btn-primary btn-block" disabled={submitting}>
          {submitting ? "Signing in…" : "Sign In"}
        </button>
      </form>
    </div>
  );
}
