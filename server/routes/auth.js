const express = require("express");
const bcrypt = require("bcryptjs");
const AdminUser = require("../models/AdminUser");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

router.post("/login", async (req, res) => {
  const { username, password } = req.body || {};
  if (!username || !password) {
    return res.status(400).json({ error: "Username and password are required" });
  }

  const user = await AdminUser.findOne({ username: String(username).trim() });
  if (!user || !(await bcrypt.compare(password, user.passwordHash))) {
    return res.status(401).json({ error: "Invalid username or password" });
  }

  req.session.regenerate((err) => {
    if (err) return res.status(500).json({ error: "Login failed" });
    req.session.adminId = user._id.toString();
    req.session.username = user.username;
    res.json({ ok: true, username: user.username });
  });
});

router.post("/logout", (req, res) => {
  req.session.destroy(() => {
    res.clearCookie("connect.sid");
    res.json({ ok: true });
  });
});

router.get("/me", (req, res) => {
  if (!req.session.adminId) return res.json({ authenticated: false });
  res.json({ authenticated: true, username: req.session.username });
});

router.post("/change-password", requireAuth, async (req, res) => {
  const { currentPassword, newPassword } = req.body || {};
  if (!newPassword || String(newPassword).length < 8) {
    return res.status(400).json({ error: "New password must be at least 8 characters" });
  }

  const user = await AdminUser.findById(req.session.adminId);
  if (!user || !(await bcrypt.compare(currentPassword || "", user.passwordHash))) {
    return res.status(401).json({ error: "Current password is incorrect" });
  }

  user.passwordHash = await bcrypt.hash(newPassword, 12);
  await user.save();
  res.json({ ok: true });
});

module.exports = router;
