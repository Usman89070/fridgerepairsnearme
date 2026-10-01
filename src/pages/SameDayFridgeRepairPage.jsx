import usePageSeo from "../hooks/usePageSeo";
import {
  enquiryEmail,
  enquiryEmailHref,
  callOutFee,
  warrantyPeriod,
  brands,
} from "../data/content";
import {
  MailIcon,
  WrenchIcon,
  ShieldIcon,
  CheckIcon,
  AlertIcon,
  ClockIcon,
  FridgeIcon,
  BuildingIcon,
} from "../components/Icons";
import AccordionItem from "../components/Accordion";

const CANONICAL_URL = "https://fridgerepairsnearme.com.au/same-day-fridge-repair-sydney/";

const trustPoints = [
  { icon: ClockIcon, label: "Same-day visits where availability allows" },
  { icon: WrenchIcon, label: "Common parts carried in the van" },
  { icon: ShieldIcon, label: `${callOutFee} call-out, fixed quote first` },
  { icon: CheckIcon, label: `${warrantyPeriod} warranty on parts and labour` },
];

const howToSteps = [
  "Send us your suburb, fridge brand and model number, and what it's doing. A photo of the model label helps us bring the right part.",
  "Tell us if food, stock or medication is at risk, so the job can be prioritised where possible.",
  "We confirm honestly whether a same-day visit is available for your suburb, or offer the next available slot.",
  "The technician diagnoses the fault and gives you a fixed price before starting.",
];

const firstVisitFixed = [
  "Evaporator and condenser fan motors (common models)",
  "Temperature sensors and thermistors",
  "Defrost heaters, sensors and timers",
  "Start relays and overload protectors",
  "Blocked defrost drains",
  "Thermostats (common types)",
  "Basic door seal adjustments and hinge fixes",
];

const secondVisitNeeded = [
  "Main control boards (PCBs) for specific models",
  "Brand-specific ice maker assemblies",
  "Moulded door seals for less common models",
  "Compressor replacement",
  "Gas leak repair and regas",
  "Parts for imported or older models",
  "Integrated fridges needing cabinetry access",
];

const priorityList = [
  "A fridge or freezer that has stopped cooling completely",
  "A commercial fridge, freezer or coolroom that can't hold temperature",
  "Water leaking near power points or electrical parts",
  "Households with medication that needs refrigeration",
  "Freezers full of food that has started to thaw",
];

const rightNowSteps = [
  "Check the power: the power point, the plug and your switchboard for a tripped safety switch.",
  "Keep the doors closed. A closed fridge holds its temperature for a few hours; a closed, full freezer for longer.",
  "Move high-risk food (meat, seafood, dairy, cooked rice, leftovers) to an esky with ice if the fridge feels warm.",
  "Leaking? Put towels down, and turn off the water tap behind a plumbed fridge.",
  "Write down any error code on the display. It speeds up diagnosis.",
];

const homeBizCards = [
  {
    icon: FridgeIcon,
    title: "Household Fridges",
    text: "French door, side-by-side, top-mount, bottom-mount, integrated and bar fridges from all major brands.",
    href: "/domestic-fridge-repairs-sydney/",
    label: "See domestic fridge repairs →",
  },
  {
    icon: FridgeIcon,
    title: "Freezers",
    text: "Upright and chest freezers and fridge-freezers, prioritised when food is thawing.",
    href: "/domestic-fridge-repairs-sydney/",
    label: "See freezer repairs →",
  },
  {
    icon: BuildingIcon,
    title: "Commercial Fridges and Coolrooms",
    text: "Emergency refrigeration repairs for cafes, restaurants, bars and shops: upright, underbench, prep and display fridges, and walk-in coolrooms.",
    href: "/#commercial",
    label: "See commercial fridge repairs →",
  },
];

