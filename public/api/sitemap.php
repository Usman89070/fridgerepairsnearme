<?php
// Dynamic sitemap — served at /sitemap.xml via the rewrite rule in
// .htaccess. Regenerated on every request so newly published blog
// posts show up automatically, with no manual step needed after
// adding a post in the admin panel.

header('Content-Type: application/xml; charset=utf-8');

$baseUrl = 'https://fridgerepairsnearme.com.au';

$urls = [
    ['loc' => $baseUrl . '/', 'changefreq' => 'weekly', 'priority' => '1.0'],
    ['loc' => $baseUrl . '/fridge-repairs/', 'changefreq' => 'weekly', 'priority' => '0.9'],
    ['loc' => $baseUrl . '/blog', 'changefreq' => 'weekly', 'priority' => '0.8'],
];

// Blog posts are optional here on purpose: if the database is
// unreachable, the sitemap still returns the static pages above
// rather than failing outright.
try {
    require_once __DIR__ . '/db.php';
    $pdo = get_db();
    $stmt = $pdo->query('SELECT slug, updated_at FROM posts ORDER BY updated_at DESC');
    foreach ($stmt->fetchAll() as $post) {
        $urls[] = [
            'loc' => $baseUrl . '/blog/' . rawurlencode($post['slug']),
            'lastmod' => date('Y-m-d', strtotime($post['updated_at'])),
            'changefreq' => 'monthly',
            'priority' => '0.6',
        ];
    }
} catch (Throwable $e) {
    // Swallow — a sitemap missing blog posts is far better than a
    // sitemap that 500s because the database happens to be down.
}

echo '<?xml version="1.0" encoding="UTF-8"?>' . "\n";
echo '<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">' . "\n";
foreach ($urls as $url) {
    echo "  <url>\n";
    echo '    <loc>' . htmlspecialchars($url['loc'], ENT_XML1) . "</loc>\n";
    if (!empty($url['lastmod'])) {
        echo '    <lastmod>' . $url['lastmod'] . "</lastmod>\n";
    }
    echo '    <changefreq>' . $url['changefreq'] . "</changefreq>\n";
    echo '    <priority>' . $url['priority'] . "</priority>\n";
    echo "  </url>\n";
}
echo '</urlset>' . "\n";
