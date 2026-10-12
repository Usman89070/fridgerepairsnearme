<?php
require_once __DIR__ . '/auth.php';
require_once __DIR__ . '/known_pages.php';

$method = $_SERVER['REQUEST_METHOD'];
$pdo = get_db();

const SEO_FIELDS = [
    'title', 'meta_description', 'canonical_url', 'robots_directive',
    'h1', 'primary_keyword', 'secondary_keywords', 'schema_json',
];

// ---- Public read: a single page's override, fetched by every page on
// every visit via usePageSeo. Must stay public (no login) and fast. ----
if ($method === 'GET' && isset($_GET['path']) && !isset($_GET['all'])) {
    $path = (string)$_GET['path'];
    $stmt = $pdo->prepare('SELECT ' . implode(', ', SEO_FIELDS) . ' FROM page_seo WHERE url_path = ? LIMIT 1');
    $stmt->execute([$path]);
    $row = $stmt->fetch();
    json_out($row ?: new stdClass());
}

// ---- Everything else requires admin login ----
require_login();

// List every known page, left-joined with whatever override exists —
// so the dashboard shows all pages even before they've been touched.
if ($method === 'GET' && isset($_GET['all'])) {
    $stmt = $pdo->query('SELECT url_path, ' . implode(', ', SEO_FIELDS) . ', updated_at FROM page_seo');
    $overrides = [];
    foreach ($stmt->fetchAll() as $row) {
        $overrides[$row['url_path']] = $row;
    }

    $pages = [];
    foreach (known_pages() as $page) {
        $existing = $overrides[$page['path']] ?? null;
        $pages[] = [
            'url_path' => $page['path'],
            'label' => $page['label'],
            'has_override' => $existing !== null,
            'title' => $existing['title'] ?? null,
            'meta_description' => $existing['meta_description'] ?? null,
            'canonical_url' => $existing['canonical_url'] ?? null,
            'robots_directive' => $existing['robots_directive'] ?? null,
            'h1' => $existing['h1'] ?? null,
            'primary_keyword' => $existing['primary_keyword'] ?? null,
            'secondary_keywords' => $existing['secondary_keywords'] ?? null,
            'schema_json' => $existing['schema_json'] ?? null,
            'updated_at' => $existing['updated_at'] ?? null,
        ];
        unset($overrides[$page['path']]);
    }
    // Any override left over belongs to a page no longer in known_pages()
    // (e.g. a route that was removed) — still show it so it can be cleaned up.
    foreach ($overrides as $path => $row) {
        $pages[] = [
            'url_path' => $path,
            'label' => $path . ' (not a current route)',
            'has_override' => true,
        ] + $row;
    }

    json_out($pages);
}

if ($method === 'POST') {
    $input = json_input();
    $urlPath = trim((string)($input['url_path'] ?? ''));
    if ($urlPath === '' || $urlPath[0] !== '/') {
        json_out(['error' => 'url_path is required and must start with /'], 400);
    }

    if (!empty($input['schema_json'])) {
        json_decode($input['schema_json']);
        if (json_last_error() !== JSON_ERROR_NONE) {
            json_out(['error' => 'schema_json is not valid JSON: ' . json_last_error_msg()], 400);
        }
    }

    $values = [$urlPath];
    $setClauses = [];
    foreach (SEO_FIELDS as $field) {
        $v = trim((string)($input[$field] ?? ''));
        $values[] = $v !== '' ? $v : null;
    }

    $placeholders = implode(', ', array_fill(0, count(SEO_FIELDS), '?'));
    $updateClause = implode(', ', array_map(fn($f) => "$f = VALUES($f)", SEO_FIELDS));

    $sql = 'INSERT INTO page_seo (url_path, ' . implode(', ', SEO_FIELDS) . ')
            VALUES (?, ' . $placeholders . ')
            ON DUPLICATE KEY UPDATE ' . $updateClause;
    $stmt = $pdo->prepare($sql);
    $stmt->execute($values);

    json_out(['ok' => true]);
}

if ($method === 'DELETE') {
    $urlPath = trim((string)($_GET['path'] ?? ''));
    if ($urlPath === '') json_out(['error' => 'Missing path'], 400);

    $stmt = $pdo->prepare('DELETE FROM page_seo WHERE url_path = ?');
    $stmt->execute([$urlPath]);

    json_out(['ok' => true]);
}

json_out(['error' => 'Method not allowed'], 405);
