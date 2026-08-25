import { useEffect } from "react";

// Elements matching these selectors fade + rise into place (with a slight
// 3D tilt) the first time they scroll into view. Grid/row siblings get a
// small staggered delay so groups cascade in rather than popping at once.
const REVEAL_SELECTORS = [
  ".card",
  ".blog__card",
  ".diagnosis__card",
  ".brands__chip",
  ".process__step",
  ".accordion-item",
  ".section-head",
  ".trust-bar__item",
  ".intro__panel-card",
  ".commercial__segment",
  ".emergency__copy",
  ".emergency__panel",
  ".regas__copy",
  ".worth__copy",
  ".cost__copy",
].join(",");

const STAGGER_MS = 70;
const MAX_STAGGER_STEPS = 6;

export default function useScrollReveal(routeKey) {
  useEffect(() => {
    const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    const els = Array.from(document.querySelectorAll(REVEAL_SELECTORS));
    if (els.length === 0) return;

    els.forEach((el) => {
      el.classList.add("reveal");
      const siblings = el.parentElement
        ? Array.from(el.parentElement.children).filter((c) => c.matches(REVEAL_SELECTORS))
        : [el];
      const idx = siblings.indexOf(el);
      el.style.transitionDelay = `${Math.min(idx, MAX_STAGGER_STEPS) * STAGGER_MS}ms`;
    });

    // Once the entrance transition finishes, drop the reveal/is-in classes
    // and the inline delay entirely. Leaving them on would otherwise pin
    // `transform: none` at the same specificity as hover/tilt rules
    // (.card:hover etc.), permanently cancelling those interactions.
    const cleanUp = (el) => {
      let done = false;
      const finish = () => {
        if (done) return;
        done = true;
        el.classList.remove("reveal", "is-in");
        el.style.transitionDelay = "";
        el.removeEventListener("transitionend", onDone);
      };
      const onDone = (e) => {
        if (e.target === el) finish();
      };
      el.addEventListener("transitionend", onDone);
      // Fallback in case transitionend never fires (backgrounded tab, etc).
      setTimeout(finish, 1600);
    };

    if (prefersReduced) {
      els.forEach((el) => {
        el.classList.remove("reveal");
        el.style.transitionDelay = "";
      });
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            cleanUp(entry.target);
            entry.target.classList.add("is-in");
            io.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12, rootMargin: "0px 0px -60px 0px" }
    );

    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [routeKey]);
}
