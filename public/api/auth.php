<?php
require_once __DIR__ . '/db.php';

// Turn any otherwise-uncaught error (a bad SQL query, a missing column,
// etc.) into a readable JSON message instead of a blank 500 response —
// makes remote debugging possible without server log access.
set_exception_handler(function ($e) {
    http_response_code(500);
    header('Content-Type: application/json; charset=utf-8');
    echo json_encode(['error' => 'Server error: ' . $e->getMessage()]);
    exit;
});

session_set_cookie_params([
    'lifetime' => 0,
    'path' => '/',
    'httponly' => true,
    'samesite' => 'Lax',
]);
session_start();

header('Content-Type: application/json; charset=utf-8');

function json_input() {
    $raw = file_get_contents('php://input');
    $data = json_decode($raw, true);
    return is_array($data) ? $data : [];
}

function json_out($data, $status = 200) {
    http_response_code($status);
    echo json_encode($data);
    exit;
}

function current_admin() {
    if (empty($_SESSION['admin_id'])) return null;
    return ['id' => $_SESSION['admin_id'], 'username' => $_SESSION['admin_username']];
}

function require_login() {
    if (!current_admin()) {
        json_out(['error' => 'Not authenticated'], 401);
    }
}
