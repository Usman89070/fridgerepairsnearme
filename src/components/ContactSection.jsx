import { enquiryEmail, enquiryEmailHref, businessAddress, businessHours } from "../data/content";
import { MailIcon, PinIcon, ClockIcon } from "./Icons";
import ContactForm from "./ContactForm";

const details = [
  { icon: MailIcon, label: "Email", value: enquiryEmail, href: enquiryEmailHref },
  { icon: PinIcon, label: "Address", value: businessAddress },
  { icon: ClockIcon, label: "Working Hours", value: businessHours },
];

export default function ContactSection() {
  return (
    <section id="contact-us" className="section contact-us">
      <div className="container contact-us__grid">
        <div className="contact-us__copy">
          <p className="eyebrow">Get In Touch</p>
          <h2>Contact Us</h2>
          <p>
            Questions about fridge repairs near you, service availability or an existing
            enquiry? Reach out using the details below, or send us a message directly.
          </p>

          <div className="contact-us__details">
            {details.map(({ icon: Icon, label, value, href }) => (
              <div className="contact-us__detail" key={label}>
                <span className="icon-badge"><Icon /></span>
                <div>
                  <span className="contact-us__detail-label">{label}</span>
                  {href ? (
                    <a href={href} className="contact-us__detail-value">{value}</a>
                  ) : (
                    <span className="contact-us__detail-value">{value}</span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="contact-us__form-wrap">
          <ContactForm variant="section" idPrefix="section" />
        </div>
      </div>
    </section>
  );
}
