import usePageSeo from "../hooks/usePageSeo";
import { enquiryEmail, enquiryEmailHref, businessAddress } from "../data/content";
import { MailIcon, FridgeIcon, BuildingIcon, PinIcon } from "../components/Icons";

const CANONICAL_URL = "https://fridgerepairsnearme.com.au/areas-we-service/";

const regions = [
  {
    title: "Western Sydney",
    text: "Home and business fridge repairs right across the west.",
    suburbs: ["Blacktown", "Doonside", "St Marys", "Penrith", "Riverstone", "Tallawong", "Smithfield"],
  },
  {
    title: "Hills District & Hawkesbury",
    text: "Repairs for households, cafés and venues in Sydney's north-west.",
    suburbs: ["Castle Hill", "Baulkham Hills", "Dural", "Windsor", "Hawkesbury", "Richmond"],
  },
  {
    title: "Parramatta & Central West",
    text: "Fast fridge and refrigeration repairs in the heart of Sydney.",
    suburbs: ["Parramatta", "Auburn", "Merrylands"],
  },
  {
    title: "Inner West",
    text: "Domestic fridges and commercial freezers fixed across the Inner West.",
    suburbs: ["Newtown", "Camperdown", "Redfern", "Balmain"],
  },
  {
    title: "Eastern Suburbs",
    text: "Reliable repairs for apartments, homes and businesses in the east.",
    suburbs: ["Bondi", "Bronte", "Coogee", "Maroubra", "Vaucluse", "Watsons Bay", "Surry Hills", "Darlinghurst", "Potts Point"],
  },
  {
    title: "North Shore",
    text: "Fridge and refrigeration service from the harbour to the upper North Shore.",
    suburbs: ["North Sydney", "Chatswood", "Willoughby", "Hornsby", "Macquarie Park", "Ryde"],
  },
  {
    title: "Northern Beaches",
    text: "Getting your fridge back to cold along the beaches.",
    suburbs: ["Manly", "Dee Why", "Mona Vale", "Palm Beach"],
  },
  {
    title: "Southern Sydney",
    text: "Repairs throughout the south and the Sutherland Shire.",
    suburbs: ["Sutherland", "Cronulla", "Miranda", "Rockdale", "Kogarah", "Hurstville", "Bardwell Park", "Botany"],
  },
  {
    title: "South-West Sydney",
    text: "We also look after customers in the south-west.",
    suburbs: ["Liverpool", "Campbelltown", "Cabramatta"],
  },
];

const serviceGroups = [
  {
    icon: FridgeIcon,
    title: "Home Fridge Repairs",
    text: "For family fridges, freezers and bar fridges.",
    items: [
      { label: "Residential fridge repairs", href: "/domestic-fridge-repairs-sydney/" },
      { label: "Fridge and freezer regas", href: "/#regas" },
    ],
  },
  {
    icon: BuildingIcon,
    title: "Commercial Refrigeration",
    text: "For restaurants, cafés, shops and other businesses.",
    items: [
      { label: "Commercial fridge repairs Sydney", href: "/#commercial" },
      { label: "Cool room repairs Sydney", href: "/#commercial" },
      { label: "Walk-in freezer repairs Sydney", href: "/#commercial" },
      { label: "Emergency refrigeration repairs", href: "/same-day-fridge-repair-sydney/" },
    ],
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Fridge Repairs Near Me",
    url: CANONICAL_URL,
    image: "https://fridgerepairsnearme.com.au/logo.webp",
    email: enquiryEmail,
    areaServed: regions.map((r) => ({ "@type": "City", name: r.title })),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sydney",
      addressRegion: "NSW",
      addressCountry: "AU",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fridgerepairsnearme.com.au/" },
      { "@type": "ListItem", position: 2, name: "Areas We Service", item: CANONICAL_URL },
    ],
  },
];

