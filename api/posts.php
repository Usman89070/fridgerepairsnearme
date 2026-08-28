<?php
require_once __DIR__ . '/auth.php';

$method = $_SERVER['REQUEST_METHOD'];
$pdo = get_db();

function slugify($text) {
    $text = strtolower(trim((string)$text));
    $text = preg_replace('/[^a-z0-9]+/', '-', $text);
    $text = trim($text, '-');
    return $text !== '' ? $text : 'post';
}

function unique_slug($pdo, $base, $excludeId = null) {
    $slug = $base;
    $i = 2;
    while (true) {
        $sql = 'SELECT id FROM posts WHERE slug = ?';
        $params = [$slug];
        if ($excludeId !== null) {
            $sql .= ' AND id != ?';
            $params[] = $excludeId;
        }
        $stmt = $pdo->prepare($sql);
        $stmt->execute($params);
        if (!$stmt->fetch()) return $slug;
        $slug = $base . '-' . $i;
        $i++;
    }
}

// ---- Public reads: list all posts, or a single post by slug ----
if ($method === 'GET') {
    if (isset($_GET['slug'])) {
        $stmt = $pdo->prepare('SELECT id, slug, category, title, excerpt, content, featured_image, created_at, updated_at FROM posts WHERE slug = ? LIMIT 1');
        $stmt->execute([$_GET['slug']]);
        $post = $stmt->fetch();
        if (!$post) json_out(['error' => 'Not found'], 404);
        json_out($post);
    }

    $stmt = $pdo->query('SELECT id, slug, category, title, excerpt, featured_image, created_at, updated_at FROM posts ORDER BY created_at DESC');
    json_out($stmt->fetchAll());
}

// ---- Everything else (create/update/delete) requires admin login ----
require_login();

if ($method === 'POST') {
    $input = json_input();
    $title = trim((string)($input['title'] ?? ''));
    $category = trim((string)($input['category'] ?? ''));
    $excerpt = trim((string)($input['excerpt'] ?? ''));
    $content = (string)($input['content'] ?? '');

    if ($title === '' || $category === '' || $excerpt === '' || trim($content) === '') {
        json_out(['error' => 'Title, category, excerpt and content are all required'], 400);
    }

    $requestedSlug = trim((string)($input['slug'] ?? ''));
    $baseSlug = slugify($requestedSlug !== '' ? $requestedSlug : $title);
    $slug = unique_slug($pdo, $baseSlug);
    $featuredImage = trim((string)($input['featured_image'] ?? ''));
    $featuredImage = $featuredImage !== '' ? $featuredImage : null;

    $stmt = $pdo->prepare('INSERT INTO posts (slug, category, title, excerpt, content, featured_image) VALUES (?, ?, ?, ?, ?, ?)');
    $stmt->execute([$slug, $category, $title, $excerpt, $content, $featuredImage]);

    json_out(['ok' => true, 'id' => (int)$pdo->lastInsertId(), 'slug' => $slug], 201);
}

if ($method === 'PUT') {
    $id = (int)($_GET['id'] ?? 0);
    if ($id <= 0) json_out(['error' => 'Missing post id'], 400);

    $stmt = $pdo->prepare('SELECT id FROM posts WHERE id = ?');
    $stmt->execute([$id]);
    if (!$stmt->fetch()) json_out(['error' => 'Not found'], 404);

    $input = json_input();
    $title = trim((string)($input['title'] ?? ''));
    $category = trim((string)($input['category'] ?? ''));
    $excerpt = trim((string)($input['excerpt'] ?? ''));
    $content = (string)($input['content'] ?? '');

    if ($title === '' || $category === '' || $excerpt === '' || trim($content) === '') {
        json_out(['error' => 'Title, category, excerpt and content are all required'], 400);
    }

    $requestedSlug = trim((string)($input['slug'] ?? ''));
    $baseSlug = slugify($requestedSlug !== '' ? $requestedSlug : $title);
    $slug = unique_slug($pdo, $baseSlug, $id);
    $featuredImage = trim((string)($input['featured_image'] ?? ''));
    $featuredImage = $featuredImage !== '' ? $featuredImage : null;

    $stmt = $pdo->prepare('UPDATE posts SET slug = ?, category = ?, title = ?, excerpt = ?, content = ?, featured_image = ? WHERE id = ?');
    $stmt->execute([$slug, $category, $title, $excerpt, $content, $featuredImage, $id]);

    json_out(['ok' => true, 'slug' => $slug]);
}

if ($method === 'DELETE') {
    $id = (int)($_GET['id'] ?? 0);
    if ($id <= 0) json_out(['error' => 'Missing post id'], 400);

    $stmt = $pdo->prepare('DELETE FROM posts WHERE id = ?');
    $stmt->execute([$id]);

    json_out(['ok' => true]);
}

json_out(['error' => 'Method not allowed'], 405);
