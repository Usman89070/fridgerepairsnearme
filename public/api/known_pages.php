<?php
// Shared list of this site's static (non-blog) routes — used by
// sitemap.php to build the XML sitemap, and by seo.php so the SEO
// dashboard can show every known page even before it has an override
// row in page_seo. Keeping one list means the two can never drift
// apart.
function known_pages() {
    return [
        ['path' => '/', 'label' => 'Homepage', 'changefreq' => 'weekly', 'priority' => '1.0'],
        ['path' => '/fridge-repairs/', 'label' => 'Service Areas (hub)', 'changefreq' => 'weekly', 'priority' => '0.9'],
        ['path' => '/domestic-fridge-repairs-sydney/', 'label' => 'Domestic Fridge Repairs', 'changefreq' => 'weekly', 'priority' => '0.9'],
        ['path' => '/same-day-fridge-repair-sydney/', 'label' => 'Same Day Fridge Repair', 'changefreq' => 'weekly', 'priority' => '0.9'],
        ['path' => '/wine-fridge-repairs-sydney/', 'label' => 'Wine Fridge Repairs', 'changefreq' => 'weekly', 'priority' => '0.8'],
        ['path' => '/display-fridge-repairs-sydney/', 'label' => 'Display Fridge Repairs', 'changefreq' => 'weekly', 'priority' => '0.8'],
        ['path' => '/ice-maker-repairs-sydney/', 'label' => 'Ice Maker Repairs', 'changefreq' => 'weekly', 'priority' => '0.8'],
        ['path' => '/fridge-repairs/eastern-suburbs/', 'label' => 'Eastern Suburbs', 'changefreq' => 'weekly', 'priority' => '0.8'],
        ['path' => '/fridge-repairs/north-shore/', 'label' => 'North Shore', 'changefreq' => 'weekly', 'priority' => '0.8'],
        ['path' => '/fridge-repairs/northern-beaches/', 'label' => 'Northern Beaches', 'changefreq' => 'weekly', 'priority' => '0.8'],
        ['path' => '/fridge-repairs/st-george/', 'label' => 'St George', 'changefreq' => 'weekly', 'priority' => '0.8'],
        ['path' => '/fridge-repairs/sutherland-shire/', 'label' => 'Sutherland Shire', 'changefreq' => 'weekly', 'priority' => '0.8'],
        ['path' => '/fridge-repairs/western-sydney/', 'label' => 'Western Sydney', 'changefreq' => 'weekly', 'priority' => '0.8'],
        ['path' => '/fridge-repairs/sydney-cbd/', 'label' => 'Sydney CBD', 'changefreq' => 'weekly', 'priority' => '0.8'],
        ['path' => '/fridge-repairs/burwood/', 'label' => 'Burwood', 'changefreq' => 'weekly', 'priority' => '0.7'],
        ['path' => '/fridge-repairs/marrickville/', 'label' => 'Marrickville', 'changefreq' => 'weekly', 'priority' => '0.7'],
        ['path' => '/fridge-repairs/parramatta/', 'label' => 'Parramatta', 'changefreq' => 'weekly', 'priority' => '0.7'],
        ['path' => '/contact-us/', 'label' => 'Contact Us', 'changefreq' => 'monthly', 'priority' => '0.7'],
        ['path' => '/blog', 'label' => 'Blog (index)', 'changefreq' => 'weekly', 'priority' => '0.8'],
    ];
}
