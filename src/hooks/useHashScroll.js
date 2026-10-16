import { useEffect } from "react";

// On a client-rendered SPA, the browser's native "scroll to #fragment on
// load" fires before React has rendered anything, so it silently fails
// whenever a link lands on a URL that already has a hash (e.g. a footer
// link from /blog to /#location-melbourne, or anyone sharing a direct
// link to a section). This retries the scroll once the target element
// actually exists in the DOM.
export default function useHashScroll(pathname, hash) {
  useEffect(() => {
    if (!hash) return;
    const id = decodeURIComponent(hash.replace(/^#/, ""));
    if (!id) return;

    const raf = requestAnimationFrame(() => {
      const el = document.getElementById(id);
      if (el) el.scrollIntoView({ behavior: "smooth", block: "start" });
    });

    return () => cancelAnimationFrame(raf);
  }, [pathname, hash]);
}
