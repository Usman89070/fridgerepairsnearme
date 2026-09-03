<?php
require_once __DIR__ . '/auth.php';

if ($_SERVER['REQUEST_METHOD'] !== 'POST') {
    json_out(['error' => 'Method not allowed'], 405);
}

$input = json_input();
$username = trim((string)($input['username'] ?? ''));
$password = (string)($input['password'] ?? '');

if ($username === '' || $password === '') {
    json_out(['error' => 'Username and password are required'], 400);
}

$stmt = get_db()->prepare('SELECT id, username, password_hash FROM admin_users WHERE username = ? LIMIT 1');
$stmt->execute([$username]);
$user = $stmt->fetch();

if (!$user || !password_verify($password, $user['password_hash'])) {
    json_out(['error' => 'Invalid username or password'], 401);
}

session_regenerate_id(true);
$_SESSION['admin_id'] = $user['id'];
$_SESSION['admin_username'] = $user['username'];

json_out(['ok' => true, 'username' => $user['username']]);
