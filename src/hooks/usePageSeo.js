import { useEffect } from "react";

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

export default function usePageSeo({ title, description, canonical, schema }) {
  useEffect(() => {
    const prevTitle = document.title;
    if (title) document.title = title;

    const prevDescription = setMetaContent('meta[name="description"]', "content", description);
    const prevCanonical = setMetaContent('link[rel="canonical"]', "href", canonical);
    const prevOgTitle = setMetaContent('meta[property="og:title"]', "content", title);
    const prevOgDescription = setMetaContent('meta[property="og:description"]', "content", description);
    const prevOgUrl = setMetaContent('meta[property="og:url"]', "content", canonical);

    const schemaList = schema ? (Array.isArray(schema) ? schema : [schema]) : [];
    const scripts = schemaList.map((entry) => {
      const script = document.createElement("script");
      script.type = "application/ld+json";
      script.textContent = JSON.stringify(entry);
      document.head.appendChild(script);
      return script;
    });

    return () => {
      document.title = prevTitle;
      if (description !== undefined) setMetaContent('meta[name="description"]', "content", prevDescription);
      if (canonical !== undefined) setMetaContent('link[rel="canonical"]', "href", prevCanonical);
      if (title !== undefined) setMetaContent('meta[property="og:title"]', "content", prevOgTitle);
      if (description !== undefined) setMetaContent('meta[property="og:description"]', "content", prevOgDescription);
      if (canonical !== undefined) setMetaContent('meta[property="og:url"]', "content", prevOgUrl);
      scripts.forEach((script) => script.remove());
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [title, description, canonical, schema]);
}
