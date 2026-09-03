import { useCallback, useEffect, useState } from "react";
import { galleryItems } from "../data/content";
import { ArrowRightIcon, CloseIcon, PlayIcon } from "./Icons";

export default function GallerySection() {
  const [activeIndex, setActiveIndex] = useState(null);
  const active = activeIndex === null ? null : galleryItems[activeIndex];
  const count = galleryItems.length;

  const showPrev = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i - 1 + count) % count));
  }, [count]);

  const showNext = useCallback(() => {
    setActiveIndex((i) => (i === null ? null : (i + 1) % count));
  }, [count]);

  useEffect(() => {
    if (active === null) return;
    const onKeyDown = (e) => {
      if (e.key === "Escape") setActiveIndex(null);
      if (e.key === "ArrowLeft") showPrev();
      if (e.key === "ArrowRight") showNext();
    };
    document.body.style.overflow = "hidden";
    window.addEventListener("keydown", onKeyDown);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [active, showPrev, showNext]);

  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <div className="section-head section-head--center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>Our Work</p>
          <h2>Fridge Repairs in Action</h2>
          <p>
            A look at real jobs across Sydney — from commercial display fridges to sealed
            system diagnostics and repairs.
          </p>
        </div>

        <div className="gallery__grid">
          {galleryItems.map((item, i) => (
            <button
              type="button"
              key={item.src}
              className="gallery__item card"
              onClick={() => setActiveIndex(i)}
              aria-label={item.type === "video" ? `Play video: ${item.alt}` : `View image: ${item.alt}`}
            >
              {item.type === "video" ? (
                <>
                  <video src={item.src} muted playsInline preload="metadata" aria-hidden="true" />
                  <span className="gallery__play"><PlayIcon /></span>
                </>
              ) : (
                <img src={item.src} alt={item.alt} loading="lazy" width="800" height="800" />
              )}
            </button>
          ))}
        </div>
      </div>

      {active && (
        <div className="gallery__lightbox" role="dialog" aria-modal="true" aria-label={active.alt}>
          <div className="gallery__lightbox-backdrop" onClick={() => setActiveIndex(null)} />

          {count > 1 && (
            <button
              type="button"
              className="gallery__lightbox-nav gallery__lightbox-nav--prev"
              onClick={showPrev}
              aria-label="Previous"
            >
              <ArrowRightIcon />
            </button>
          )}

          <div className="gallery__lightbox-content">
            <button
              type="button"
              className="gallery__lightbox-close"
              onClick={() => setActiveIndex(null)}
              aria-label="Close"
            >
              <CloseIcon />
            </button>
            {active.type === "video" ? (
              <video key={active.src} src={active.src} controls autoPlay playsInline preload="auto" />
            ) : (
              <img src={active.src} alt={active.alt} />
            )}
          </div>

          {count > 1 && (
            <button
              type="button"
              className="gallery__lightbox-nav gallery__lightbox-nav--next"
              onClick={showNext}
              aria-label="Next"
            >
              <ArrowRightIcon />
            </button>
          )}
        </div>
      )}
    </section>
  );
}
