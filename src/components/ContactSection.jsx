import { enquiryEmail, enquiryEmailHref, businessAddress, businessHours } from "../data/content";
import { MailIcon, PinIcon, ClockIcon } from "./Icons";

const details = [
  { icon: MailIcon, label: "Email", value: enquiryEmail, href: enquiryEmailHref },
  { icon: PinIcon, label: "Address", value: businessAddress },
  { icon: ClockIcon, label: "Working Hours", value: businessHours },
];

export default function ContactSection() {
  return (
    <section id="contact-us" className="section contact-us">
      <div className="container">
        <div className="section-head section-head--center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>Get In Touch</p>
          <h2>Contact Us</h2>
          <p>
            Questions about fridge repairs near you, service availability or an existing
            enquiry? Reach out using the details below.
          </p>
        </div>

        <div className="grid grid-3 contact-us__grid">
          {details.map(({ icon: Icon, label, value, href }) => (
            <div className="card contact-us__card" key={label}>
              <span className="icon-badge"><Icon /></span>
              <span className="contact-us__label">{label}</span>
              {href ? (
                <a href={href} className="contact-us__value">{value}</a>
              ) : (
                <span className="contact-us__value">{value}</span>
              )}
            </div>
          ))}
        </div>

        <div className="contact-us__cta">
          <a href={enquiryEmailHref} className="btn btn-primary">Email Us</a>
          <a href="#contact" className="btn btn-outline">Check Availability Near Me</a>
        </div>
      </div>
    </section>
  );
}