const sameDayFaqs = [
  {
    q: "Can I get my fridge repaired today in Sydney?",
    a: "Often, yes. Same-day visits may be available depending on your suburb and the day's bookings. Tell us when you enquire and we'll confirm honestly, including if the next available slot is the better option.",
  },
  {
    q: "How do I check if same-day is available for my suburb?",
    a: "Send us your suburb, fridge brand and the fault when you enquire. We'll tell you straight away whether a technician can get to you today or offer the next available time.",
  },
  {
    q: "Will my fridge be fixed on the first visit?",
    a: "Many faults are, including fans, sensors, defrost parts, start relays and blocked drains, because we carry those parts. Control boards, model-specific parts, compressors and gas leaks may need a second visit.",
  },
  {
    q: "Do you offer emergency or after-hours fridge repairs?",
    a: "After-hours availability depends on technician scheduling and the type of job — commercial coolrooms and fridges holding stock are prioritised. Tell us when you enquire and we'll confirm what's possible.",
  },
  {
    q: "Does same-day service cost extra?",
    a: `No. Our call-out fee is ${callOutFee} incl. GST whether your repair happens the same day or on a later visit. We'll always confirm any additional cost before booking, never after.`,
  },
  {
    q: "What should I do with my food while I wait?",
    a: "Keep the doors closed and move high-risk food to an esky with ice if the fridge feels warm. Food Standards Australia New Zealand advises using or refrigerating food that's been above 5°C for under 2 hours, using (not re-refrigerating) food at 2–4 hours, and discarding it after 4 hours.",
  },
  {
    q: "Do you do same-day commercial fridge and coolroom repairs?",
    a: "Yes. Commercial fridges, display fridges and coolrooms holding stock are prioritised for same-day attendance where scheduling allows, across our Sydney service area.",
  },
  {
    q: "What information do you need to book a same-day repair?",
    a: "Your suburb, the fridge brand and model number, what it's doing, and whether food, stock or medication is at risk. A photo of the model label helps us bring the right part.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Same day fridge repair",
    name: "Same Day Fridge Repair Sydney",
    url: CANONICAL_URL,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Fridge Repairs Near Me",
      email: enquiryEmail,
    },
    areaServed: [
      "Inner West", "Western Sydney", "North Shore", "Northern Beaches",
      "Eastern Suburbs", "Sydney CBD", "St George", "Sutherland Shire",
    ].map((r) => ({ "@type": "City", name: r })),
    hoursAvailable: {
      "@type": "OpeningHoursSpecification",
      dayOfWeek: ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      opens: "00:00",
      closes: "23:59",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fridgerepairsnearme.com.au/" },
      { "@type": "ListItem", position: 2, name: "Same Day Fridge Repair Sydney", item: CANONICAL_URL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: sameDayFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export default function SameDayFridgeRepairPage() {
  usePageSeo({
    title: "Same Day Fridge Repair Sydney | Urgent Fridge Repairs",
    description:
      "Fridge stopped working? Same day fridge repair across Sydney for homes and businesses where available. Fixed quote first, no surprises.",
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
            <p className="eyebrow eyebrow--light">Urgent Faults</p>
            <h1>Same Day Fridge Repair in Sydney</h1>
            <p className="hero__lede">
              Fridge stopped working? We aim to get a technician to your home or business the
              same day where availability allows. We carry the most common fridge parts in the
              van, so many faults are fixed on the first visit.
            </p>
            <p className="hero__sub">
              You get a fixed quote before any work starts. Same-day availability depends on
              your suburb and the day's bookings — tell us when you enquire and we'll confirm
              honestly, even if that means the next available slot instead.
            </p>
            <div className="hero__actions">
              <a href="/#contact" className="btn btn-primary">Request a Free Quote</a>
              <a href={enquiryEmailHref} className="btn btn-secondary"><MailIcon /> Email Us</a>
            </div>
          </div>
        </div>
      </section>

      <section className="trust-bar">
        <div className="container trust-bar__grid trust-bar__grid--4">
          {trustPoints.map(({ icon: Icon, label }) => (
            <div className="trust-bar__item" key={label}>
              <Icon />
              <span>{label}</span>
            </div>
          ))}
        </div>
      </section>

      <section className="section">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Getting Started</p>
            <h2>How to Get a Same-Day Repair</h2>
          </div>

          <div className="card highlight-card">
            <ol className="regas__steps">
              {howToSteps.map((s) => <li key={s}>{s}</li>)}
            </ol>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="first-visit">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>What to Expect</p>
            <h2>What Can Be Fixed on the Same Visit?</h2>
            <p>
              Many repairs are finished in one visit because the part is in the van. Some need a
              part ordered for your model. Here's what to expect:
            </p>
          </div>

          <div className="data-table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Usually fixed on the first visit</th>
                  <th>May need a second visit</th>
                </tr>
              </thead>
              <tbody>
                {firstVisitFixed.map((item, i) => (
                  <tr key={item}>
                    <td>{item}</td>
                    <td>{secondVisitNeeded[i]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="hub-suburbs__note">
            If a part must be ordered, we'll explain the options on the day and book the return
            visit once it arrives. For sealed-system work, see{" "}
            <a href="/#regas">gas leak and regas repairs</a>.
          </p>
        </div>
      </section>

      <section className="section" id="priority">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Priority Jobs</p>
            <h2>Who Gets Priority for Same-Day Repairs</h2>
            <p>When the schedule is full, we prioritise jobs where food, stock or safety is at risk:</p>
          </div>

          <div className="card highlight-card">
            <ul className="cost__list">
              {priorityList.map((t) => (
                <li key={t}><AlertIcon style={{ color: "var(--amber-600)" }} /> {t}</li>
              ))}
            </ul>
          </div>

          <p className="hub-suburbs__note">Tell us if any of these apply when you book.</p>
        </div>
      </section>

      <section className="section section--alt" id="right-now">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>While You Wait</p>
            <h2>Fridge Stopped Working? What to Do Right Now</h2>
          </div>

          <div className="card highlight-card">
            <ol className="regas__steps">
              {rightNowSteps.map((s) => <li key={s}>{s}</li>)}
            </ol>
          </div>

          <p className="hub-suburbs__note">
            Food safety: Food Standards Australia New Zealand advises that food kept between
            5°C and 60°C for under 2 hours can be used or refrigerated. Between 2 and 4 hours,
            use it but don't re-refrigerate. Over 4 hours, throw it out.
          </p>
          <p className="hub-suburbs__note">
            Not sure what's wrong?{" "}
            <a href="/domestic-fridge-repairs-sydney/#symptoms">See why a fridge stops cooling and why fridges leak water →</a>
          </p>
        </div>
      </section>

      <section className="section" id="homes-businesses">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Homes &amp; Businesses</p>
            <h2>Same-Day Repairs for Homes and Businesses</h2>
          </div>

          <div className="grid grid-3">
            {homeBizCards.map(({ icon: Icon, title, text, href, label }) => (
              <div className="card domestic__card" key={title}>
                <span className="icon-badge"><Icon /></span>
                <h3>{title}</h3>
                <p>{text}</p>
                <p style={{ marginTop: 10 }}><a href={href}>{label}</a></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" id="parts-brands">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Parts &amp; Brands</p>
            <h2>Parts We Carry and Brands We Repair</h2>
            <p>Our van carries the parts that fail most often:</p>
          </div>

          <div className="grid grid-2">
            <div className="card highlight-card">
              <h3>Common Parts Carried</h3>
              <ul className="cost__list">
                {firstVisitFixed.map((p) => (
                  <li key={p}><CheckIcon /> {p}</li>
                ))}
              </ul>
            </div>

            <div className="card highlight-card">
              <h3>Brands We Repair</h3>
              <div className="brands__grid" style={{ justifyContent: "flex-start", margin: "0 0 16px" }}>
                {brands.map((b) => (
                  <span className="brands__chip" key={b}>{b}</span>
                ))}
              </div>
              <p style={{ color: "var(--slate-600)", fontSize: "0.9rem" }}>
                Plus commercial brands such as Skope, Bromic and Williams.{" "}
                <a href="/#brands">See all fridge brands we repair →</a>
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section cost">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Pricing</p>
            <h2>Does Same-Day Fridge Repair Cost More?</h2>
            <p>
              No. Our call-out fee is {callOutFee} incl. GST whether your visit happens the same
              day or on a later one. If a visit outside standard hours is ever needed, we'll
              always confirm any extra cost with you before booking — never after.{" "}
              <a href="/#cost">See typical Sydney repair prices by part →</a>
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="areas">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Service Areas</p>
            <h2>Same Day Fridge Repair Near You</h2>
            <p>We offer same-day visits across 8 Sydney regions, subject to the day's bookings:</p>
            <p>
              Inner West · Western Sydney · North Shore · Northern Beaches · Eastern Suburbs ·
              Sydney CBD · St George · Sutherland Shire
            </p>
            <p><a href="/fridge-repairs/">See all suburbs we service →</a></p>
          </div>
        </div>
      </section>

      <section className="section" id="same-day-faq">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>FAQ</p>
            <h2>Same Day Fridge Repair Sydney FAQs</h2>
          </div>

          <div className="accordion faq__accordion">
            {sameDayFaqs.map((item, i) => (
              <AccordionItem key={item.q} title={item.q} defaultOpen={i === 0}>
                <p>{item.a}</p>
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>

      <section className="section--dark section" id="same-day-cta">
        <div className="container">
          <div className="section-head section-head--center">
            <h2>Book a Same Day Fridge Repair</h2>
            <p>Send us your suburb, fridge brand and the fault, and we'll confirm same-day availability.</p>
          </div>
          <div className="hub-cta__actions">
            <a href="/#contact" className="btn btn-primary">Request a Free Quote</a>
            <a href={enquiryEmailHref} className="btn btn-secondary"><MailIcon /> Email Us</a>
          </div>
        </div>
      </section>
    </>
  );
}
