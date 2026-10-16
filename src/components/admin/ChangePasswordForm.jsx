import { useState } from "react";
import { api } from "../../lib/api";

export default function ChangePasswordForm({ onDone }) {
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [error, setError] = useState("");
  const [okMessage, setOkMessage] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    setOkMessage("");
    setSubmitting(true);
    try {
      await api.changePassword(currentPassword, newPassword);
      setOkMessage("Password updated.");
      setCurrentPassword("");
      setNewPassword("");
    } catch (err) {
      setError(err.message);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <form className="admin-panel admin-password-form" onSubmit={handleSubmit}>
      <h2>Change Password</h2>

      <label className="admin-field">
        <span>Current Password</span>
        <input
          type="password"
          value={currentPassword}
          onChange={(e) => setCurrentPassword(e.target.value)}
          required
        />
      </label>

      <label className="admin-field">
        <span>New Password (min 8 characters)</span>
        <input
          type="password"
          value={newPassword}
          onChange={(e) => setNewPassword(e.target.value)}
          minLength={8}
          required
        />
      </label>

      {error && <p className="admin-error">{error}</p>}
      {okMessage && <p className="admin-success">{okMessage}</p>}

      <div className="admin-form__actions">
        <button type="submit" className="btn btn-primary btn-sm" disabled={submitting}>
          {submitting ? "Saving…" : "Update Password"}
        </button>
        <button type="button" className="btn btn-outline btn-sm" onClick={onDone}>Close</button>
      </div>
    </form>
  );
}
