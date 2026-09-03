<?php
// ============================================================
// Fridge Repairs Near Me — database connection settings
// ------------------------------------------------------------
// Fill these in with the MySQL details from Hostinger hPanel ->
// Databases -> MySQL Databases (after creating a database there).
// DB_HOST is almost always "localhost" on Hostinger shared hosting.
// ============================================================
define('DB_HOST', 'localhost');
define('DB_NAME', 'REPLACE_WITH_YOUR_DATABASE_NAME');
define('DB_USER', 'REPLACE_WITH_YOUR_DATABASE_USERNAME');
define('DB_PASS', 'REPLACE_WITH_YOUR_DATABASE_PASSWORD');

// ============================================================
// Contact form outgoing email (SMTP) — used by api/enquiry.php.
// ------------------------------------------------------------
// Fill these in with the mailbox details from Hostinger hPanel ->
// Emails -> (your mailbox) -> Configure Email Client. Sending
// authenticated, as this real mailbox, is what proves to Gmail/
// Outlook/etc. that fridgerepairsnearme.com.au actually sent the
// mail — the thing a DNS record or plain mail() can't do on its own.
// SMTP_USER is the full mailbox address, e.g.
// info@fridgerepairsnearme.com.au — using that same mailbox as both
// SMTP_USER and SMTP_TO_EMAIL is the simplest setup: the form sends
// itself an email you already check.
// SMTP_PORT: 465 with SMTP_SECURE 'ssl', or 587 with SMTP_SECURE 'tls'
// (Hostinger's mailbox settings page shows which port/security pair
// your mailbox uses — use exactly what it shows, don't guess).
//
// This file is never committed to git (see .gitignore) — only this
// placeholder version lives in the repo. Treat the real file the same
// way you'd treat any other credential: don't paste it into chat,
// don't email it, don't put it anywhere but directly on the server.
// ============================================================
define('SMTP_HOST', 'smtp.hostinger.com');
define('SMTP_PORT', 465);
define('SMTP_SECURE', 'ssl');
define('SMTP_USER', 'REPLACE_WITH_YOUR_MAILBOX_ADDRESS');
define('SMTP_PASS', 'REPLACE_WITH_YOUR_MAILBOX_PASSWORD');
define('SMTP_TO_EMAIL', 'info@fridgerepairsnearme.com.au');
