-- Fridge Repairs Near Me — SEO dashboard schema
-- Import this file via Hostinger hPanel -> Databases -> phpMyAdmin,
-- the same way database/schema.sql was imported. Safe to re-run: every
-- statement is IF NOT EXISTS / checks before altering.

-- Per-URL SEO overrides. When a row exists for a path, the live site
-- uses it instead of the page's built-in defaults (title, description,
-- canonical, schema, etc.) — see src/hooks/usePageSeo.js.
CREATE TABLE IF NOT EXISTS page_seo (
  id INT AUTO_INCREMENT PRIMARY KEY,
  url_path VARCHAR(255) NOT NULL UNIQUE,
  title VARCHAR(255) DEFAULT NULL,
  meta_description VARCHAR(500) DEFAULT NULL,
  canonical_url VARCHAR(500) DEFAULT NULL,
  robots_directive VARCHAR(100) DEFAULT NULL,
  h1 VARCHAR(255) DEFAULT NULL,
  primary_keyword VARCHAR(255) DEFAULT NULL,
  secondary_keywords TEXT DEFAULT NULL,
  schema_json LONGTEXT DEFAULT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- 301/302 redirects. Managed from the dashboard, but applied to the
-- live site by regenerating .htaccess (see api/redirects.php's
-- ?export=htaccess) and redeploying — not read live on every request,
-- so a database hiccup can never turn into a site-wide outage over a
-- redirect lookup.
CREATE TABLE IF NOT EXISTS redirects (
  id INT AUTO_INCREMENT PRIMARY KEY,
  from_path VARCHAR(255) NOT NULL UNIQUE,
  to_path VARCHAR(500) NOT NULL,
  status_code SMALLINT NOT NULL DEFAULT 301,
  is_active TINYINT(1) NOT NULL DEFAULT 1,
  note VARCHAR(255) DEFAULT NULL,
  created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Per-image alt text overrides, keyed by the image's src path.
CREATE TABLE IF NOT EXISTS image_alt_overrides (
  id INT AUTO_INCREMENT PRIMARY KEY,
  image_src VARCHAR(500) NOT NULL UNIQUE,
  alt_text VARCHAR(255) NOT NULL,
  updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Findings from the SEO audit tool (Admin -> SEO -> Audit -> Run Audit).
CREATE TABLE IF NOT EXISTS seo_audit_issues (
  id INT AUTO_INCREMENT PRIMARY KEY,
  issue_type VARCHAR(50) NOT NULL,
  url_path VARCHAR(500) NOT NULL,
  detail VARCHAR(500) NOT NULL,
  severity ENUM('error', 'warning') NOT NULL DEFAULT 'warning',
  detected_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
  resolved_at TIMESTAMP NULL DEFAULT NULL
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Google Search Console OAuth tokens (one row, single-site). Added now
-- so the schema is ready; GSC sync itself is wired up separately once
-- you've created an OAuth client in Google Cloud Console and shared
-- the client ID/secret.
CREATE TABLE IF NOT EXISTS gsc_connection (
  id INT AUTO_INCREMENT PRIMARY KEY,
  site_url VARCHAR(255) NOT NULL,
  refresh_token TEXT NOT NULL,
  connected_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4;

-- Extend the existing posts table with SEO fields. Run only the ALTERs
-- whose column doesn't already exist — phpMyAdmin will error harmlessly
-- on a column that's already there if you re-run this file, so each is
-- wrapped so re-imports stay safe.
ALTER TABLE posts ADD COLUMN IF NOT EXISTS meta_title VARCHAR(255) DEFAULT NULL;
ALTER TABLE posts ADD COLUMN IF NOT EXISTS meta_description VARCHAR(500) DEFAULT NULL;
ALTER TABLE posts ADD COLUMN IF NOT EXISTS schema_json LONGTEXT DEFAULT NULL;
ALTER TABLE posts ADD COLUMN IF NOT EXISTS primary_keyword VARCHAR(255) DEFAULT NULL;
ALTER TABLE posts ADD COLUMN IF NOT EXISTS secondary_keywords TEXT DEFAULT NULL;
ALTER TABLE posts ADD COLUMN IF NOT EXISTS canonical_url VARCHAR(500) DEFAULT NULL;
