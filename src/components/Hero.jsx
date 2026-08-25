import { enquiryEmailHref } from "../data/content";
import { CheckIcon, MailIcon } from "./Icons";
import ContactForm from "./ContactForm";

const heroPoints = [
  "Domestic fridges, freezers & commercial refrigeration",
  "Service availability checked by suburb or postcode",
  "Diagnosis before parts replacement",
];

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero__backdrop" aria-hidden="true">
        <span className="hero__glow hero__glow--a" />
        <span className="hero__glow hero__glow--b" />
      </div>

      <div className="container hero__grid">
        <div className="hero__content">
          <p className="eyebrow eyebrow--light">Local Fridge Repair Services Across Australia</p>
          <h1>Fridge Repairs Near Me</h1>
          <p className="hero__lede">
            Fridge not cooling, leaking, icing up or making unusual noises? Find fridge repair
            services near you across supported Australian locations for domestic fridges,
            freezers and commercial refrigeration equipment.
          </p>
          <p className="hero__sub">
            From a household refrigerator that has stopped cooling to urgent commercial
            refrigeration faults, service availability can be checked using your suburb or postcode.
          </p>

          <div className="hero__actions">
            <a href="#contact" className="btn btn-primary">Find Fridge Repairs Near Me</a>
            <a href={enquiryEmailHref} className="btn btn-secondary"><MailIcon /> Email Us</a>
          </div>

          <ul className="hero__points">
            {heroPoints.map((point) => (
              <li key={point}>
                <CheckIcon /> <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div id="contact" className="hero__form-wrap">
          <ContactForm />
        </div>
      </div>
    </section>
  );
}
