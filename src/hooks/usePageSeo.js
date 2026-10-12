import { useEffect, useState } from "react";
import { api } from "../lib/api";

// Sets per-page <title>/meta description/canonical/OG tags and injects
// JSON-LD structured data, restoring whatever was there before on
// unmount. Needed because this SPA has a single static index.html — a
// route-level component is the only place left to correct these for a
// specific page (matching the pattern BlogPostPage already uses for
// document.title alone).
function setMetaContent(selector, attr, value) {
  const el = document.querySelector(selector);
  if (!el) return null;
  const prev = el.getAttribute(attr);
  el.setAttribute(attr, value);
  return prev;
}

// Every page calls usePageSeo with its own built-in defaults (written
// into the page's JSX). This hook also checks the SEO dashboard's
// page_seo table for the current path and prefers any field set
// there, so admins can override title/description/canonical/robots/
// schema per URL without a code change or redeploy. The lookup is
// fire-and-forget: defaults apply immediately on render, and the page
// only updates if an override actually exists, so a slow or failed
// API call (e.g. the database is briefly unreachable) never blocks or
// breaks the page — it just means no override gets applied.
function useSeoOverride(path) {
  const [override, setOverride] = useState(null);
  useEffect(() => {
    let cancelled = false;
    api
      .getPageSeo(path)
      .then((data) => {
        if (!cancelled && data && Object.keys(data).length > 0) setOverride(data);
      })
      .catch(() => {});
    return () => {
      cancelled = true;
    };
  }, [path]);
  return override;
}

export default function usePageSeo({ title, description, canonical, schema, noindex }) {
  const path = typeof window !== "undefined" ? window.location.pathname : "";
  const override = useSeoOverride(path);

  const effectiveTitle = override?.title || title;
  const effectiveDescription = override?.meta_description || description;
  const effectiveCanonical = override?.canonical_url || canonical;
  const effectiveNoindex = override?.robots_directive
    ? override.robots_directive.includes("noindex")
    : noindex;
  let effectiveSchema = schema;
  if (override?.schema_json) {
    try {
      effectiveSchema = JSON.parse(override.schema_json);
    } catch {
      // Malformed JSON saved from the dashboard — fall back to the
      // page's built-in schema rather than crash the page.
    }
  }

  useEffect(() => {
    const prevTitle = document.title;
    if (effectiveTitle) document.title = effectiveTitle;

    const prevDescription = setMetaContent('meta[name="description"]', "content", effectiveDescription);
    const prevCanonical = setMetaContent('link[rel="canonical"]', "href", effectiveCanonical);
    const prevOgTitle = setMetaContent('meta[property="og:title"]', "content", effectiveTitle);
    const prevOgDescription = setMetaContent('meta[property="og:description"]', "content", effectiveDescription);
    const prevOgUrl = setMetaContent('meta[property="og:url"]', "content", effectiveCanonical);
    const prevRobots = effectiveNoindex
      ? setMetaContent('meta[name="robots"]', "content", "noindex, nofollow")
      : null;

    const schemaList = effectiveSchema ? (Array.isArray(effectiveSchema) ? effectiveSchema : [effectiveSchema]) : [];
    const scripts = schemaList.map((entry) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(entry);
      document.head.appendChild(script);
      return script;
    });

    return () => {
      document.title = prevTitle;
      if (effectiveDescription !== undefined) setMetaContent('meta[name="description"]', "content", prevDescription);
      if (effectiveCanonical !== undefined) setMetaContent('link[rel="canonical"]', "href", prevCanonical);
      if (effectiveTitle !== undefined) setMetaContent('meta[property="og:title"]', "content", prevOgTitle);
      if (effectiveDescription !== undefined) setMetaContent('meta[property="og:description"]', "content", prevOgDescription);
      if (effectiveCanonical !== undefined) setMetaContent('meta[property="og:url"]', "content", prevOgUrl);
      if (effectiveNoindex) setMetaContent('meta[name="robots"]', "content", prevRobots);
      scripts.forEach((script) => script.remove());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [effectiveTitle, effectiveDescription, effectiveCanonical, effectiveSchema, effectiveNoindex]);
}
