import { navLinks, enquiryEmail, enquiryEmailHref } from "../data/content";
import { MailIcon, PinIcon } from "./Icons";

const footerLocations = ["Sydney", "Melbourne", "Brisbane", "Perth", "Adelaide", "Canberra"];

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="#home" className="brand brand--footer">
            <img src="/logo.webp" alt="Fridge Repairs Near Me" className="brand__logo brand__logo--footer" width="200" height="200" />
          </a>
          <p>
            Local fridge repair services across supported Australian locations for domestic
            fridges, freezers and commercial refrigeration equipment.
          </p>
          <div className="footer__contact">
            <a href={enquiryEmailHref}><MailIcon /> {enquiryEmail}</a>
          </div>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}><a href={link.href}>{link.label}</a></li>
            ))}
            <li><a href="#contact">Contact</a></li>
          </ul>
        </div>

        <div className="footer__col">
          <h4>Service Areas</h4>
          <ul>
            {footerLocations.map((loc) => (
              <li key={loc}><PinIcon /> Fridge Repairs in {loc}</li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Get a Quote</h4>
          <p>Provide your suburb, appliance and fault to check local availability.</p>
          <a href="#contact" className="btn btn-primary btn-sm">Find Fridge Repairs Near Me</a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-row">
          <span>&copy; {year} Fridge Repairs Near Me. All rights reserved.</span>
          <span>ABN: [Insert ABN] · fridgerepairsnearme.com.au</span>
        </div>
      </div>
    </footer>
  );
}
