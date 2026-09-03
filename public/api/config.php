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
// Emails -> (your mailbox) -> Configure Email Client. Using real,
// authenticated SMTP here (instead of PHP's built-in mail()) is what
// keeps enquiries out of the spam folder — sending "as" the mailbox
// you're already logged into, matching your domain's SPF/DKIM, is far
// more trusted than an unauthenticated mail() call from the server.
// SMTP_USER is almost always the full mailbox address, e.g.
// info@fridgerepairsnearme.com.au — using that same mailbox as both
// SMTP_USER and SMTP_TO_EMAIL is the simplest setup: the form sends
// itself an email you already check.
// SMTP_PORT: 465 with SMTP_SECURE 'ssl', or 587 with SMTP_SECURE 'tls'
// (Hostinger's mailbox settings page shows which port/security pair
// your mailbox uses).
// ============================================================
define('SMTP_HOST', 'smtp.hostinger.com');
define('SMTP_PORT', 465);
define('SMTP_SECURE', 'ssl');
define('SMTP_USER', 'REPLACE_WITH_YOUR_MAILBOX_ADDRESS');
define('SMTP_PASS', 'REPLACE_WITH_YOUR_MAILBOX_PASSWORD');
define('SMTP_TO_EMAIL', 'info@fridgerepairsnearme.com.au');
