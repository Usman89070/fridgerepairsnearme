import { useEffect, useRef, useState } from "react";
import { headerNavItems } from "../data/content";
import { MenuIcon, CloseIcon, ChevronIcon } from "./Icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState(null);
  const navRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [menuOpen]);

  useEffect(() => {
    if (openDropdown === null) return;

    const closeOnOutsideClick = (e) => {
      if (navRef.current && !navRef.current.contains(e.target)) setOpenDropdown(null);
    };
    const closeOnEscape = (e) => {
      if (e.key === "Escape") setOpenDropdown(null);
    };

    document.addEventListener("mousedown", closeOnOutsideClick);
    document.addEventListener("keydown", closeOnEscape);
    return () => {
      document.removeEventListener("mousedown", closeOnOutsideClick);
      document.removeEventListener("keydown", closeOnEscape);
    };
  }, [openDropdown]);

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="container site-header__row">
        <a href="/#home" className="brand" onClick={() => setMenuOpen(false)}>
          <img src="/logo-192.webp" alt="Fridge Repairs Near Me" className="brand__logo" width="56" height="56" fetchpriority="high" />
        </a>

        <nav className="site-nav" aria-label="Primary" ref={navRef}>
          {headerNavItems.map((item) =>
            item.items ? (
              <div className="site-nav__item" key={item.label}>
                <button
                  type="button"
                  className="site-nav__trigger"
                  aria-haspopup="true"
                  aria-expanded={openDropdown === item.label}
                  onClick={() => setOpenDropdown((v) => (v === item.label ? null : item.label))}
                >
                  {item.label} <ChevronIcon className="site-nav__chevron" />
                </button>
                <div className={`site-nav__dropdown ${openDropdown === item.label ? "site-nav__dropdown--open" : ""}`}>
                  {item.items.map((sub) => (
                    <a key={sub.href} href={sub.href} onClick={() => setOpenDropdown(null)}>{sub.label}</a>
                  ))}
                </div>
              </div>
            ) : (
              <a key={item.href} href={item.href}>{item.label}</a>
            )
          )}
        </nav>

        <button
          className="menu-toggle"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
          aria-expanded={menuOpen}
          onClick={() => setMenuOpen((v) => !v)}
        >
          {menuOpen ? <CloseIcon /> : <MenuIcon />}
        </button>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <nav className="mobile-menu__nav" aria-label="Mobile">
            {headerNavItems.map((item) =>
              item.items ? (
                <div className="mobile-menu__group" key={item.label}>
                  <span className="mobile-menu__group-label">{item.label}</span>
                  {item.items.map((sub) => (
                    <a key={sub.href} href={sub.href} onClick={() => setMenuOpen(false)}>{sub.label}</a>
                  ))}
                </div>
              ) : (
                <a key={item.href} href={item.href} onClick={() => setMenuOpen(false)}>{item.label}</a>
              )
            )}
          </nav>
        </div>
      )}
    </header>
  );
}
