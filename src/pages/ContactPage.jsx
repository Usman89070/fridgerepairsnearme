import usePageSeo from "../hooks/usePageSeo";
import {
  enquiryEmail,
  enquiryEmailHref,
  businessAddress,
  businessHours,
  callOutFee,
  warrantyPeriod,
} from "../data/content";
import {
  MailIcon,
  ClockIcon,
  PinIcon,
  CheckIcon,
  AlertIcon,
} from "../components/Icons";
import AccordionItem from "../components/Accordion";
import ContactForm from "../components/ContactForm";

const CANONICAL_URL = "https://fridgerepairsnearme.com.au/contact-us/";

const reachUs = [
  {
    icon: MailIcon,
    label: "Email",
    value: enquiryEmail,
    href: enquiryEmailHref,
    hint: "Commercial enquiries, maintenance quotes, or send a photo of the fault",
  },
  {
    icon: CheckIcon,
    label: "Online Enquiry Form",
    value: "Below, available 24/7",
    hint: "Send your details any hour, including overnight",
  },
  {
    icon: PinIcon,
    label: "Service Area",
    value: "Sydney-wide",
    href: "/fridge-repairs/",
    hint: "Check whether we cover your suburb",
  },
  {
    icon: ClockIcon,
    label: "Hours",
    value: businessHours,
    hint: "Enquiries welcome nights, weekends and public holidays",
  },
];

const whileYouWait = [
  "Keep the doors closed to hold the cold in.",
  "Move essential food or medication into an esky with ice.",
  "Check that the power point and circuit breaker are on.",
  "Note any error code on the display to tell the technician.",
];

const afterContactSteps = [
  { step: "01", title: "We Respond", text: "We aim to get back to you quickly to confirm the fault, your suburb and a suitable time." },
  { step: "02", title: "Free Quote", text: `You'll get a free quote before any work starts. Call-out fee: ${callOutFee}.` },
  { step: "03", title: "Same-Day Visit", text: "A technician visits with a van stocked with common parts, where availability in your suburb allows." },
  { step: "04", title: "Diagnosis & Repair", text: `Most repairs are completed on the spot once the actual fault has been diagnosed, backed by our ${warrantyPeriod} warranty.` },
];

