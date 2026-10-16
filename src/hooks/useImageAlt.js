import { useEffect, useState } from "react";
import { api } from "../lib/api";

// The image alt-text override map is the same for every page, so it's
// fetched once per session (not once per component) and cached here —
// every useImageAlt() call after the first reuses the same request.
let cachedMap = null;
let inFlight = null;

function loadMap() {
  if (cachedMap) return Promise.resolve(cachedMap);
  if (!inFlight) {
    inFlight = api
      .getImageAltMap()
      .then((map) => {
        cachedMap = map || {};
        return cachedMap;
      })
      .catch(() => {
        cachedMap = {};
        return cachedMap;
      });
  }
  return inFlight;
}

// Returns a getAlt(src, fallback) function. Until the override map has
// loaded, every call returns the fallback — the DB value (if any) then
// applies on the next render once the fetch resolves. A failed or slow
// request never blocks rendering or breaks the fallback alt text.
export default function useImageAlt() {
  const [map, setMap] = useState(cachedMap);

  useEffect(() => {
    if (cachedMap) return;
    let cancelled = false;
    loadMap().then((m) => {
      if (!cancelled) setMap(m);
    });
    return () => {
      cancelled = true;
    };
  }, []);

  return (src, fallback) => (map && map[src]) || fallback;
}
