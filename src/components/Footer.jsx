import { navLinks, enquiryEmail, enquiryEmailHref, businessAddress, businessHours, serviceAreas } from "../data/content";
import { MailIcon, PinIcon, ClockIcon } from "./Icons";

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="container footer__grid">
        <div className="footer__brand">
          <a href="/#home" className="brand brand--footer">
            <img src="/logo-192.webp" alt="Fridge Repairs Near Me" className="brand__logo brand__logo--footer" width="72" height="72" loading="lazy" />
          </a>
          <p>
            Local fridge repair services across supported Sydney suburbs for domestic fridges,
            freezers and commercial refrigeration equipment.
          </p>
          <div className="footer__contact">
            <a href={enquiryEmailHref}><MailIcon /> {enquiryEmail}</a>
            <span><PinIcon /> {businessAddress}</span>
            <span><ClockIcon /> {businessHours}</span>
          </div>
        </div>

        <div className="footer__col">
          <h4>Quick Links</h4>
          <ul>
            {navLinks.map((link) => (
              <li key={link.href}><a href={link.href}>{link.label}</a></li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Service Areas</h4>
          <ul>
            {serviceAreas.map((area) => (
              <li key={area.region}>
                <a href={`/#region-${slugify(area.region)}`}>
                  <PinIcon /> {area.region}
                </a>
              </li>
            ))}
          </ul>
        </div>

        <div className="footer__col">
          <h4>Get a Quote</h4>
          <p>Provide your suburb, appliance and fault to check local availability.</p>
          <a href="/#contact" className="btn btn-primary btn-sm">Request a Free Quote</a>
        </div>
      </div>

      <div className="footer__bottom">
        <div className="container footer__bottom-row">
          <span>&copy; {year} Fridge Repairs Near Me. All rights reserved.</span>
          <span>fridgerepairsnearme.com.au</span>
        </div>
      </div>
    </footer>
  );
}