export default function AreasWeServicePage() {
  usePageSeo({
    title: "Fridge Repairs Near Me Sydney | Areas We Service",
    description: "Fast fridge, freezer and cool room repairs across Greater Sydney. See the suburbs we cover in Western Sydney, the Hills, Inner West, Eastern Suburbs and more.",
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
            <p className="eyebrow eyebrow--light">Greater Sydney Service</p>
            <h1>Fridge Repairs Near Me – Fast Help Across Sydney</h1>
            <p className="hero__lede">
              Fridge stopped cooling? Freezer iced up? Fridge Repairs Near Me sends experienced
              technicians to homes and businesses all over Greater Sydney. We cover Western
              Sydney and the Hills District, the Inner West and the Eastern Suburbs, and out to
              the North Shore, Northern Beaches and Southern Sydney.
            </p>
            <div className="hero__actions">
              <a href={enquiryEmailHref} className="btn btn-primary"><MailIcon /> Email Us</a>
              <a href="/#contact" className="btn btn-secondary">Request a Free Quote</a>
            </div>
          </div>
        </div>
      </section>

      <section className="section" id="suburbs">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Suburbs We Service</p>
            <h2>Where We Repair Fridges in Sydney</h2>
            <p>
              Wherever you are in Sydney, there's a good chance we're already working nearby.
              Our mobile technicians visit hundreds of suburbs every week, fixing household
              fridges, freezers and commercial cool rooms.
            </p>
          </div>

          <div className="grid grid-3 hub-regions__grid">
            {regions.map((r) => (
              <div className="card hub-region-card" key={r.title}>
                <h3>{r.title}</h3>
                <p>{r.text}</p>
                <div className="service-areas__suburbs">
                  {r.suburbs.map((s) => (
                    <span className="pill" key={s}>{s}</span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" id="services">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Our Services</p>
            <h2>Home and Commercial Fridge Repairs Across Sydney</h2>
            <p>
              Fridges fail for all sorts of reasons. Our technicians find and fix the fault on
              the spot, whether it's a worn fan motor, a blocked defrost system, a faulty
              thermostat or sensor, a failed control board, or a compressor or gas problem.
            </p>
          </div>

          <div className="grid grid-2">
            {serviceGroups.map(({ icon: Icon, title, text, items }) => (
              <div className="card domestic__card" key={title}>
                <span className="icon-badge"><Icon /></span>
                <h3>{title}</h3>
                <p>{text}</p>
                <ul className="cost__list" style={{ marginTop: 14 }}>
                  {items.map((item) => (
                    <li key={item.label}><a href={item.href}>{item.label}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="other-suburbs">
        <div className="container">
          <div className="card highlight-card" style={{ textAlign: "center" }}>
            <p className="eyebrow" style={{ justifyContent: "center" }}>Don't See Your Suburb Listed?</p>
            <h2>We Very Likely Still Cover You</h2>
            <p>
              The suburbs above are only some of the areas we cover. Fridge Repairs Near Me
              works across hundreds of locations in Greater Sydney, so we can very likely still
              help even if your suburb doesn't have its own page yet. Send us a quick email to
              check.
            </p>
            <a href={enquiryEmailHref} className="btn btn-primary"><MailIcon /> Email to Check Your Area</a>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="our-base">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Our Base</p>
            <h2>Where to Find Fridge Repairs Near Me</h2>
            <p>
              We're a fully mobile service, so we come to you. There's no need to bring your
              fridge anywhere: our technicians carry the tools and common parts to fix most
              faults in a single visit.
            </p>
          </div>

          <div className="grid grid-3 contact-us__grid">
            <div className="card contact-us__card">
              <span className="icon-badge"><PinIcon /></span>
              <span className="contact-us__label">Our Base</span>
              <span className="contact-us__value">{businessAddress}</span>
              <p className="contact-us__hint">Mobile, on-site repairs at your home or business.</p>
            </div>
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
    </>
  );
}
