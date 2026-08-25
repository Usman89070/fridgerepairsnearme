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
