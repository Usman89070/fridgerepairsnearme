<?php
require_once __DIR__ . '/auth.php';

$method = $_SERVER['REQUEST_METHOD'];
$pdo = get_db();

// ---- Public read: every override, fetched once by the app on load
// (see src/hooks/useImageAlt.js). Small table, one request per visit. ----
if ($method === 'GET' && !isset($_GET['admin'])) {
    $stmt = $pdo->query('SELECT image_src, alt_text FROM image_alt_overrides');
    $map = [];
    foreach ($stmt->fetchAll() as $row) {
        $map[$row['image_src']] = $row['alt_text'];
    }
    json_out($map);
}

require_login();

if ($method === 'GET') {
    $stmt = $pdo->query('SELECT id, image_src, alt_text, updated_at FROM image_alt_overrides ORDER BY image_src');
    json_out($stmt->fetchAll());
}

if ($method === 'POST') {
    $input = json_input();
    $src = trim((string)($input['image_src'] ?? ''));
    $alt = trim((string)($input['alt_text'] ?? ''));

    if ($src === '' || $alt === '') {
        json_out(['error' => 'image_src and alt_text are both required'], 400);
    }

    $stmt = $pdo->prepare('INSERT INTO image_alt_overrides (image_src, alt_text) VALUES (?, ?)
                            ON DUPLICATE KEY UPDATE alt_text = VALUES(alt_text)');
    $stmt->execute([$src, $alt]);

    json_out(['ok' => true]);
}

if ($method === 'DELETE') {
    $id = (int)($_GET['id'] ?? 0);
    if ($id <= 0) json_out(['error' => 'Missing id'], 400);

    $stmt = $pdo->prepare('DELETE FROM image_alt_overrides WHERE id = ?');
    $stmt->execute([$id]);

    json_out(['ok' => true]);
}

json_out(['error' => 'Method not allowed'], 405);
