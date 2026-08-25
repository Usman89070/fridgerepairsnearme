# Fridge Repairs Near Me

React + Vite homepage for fridgerepairsnearme.com.au — an SEO-focused landing page for
local fridge repair service availability across supported Australian locations.

## Getting started

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist/
npm run lint     # oxlint
```

## Project structure

- `src/data/content.js` — all page copy in one place (locations, brands, FAQs, etc.)
- `src/components/` — one component per homepage section
- `src/styles/` — global design tokens (`index.css`) plus section styles
- `index.html` — meta tags, Open Graph, and JSON-LD structured data

## Before going live

A few things are placeholders and need real business details:

- **Email** — currently `hello@fridgerepairsnearme.com.au` in `src/data/content.js` (the site
  is email-only — no phone number is displayed anywhere)
- **ABN** — footer currently shows `[Insert ABN]`
- **Testimonials** — `src/data/content.js` `testimonials` array has placeholder quotes
- **Service areas** — confirm which suburbs/regions in `serviceAreas` are genuinely covered
- **Contact form** — `src/components/ContactForm.jsx` currently simulates submission
  client-side. Wire it up to a real endpoint (CRM, email API, or a form service) before launch.

## SEO notes

This is a client-rendered React SPA. For best crawlability/indexing, consider adding
prerendering or SSR (e.g. via a static-site-generation plugin) once content is finalised.

## Deploying to Hostinger

This project builds to plain static files (HTML/CSS/JS), so it runs on any Hostinger plan
that serves static sites — shared hosting, Business hosting, or Cloud hosting. No Node.js
runtime is needed on the server; Node is only used locally to build.

1. **Build the site locally**

   ```bash
   npm install
   npm run build
   ```

   This produces a `dist/` folder containing `index.html`, `assets/`, and `.htaccess`.

2. **Upload `dist/` to `public_html`**

   In hPanel, open **Files → File Manager** (or connect via FTP/SFTP using the credentials
   under **Files → FTP Accounts**), go into `public_html` for your domain, and upload the
   *contents* of `dist/` (not the `dist` folder itself) so `index.html` sits directly in
   `public_html`. Delete Hostinger's default placeholder files first if present.

   Via FTP/SFTP with `lftp` or `rsync`, for example:

   ```bash
   rsync -avz --delete dist/ your-ftp-user@your-server:/public_html/
   ```

3. **Point the domain**

   If `fridgerepairsnearme.com.au` is already the primary domain on the hosting plan, no
   further DNS changes are needed. If it's an addon domain, make sure it's mapped to the
   `public_html` (or subfolder) you uploaded to.

4. **Re-deploying after changes**

   Repeat steps 1–2: run `npm run build` again and re-upload the new `dist/` contents,
   overwriting the old files (the JS/CSS filenames are content-hashed, so browsers pick up
   the new version automatically; `.htaccess` sets HTML to `no-cache` so updates show
   immediately without users needing a hard refresh).

`public/.htaccess` (copied into every build) enables gzip compression, long-lived caching
for hashed assets, and an `index.html` fallback for any unmatched path — all standard for
Apache/LiteSpeed, which is what Hostinger's shared and Business hosting run on.
