import { useEffect, useState } from "react";
import { navLinks, enquiryEmail, enquiryEmailHref } from "../data/content";
import { MailIcon, MenuIcon, CloseIcon } from "./Icons";

export default function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

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

  return (
    <header className={`site-header ${scrolled ? "site-header--scrolled" : ""}`}>
      <div className="container site-header__row">
        <a href="/#home" className="brand" onClick={() => setMenuOpen(false)}>
          <img src="/logo.webp" alt="Fridge Repairs Near Me" className="brand__logo" width="200" height="200" />
        </a>

        <nav className="site-nav" aria-label="Primary">
          {navLinks.map((link) => (
            <a key={link.href} href={link.href}>{link.label}</a>
          ))}
        </nav>

        <div className="site-header__actions">
          <a href={enquiryEmailHref} className="header-contact" title={enquiryEmail}>
            <MailIcon />
            <span>Email Us</span>
          </a>
          <a href="/#contact" className="btn btn-primary btn-sm">Request a Free Quote</a>
        </div>

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
            {navLinks.map((link) => (
              <a key={link.href} href={link.href} onClick={() => setMenuOpen(false)}>{link.label}</a>
            ))}
          </nav>
          <a href={enquiryEmailHref} className="header-contact header-contact--mobile">
            <MailIcon /> <span>{enquiryEmail}</span>
          </a>
          <a href="/#contact" className="btn btn-primary btn-block" onClick={() => setMenuOpen(false)}>
            Request a Free Quote
          </a>
        </div>
      )}
    </header>
  );
}
