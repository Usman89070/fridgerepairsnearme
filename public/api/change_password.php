<?php
require_once __DIR__ . '/auth.php';
require_login();

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_out(['error' => 'Method not allowed'], 405);
}

$input = json_input();
$currentPassword = (string)($input['currentPassword'] ?? '');
$newPassword = (string)($input['newPassword'] ?? '');

if (strlen($newPassword) < 8) {
    json_out(['error' => 'New password must be at least 8 characters'], 400);
}

$pdo = get_db();
$stmt = $pdo->prepare('SELECT password_hash FROM admin_users WHERE id = ?');
$stmt->execute([$_SESSION['admin_id']]);
$row = $stmt->fetch();

if (!$row || !password_verify($currentPassword, $row['password_hash'])) {
    json_out(['error' => 'Current password is incorrect'], 401);
}

$newHash = password_hash($newPassword, PASSWORD_DEFAULT);
$stmt = $pdo->prepare('UPDATE admin_users SET password_hash = ? WHERE id = ?');
$stmt->execute([$newHash, $_SESSION['admin_id']]);

json_out(['ok' => true]);
