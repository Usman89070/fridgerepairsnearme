<?php
require_once __DIR__ . '/auth.php';
require_once __DIR__ . '/known_pages.php';

// This site is a client-rendered React app with no server-side
// rendering, so a plain PHP script can't read a page's final <title>
// or meta tags the way a headless browser could — that work already
// happens in the browser via usePageSeo. What this audit CAN check
// reliably from the server: whether known URLs actually resolve (not
// a 404/500), and problems in the blog_posts table itself (missing
// fields, bad lengths, duplicates). That's the honest scope below —
// pages relying only on their built-in JS defaults (no page_seo
// override) can't be introspected from here.

$method = $_SERVER['REQUEST_METHOD'];
$pdo = get_db();
require_login();

const BASE_URL = 'https://fridgerepairsnearme.com.au';

function check_url($path) {
    $url = BASE_URL . $path;
    $ch = curl_init($url);
    curl_setopt_array($ch, [
        CURLOPT_NOBODY => true,
        CURLOPT_FOLLOWLOCATION => false,
        CURLOPT_TIMEOUT => 8,
        CURLOPT_SSL_VERIFYPEER => true,
    ]);
    curl_exec($ch);
    $code = curl_getinfo($ch, CURLINFO_HTTP_CODE);
    $error = curl_error($ch);
    curl_close($ch);
    if ($error) return ['ok' => false, 'detail' => "Could not reach $url: $error"];
    if ($code >= 400 || $code === 0) return ['ok' => false, 'detail' => "$url returned HTTP $code"];
    return ['ok' => true];
}

if ($method === 'GET') {
    $stmt = $pdo->query('SELECT id, issue_type, url_path, detail, severity, detected_at
                          FROM seo_audit_issues WHERE resolved_at IS NULL
                          ORDER BY severity DESC, detected_at DESC');
    json_out($stmt->fetchAll());
}

if ($method === 'POST' && isset($_GET['run'])) {
    // Clear previous open findings before re-checking, so the list
    // always reflects the current state rather than accumulating.
    $pdo->exec('DELETE FROM seo_audit_issues WHERE resolved_at IS NULL');

    $insert = $pdo->prepare('INSERT INTO seo_audit_issues (issue_type, url_path, detail, severity) VALUES (?, ?, ?, ?)');
    $found = 0;

    // --- Broken links: every known static page ---
    foreach (known_pages() as $page) {
        $result = check_url($page['path']);
        if (!$result['ok']) {
            $insert->execute(['broken_link', $page['path'], $result['detail'], 'error']);
            $found++;
        }
    }

    // --- Broken links + content checks: every blog post ---
    $posts = $pdo->query('SELECT slug, title, excerpt, content, featured_image, meta_title, meta_description FROM posts')->fetchAll();

    $titleCounts = [];
    foreach ($posts as $post) {
        $titleCounts[$post['title']] = ($titleCounts[$post['title']] ?? 0) + 1;
    }

    foreach ($posts as $post) {
        $path = '/blog/' . rawurlencode($post['slug']);

        $result = check_url($path);
        if (!$result['ok']) {
            $insert->execute(['broken_link', $path, $result['detail'], 'error']);
            $found++;
        }

        if (empty($post['featured_image'])) {
            $insert->execute(['missing_image', $path, 'No featured image set — affects social sharing previews and visual SEO.', 'warning']);
            $found++;
        }

        $metaDesc = $post['meta_description'] ?: $post['excerpt'];
        $len = mb_strlen($metaDesc);
        if ($len < 70) {
            $insert->execute(['meta_description_length', $path, "Meta description is only $len characters (recommended ~120\u{2013}160).", 'warning']);
            $found++;
        } elseif ($len > 170) {
            $insert->execute(['meta_description_length', $path, "Meta description is $len characters, likely to be truncated in search results (recommended ~120\u{2013}160).", 'warning']);
            $found++;
        }

        $effectiveTitle = $post['meta_title'] ?: $post['title'];
        $titleLen = mb_strlen($effectiveTitle);
        if ($titleLen > 60) {
            $insert->execute(['title_length', $path, "Title is $titleLen characters, likely to be truncated in search results (recommended under 60).", 'warning']);
            $found++;
        }

        if ($titleCounts[$post['title']] > 1) {
            $insert->execute(['duplicate_title', $path, 'Another blog post has the exact same title.', 'warning']);
            $found++;
        }
    }

    // --- page_seo rows that exist but were left blank ---
    $overrides = $pdo->query('SELECT url_path, title, meta_description FROM page_seo')->fetchAll();
    foreach ($overrides as $row) {
        if (empty($row['title']) && empty($row['meta_description'])) {
            $insert->execute(['empty_override', $row['url_path'], 'An SEO override row exists for this page but has no title or description set — it has no effect. Remove it or fill it in.', 'warning']);
            $found++;
        }
    }

    $stmt = $pdo->query('SELECT id, issue_type, url_path, detail, severity, detected_at
                          FROM seo_audit_issues WHERE resolved_at IS NULL
                          ORDER BY severity DESC, detected_at DESC');
    json_out(['ok' => true, 'found' => $found, 'issues' => $stmt->fetchAll()]);
}

if ($method === 'DELETE') {
    $id = (int)($_GET['id'] ?? 0);
    if ($id <= 0) json_out(['error' => 'Missing id'], 400);

    $stmt = $pdo->prepare('UPDATE seo_audit_issues SET resolved_at = NOW() WHERE id = ?');
    $stmt->execute([$id]);

    json_out(['ok' => true]);
}

json_out(['error' => 'Method not allowed'], 405);
