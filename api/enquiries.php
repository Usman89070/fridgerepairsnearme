<?php
require_once __DIR__ . '/auth.php';
require_login();

$method = $_SERVER['REQUEST_METHOD'];
$pdo = get_db();

if ($method === 'GET') {
    $stmt = $pdo->query('SELECT id, name, email, suburb, appliance, brand, message, email_sent, created_at FROM enquiries ORDER BY created_at DESC');
    json_out($stmt->fetchAll());
}

if ($method === 'DELETE') {
    $id = $_GET['id'] ?? null;
    if (!$id) json_out(['error' => 'Missing id'], 400);
    $pdo->prepare('DELETE FROM enquiries WHERE id = ?')->execute([$id]);
    json_out(['ok' => true]);
}

json_out(['error' => 'Method not allowed'], 405);
