<?php
require_once __DIR__ . '/auth.php';

$method = $_SERVER['REQUEST_METHOD'];
$pdo = get_db();

// Redirects are never read live by visitors — they're only applied by
// regenerating .htaccess (the ?export=htaccess route below) and
// redeploying, so every request after login requires it.
require_login();

// Plain-text Apache RewriteRule block, built from every active
// redirect. Copy this into public/.htaccess (just above the SPA
// fallback block) before the next deploy. Keeping redirects as a
// static file read by Apache — instead of a live database lookup on
// every request — means a database hiccup can never turn into a
// site-wide outage the way the old app-shell.html setup once did.
if ($method === 'GET' && isset($_GET['export']) && $_GET['export'] === 'htaccess') {
    $stmt = $pdo->query("SELECT from_path, to_path, status_code FROM redirects WHERE is_active = 1 ORDER BY from_path");
    $rows = $stmt->fetchAll();

    header('Content-Type: text/plain; charset=utf-8');
    echo "# Paste this block into public/.htaccess, directly under\n";
    echo "# \"RewriteBase /\" and above the other RewriteCond/RewriteRule\n";
    echo "# blocks, then redeploy. Generated from the Redirects admin page.\n\n";
    foreach ($rows as $r) {
        $from = trim($r['from_path'], '/');
        $code = (int)$r['status_code'] === 302 ? 'R=302' : 'R=301';
        echo 'RewriteRule ^' . preg_quote($from, '/') . '/?$ ' . $r['to_path'] . " [$code,L]\n";
    }
    exit;
}

if ($method === 'GET') {
    $stmt = $pdo->query('SELECT id, from_path, to_path, status_code, is_active, note, created_at, updated_at FROM redirects ORDER BY created_at DESC');
    json_out($stmt->fetchAll());
}

if ($method === 'POST') {
    $input = json_input();
    $from = trim((string)($input['from_path'] ?? ''));
    $to = trim((string)($input['to_path'] ?? ''));
    $status = (int)($input['status_code'] ?? 301);
    $note = trim((string)($input['note'] ?? ''));

    if ($from === '' || $from[0] !== '/') {
        json_out(['error' => 'from_path is required and must start with /'], 400);
    }
    if ($to === '') {
        json_out(['error' => 'to_path is required'], 400);
    }
    if (!in_array($status, [301, 302], true)) {
        json_out(['error' => 'status_code must be 301 or 302'], 400);
    }

    $stmt = $pdo->prepare('INSERT INTO redirects (from_path, to_path, status_code, note) VALUES (?, ?, ?, ?)');
    $stmt->execute([$from, $to, $status, $note !== '' ? $note : null]);

    json_out(['ok' => true, 'id' => (int)$pdo->lastInsertId()], 201);
}

if ($method === 'PUT') {
    $id = (int)($_GET['id'] ?? 0);
    if ($id <= 0) json_out(['error' => 'Missing redirect id'], 400);

    $input = json_input();
    $from = trim((string)($input['from_path'] ?? ''));
    $to = trim((string)($input['to_path'] ?? ''));
    $status = (int)($input['status_code'] ?? 301);
    $isActive = !empty($input['is_active']) ? 1 : 0;
    $note = trim((string)($input['note'] ?? ''));

    if ($from === '' || $from[0] !== '/') {
        json_out(['error' => 'from_path is required and must start with /'], 400);
    }
    if ($to === '') {
        json_out(['error' => 'to_path is required'], 400);
    }
    if (!in_array($status, [301, 302], true)) {
        json_out(['error' => 'status_code must be 301 or 302'], 400);
    }

    $stmt = $pdo->prepare('UPDATE redirects SET from_path = ?, to_path = ?, status_code = ?, is_active = ?, note = ? WHERE id = ?');
    $stmt->execute([$from, $to, $status, $isActive, $note !== '' ? $note : null, $id]);

    json_out(['ok' => true]);
}

if ($method === 'DELETE') {
    $id = (int)($_GET['id'] ?? 0);
    if ($id <= 0) json_out(['error' => 'Missing redirect id'], 400);

    $stmt = $pdo->prepare('DELETE FROM redirects WHERE id = ?');
    $stmt->execute([$id]);

    json_out(['ok' => true]);
}

json_out(['error' => 'Method not allowed'], 405);
