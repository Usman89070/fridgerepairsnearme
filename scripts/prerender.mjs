// Post-build prerender step.
//
// This site is a client-rendered SPA (Vite + React, no SSR framework), so
// the HTML Apache serves for every route is the same near-empty shell —
// real content only appears after the browser downloads and runs the JS
// bundle. That's a real problem for crawlers that don't execute
// JavaScript (Bingbot's JS rendering is far less reliable than
// Googlebot's, and plenty of SEO tools don't run JS at all either).
//
// This script fixes that for the static marketing pages — the ones whose
// content is fixed at build time — by booting a local preview server,
// visiting each route in a real headless browser, letting React render
// it, and writing the fully-rendered HTML back to disk at that route's
// path. Apache then serves real content immediately, no JS execution
// required, while React still hydrates on top for interactivity.
//
// The blog (index + posts) is deliberately left out: it reads from the
// live database on every page view via api.js, specifically so a new
// post published in the admin panel appears immediately without a
// rebuild. Prerendering it here would bake in whatever posts exist in
// this build environment (usually none) and go stale the moment someone
// publishes — worse than the current behaviour, not better. Admin routes
// are excluded too; they're noindex'd and disallowed in robots.txt, and
// have no public content worth prerendering.
//
// Requires the `playwright` package (its Chromium) to be resolvable —
// not a project dependency (keeps `npm install` light for a repo nobody
// but this build step needs it in), so run this with
// NODE_PATH pointed at an install that has it, e.g.:
//   NODE_PATH=/opt/node22/lib/node_modules node scripts/prerender.mjs

import { preview } from "vite";
import { copyFileSync, mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";
import { createRequire } from "node:module";

// Node's ESM resolver doesn't honour NODE_PATH (only CJS require() does),
// so playwright — intentionally not a project devDependency — is loaded
// this way rather than with a normal `import`.
const { chromium } = createRequire(import.meta.url)("playwright");

const __dirname = dirname(fileURLToPath(import.meta.url));
const root = join(__dirname, "..");
const distDir = join(root, "dist");

const ROUTES = [
  "/",
  "/fridge-repairs/",
  "/domestic-fridge-repairs-sydney/",
  "/same-day-fridge-repair-sydney/",
  "/contact-us/",
  "/areas-we-service/",
];

async function main() {
  // The SPA-fallback rewrite in .htaccess serves this file for any route
  // that isn't a real file/directory — /blog, /admin/*, a bad URL, a
  // future route added without a matching prerender entry. It has to
  // stay the original near-empty shell, not a copy of whichever page
  // happens to get prerendered into dist/index.html below, or every one
  // of those routes would show the homepage's title/H1 to a crawler
  // reading raw HTML before React corrects it client-side.
  copyFileSync(join(distDir, "index.html"), join(distDir, "app-shell.html"));

  const previewServer = await preview({
    root,
    preview: { port: 4321, strictPort: true },
  });
  const base = previewServer.resolvedUrls.local[0].replace(/\/$/, "");

  const browser = await chromium.launch();
  const page = await browser.newPage();

  try {
    for (const route of ROUTES) {
      await page.goto(base + route, { waitUntil: "networkidle" });
      await page.waitForSelector("h1", { timeout: 10000 });
      const html = await page.content();

      const outPath = route === "/"
        ? join(distDir, "index.html")
        : join(distDir, route.replace(/^\//, "").replace(/\/$/, ""), "index.html");

      mkdirSync(dirname(outPath), { recursive: true });
      writeFileSync(outPath, html);
      console.log(`prerendered ${route} -> ${outPath.replace(root + "/", "")}`);
    }
  } finally {
    await browser.close();
    await new Promise((resolve) => previewServer.httpServer.close(resolve));
  }
}

main().catch((err) => {
  console.error(err);
  process.exit(1);
});