const contactFaqs = [
  {
    q: "How fast can a technician get to me?",
    a: "Same-day visits are often available across Sydney, depending on when you enquire and technician availability in your suburb. For urgent faults, mention it when you contact us so the job can be prioritised where possible.",
  },
  {
    q: "How much is the call-out fee?",
    a: `Our call-out fee is ${callOutFee} incl. GST. You'll also get a free quote before any work starts, so there are no surprises.`,
  },
  {
    q: "Can I book outside business hours?",
    a: "Yes. Our online enquiry form and email are open 24/7, and urgent after-hours requests are handled where technician scheduling allows.",
  },
  {
    q: "What should I include when I contact you?",
    a: "Your suburb or postcode, the fridge brand and model number, what the fault is and when it started. A photo of the model label and the problem area helps us bring the right parts the first time.",
  },
  {
    q: "Do repairs come with a warranty?",
    a: `Yes. Every repair is backed by a ${warrantyPeriod} warranty covering both parts and workmanship.`,
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    name: "Contact Fridge Repairs Near Me",
    url: CANONICAL_URL,
  },
  {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Fridge Repairs Near Me",
    url: CANONICAL_URL,
    image: "https://fridgerepairsnearme.com.au/logo.webp",
    email: enquiryEmail,
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sydney",
      addressRegion: "NSW",
      addressCountry: "AU",
    },
    contactPoint: {
      "@type": "ContactPoint",
      email: enquiryEmail,
      contactType: "customer service",
      areaServed: "Sydney NSW",
      availableLanguage: "English",
      hoursAvailable: {
        "@type": "OpeningHoursSpecification",
        dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
        opens: "00:00",
        closes: "23:59",
      },
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fridgerepairsnearme.com.au/" },
      { "@type": "ListItem", position: 2, name: "Contact", item: CANONICAL_URL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: contactFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export default function ContactPage() {
  usePageSeo({
    title: "Contact Fridge Repairs Near Me | Book Online 24/7",
    description:
      "Contact Fridge Repairs Near Me for fridge, freezer and coolroom repairs across Sydney. Enquire online 24/7, $69 call-out and a free quote before any work.",
    canonical: CANONICAL_URL,
    schema,
  });

  return (
    <>
      <section className="hero hero--simple" id="top">
        <div className="hero__backdrop" aria-hidden="true">
          <span className="hero__glow hero__glow--a" />
          <span className="hero__glow hero__glow--b" />
        </div>

        <div className="container">
          <div className="hero__content">
            <p className="eyebrow eyebrow--light">Get In Touch</p>
            <h1>Contact Fridge Repairs Near Me</h1>
            <p className="hero__lede">
              Need a fridge fixed? We take enquiries across Sydney around the clock — send the
              form below or email us, and a local technician will get back to you with a free
              quote.
            </p>
            <p className="hero__sub">
              Our call-out fee is {callOutFee} incl. GST, and you always get a fixed quote
              before any work starts. Every repair comes with a {warrantyPeriod} parts and
              workmanship warranty.
            </p>
            <div className="hero__actions">
              <a href="#book" className="btn btn-primary">Book Online</a>
              <a href={enquiryEmailHref} className="btn btn-secondary"><MailIcon /> Email Us</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="reach-us">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>How to Reach Us</p>
            <h2>Ways to Get in Touch</h2>
          </div>

          <div className="grid grid-4 contact-us__grid">
            {reachUs.map(({ icon: Icon, label, value, href, hint }) => (
              <div className="card contact-us__card" key={label}>
                <span className="icon-badge"><Icon /></span>
                <span className="contact-us__label">{label}</span>
                {href ? (
                  <a href={href} className="contact-us__value">{value}</a>
                ) : (
                  <span className="contact-us__value">{value}</span>
                )}
                <p className="contact-us__hint">{hint}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" id="book">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Book Online</p>
            <h2>Book a Fridge Repair Online</h2>
            <p>
              Fill in the form and we'll get back to you to confirm a time and give you a free
              quote. It helps to know your fridge brand and model, what's happening, whether
              it's a home or business appliance, and your suburb.
            </p>
          </div>

          <div style={{ maxWidth: 640, margin: "0 auto" }}>
            <ContactForm />
          </div>
        </div>
      </section>

      <section className="section--dark section emergency" id="availability">
        <div className="container emergency__grid">
          <div className="emergency__copy">
            <p className="eyebrow"><AlertIcon /> Urgent Faults</p>
            <h2>24/7 Availability</h2>
            <p>
              If your fridge, freezer or coolroom has stopped and food, stock or medication is
              at risk, email us or use the form above and mention it's urgent — we'll
              prioritise it where technician scheduling allows.
            </p>
            <p>
              Tell us if it's a commercial unit, a medical fridge or a coolroom, and mention
              your suburb so local availability can be checked straight away.
            </p>
            <a href="#book" className="btn btn-primary">Book Online Now</a>
          </div>

          <div className="emergency__panel">
            <div className="emergency__panel-head">
              <ClockIcon />
              <h3>While you wait:</h3>
            </div>
            <ul className="emergency__list">
              {whileYouWait.map((t) => (
                <li key={t}><CheckIcon /> {t}</li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <section className="section" id="after-contact">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>The Process</p>
            <h2>What Happens After You Contact Us</h2>
          </div>

          <div className="process__steps">
            {afterContactSteps.map((s, i) => (
              <div className="process__step" key={s.step}>
                <div className="process__step-num">{s.step}</div>
                <div className="process__step-body">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
                {i < afterContactSteps.length - 1 && <span className="process__connector" aria-hidden="true" />}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" id="service-area">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Areas We Service</p>
            <h2>Where We Cover</h2>
            <p>
              We service homes and businesses across Sydney's Inner West, Western Sydney, North
              Shore, Northern Beaches, Eastern Suburbs, Sydney CBD, St George and the Sutherland
              Shire.{" "}
              <a href="/fridge-repairs/">See the full suburb list by region →</a>
            </p>
          </div>

          <div className="contact-us__map">
            <iframe
              title="Satellite map of Sydney"
              src="https://www.google.com/maps?q=Sydney,+NSW,+Australia&t=k&z=10&output=embed"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              allowFullScreen
            />
            <a
              href="https://www.google.com/maps/search/?api=1&query=Sydney,+NSW,+Australia"
              target="_blank"
              rel="noopener noreferrer"
              className="contact-us__map-link"
            >
              Open in Google Maps ↗
            </a>
          </div>
        </div>
      </section>

      <section className="section" id="contact-faq">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>FAQ</p>
            <h2>Contact FAQs</h2>
          </div>

          <div className="accordion faq__accordion">
            {contactFaqs.map((item, i) => (
              <AccordionItem key={item.q} title={item.q} defaultOpen={i === 0}>
                <p>{item.a}</p>
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>

      <section className="section--dark section" id="contact-cta">
        <div className="container">
          <div className="section-head section-head--center">
            <h2>Fridge Repairs Near Me</h2>
            <p>
              {businessAddress} · <a href={enquiryEmailHref}>{enquiryEmail}</a> · {businessHours}
            </p>
          </div>
          <div className="hub-cta__actions">
            <a href="#book" className="btn btn-primary">Book Online</a>
            <a href={enquiryEmailHref} className="btn btn-secondary"><MailIcon /> Email Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
