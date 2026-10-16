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
  ClockIcon,
  BuildingIcon,
  DropletIcon,
} from "../components/Icons";
import AccordionItem from "../components/Accordion";

const CANONICAL_URL = "https://fridgerepairsnearme.com.au/fridge-repairs/st-george/";

const trustPoints = [
  { icon: ClockIcon, label: "Same-day visits where availability allows" },
  { icon: ShieldIcon, label: "ARCtick licensed technician" },
  { icon: WrenchIcon, label: `${callOutFee} call-out, fixed quote first` },
  { icon: CheckIcon, label: `${warrantyPeriod} warranty on parts and labour` },
];

const suburbAreas = [
  { area: "Hurstville and the west", suburbs: "Hurstville, South Hurstville, Penshurst, Mortdale, Oatley, Peakhurst, Lugarno, Narwee, Riverwood, Beverly Hills, Beverley Park, Kingsgrove, Roselands" },
  { area: "Kogarah and the south", suburbs: "Kogarah, Kogarah Bay, Carlton, Allawah, Blakehurst, Carss Park, Connells Point, Kyle Bay, Sans Souci, Dolls Point, Ramsgate, Sandringham, Monterey" },
  { area: "Rockdale and the bay", suburbs: "Rockdale, Banksia, Brighton-Le-Sands, Kyeemagh, Bexley, Arncliffe, Turrella, Wolli Creek" },
  { area: "Further west", suburbs: "Hurlstone Park, Undercliffe, Wiley Park, Padstow, Revesby, Panania, East Hills" },
];

const housingRows = [
  { where: "Apartment towers (Hurstville, Kogarah, Rockdale, Wolli Creek)", problem: "Tight time windows, lift bookings, loading docks, and fridges squeezed into small recesses with poor airflow", fix: "Confirm access and timing beforehand, check clearances and ventilation as well as the fridge" },
  { where: "Post-war and Federation homes (Bexley, Penshurst, Beverly Hills, Mortdale, Allawah)", problem: "Older second fridges and freezers running in garages and sunrooms", fix: "Diagnose before replacing, and advise honestly on age" },
  { where: "Riverside and bayside homes (Oatley, Lugarno, Sans Souci, Dolls Point, Brighton-Le-Sands)", problem: "Humid, salty air near the Georges River and Botany Bay, which corrodes coils and fans", fix: "Clean and treat the coil, replace corroded parts, and show you how to keep the back of the fridge clean" },
  { where: "Large family homes and duplexes (Peakhurst, Blakehurst, Kingsgrove, Roselands)", problem: "Big French door and side-by-side fridges with ice makers and water filters", fix: "Check the water line, drain and sealed system" },
  { where: "Restaurants, bakeries and shops (Forest Road Hurstville, Rocky Point Road, Princes Highway, Grand Parade)", problem: "Fridges, display cabinets and coolrooms that run all day and warm during service", fix: "Fast diagnosis to protect stock" },
];

const problemRows = [
  { problem: "Fridge not cooling", cause: "Failed fan, dirty condenser, faulty thermostat or sensor", href: "/domestic-fridge-repairs-sydney/#symptoms", label: "Fridge not cooling" },
  { problem: "Fridge leaking water", cause: "Blocked defrost drain or damaged door seal", href: "/domestic-fridge-repairs-sydney/#symptoms", label: "Fridge leaking water" },
  { problem: "Freezer iced up or not freezing", cause: "Defrost heater, thermostat or fan fault", href: "/domestic-fridge-repairs-sydney/", label: "Freezer repairs" },
  { problem: "Noisy fridge", cause: "Fan blade or compressor mount issue", href: "/domestic-fridge-repairs-sydney/", label: "Domestic fridge repairs" },
  { problem: "Gas leak or low refrigerant", cause: "A leak in the sealed system", href: "/#regas", label: "Fridge regas" },
];

const commercialCards = [
  {
    icon: BuildingIcon,
    title: "Restaurants, Cafes and Takeaways",
    text: "Under-bench, upright and prep fridges and freezers around Hurstville, Kogarah, Rockdale and Brighton-Le-Sands. When a fridge fails mid-service we focus on keeping your stock safe.",
    href: "/#commercial",
    label: "See commercial fridge repairs →",
  },
  {
    icon: DropletIcon,
    title: "Butchers, Bakeries, Seafood and Grocers",
    text: "Display and glass-door fridges, serve-over cabinets and cold rooms for food shops.",
    href: "/display-fridge-repairs-sydney/",
    label: "See display fridge repairs →",
  },
  {
    icon: BuildingIcon,
    title: "Clinics, Pubs and Clubs",
    text: "Medical and aged-care fridges, bar fridges and coolrooms around St George Hospital, the Hurstville and Kogarah centres and local clubs.",
    href: "/#commercial",
    label: "See coolroom repairs →",
  },
];

const costRows = [
  { job: "Call-out and diagnosis", range: "$150 – $250" },
  { job: "Door seal replacement", range: "$200 – $400" },
  { job: "Fan, thermostat or sensor", range: "$250 – $500" },
  { job: "Defrost heater or control board", range: "$300 – $650" },
  { job: "Compressor or gas leak repair with regas", range: "$700 – $1,500+" },
];

const bookingSteps = [
  "Tell us what's happening: your suburb, the fridge brand and model, and the fault. A photo of the label helps.",
  "We confirm a time: same day where availability allows, otherwise the next available slot.",
  "Diagnosis on site: we test the fans, sensors, defrost system, seals and compressor to find the actual cause.",
  "Fixed quote: you get the price before we start, and we only go ahead if you say yes.",
  "Repair and test: most faults are fixed on the same visit when the part is on the van, and we check the fridge is holding temperature before we leave.",
];

const stGeorgeFaqs = [
  {
    q: "What areas does \"St George\" cover?",
    a: "We use St George to mean the Sydney suburbs between the Georges River and Botany Bay, including Hurstville, Kogarah, Rockdale, Bexley, Arncliffe, Oatley and Brighton-Le-Sands. It's not the Queensland town.",
  },
  {
    q: "Do you offer same-day fridge repairs in St George?",
    a: "Same-day visits may be available depending on your suburb and the day's bookings. Tell us when you enquire and we'll confirm honestly, including if the next available slot is the better option.",
  },
  {
    q: "How much does a fridge repair cost in St George?",
    a: "As a general guide, most repairs cost between $150 and $650, and compressor or gas work can reach $700 to $1,500 or more. Prices vary and change over time; we quote after diagnosis.",
  },
  {
    q: "I live in an apartment. What do I need to arrange?",
    a: "Tell us about parking, lift bookings and any building manager or strata rules when you call, so we can arrive prepared.",
  },
  {
    q: "Does river and bay air damage fridges?",
    a: "It can. Humid, salty air near the Georges River and Botany Bay corrodes condenser coils and fans over time. Keeping the back of the fridge clean and ventilated helps.",
  },
  {
    q: "Do you repair fridges with ice makers and water filters?",
    a: "Yes. We repair ice makers, water lines, filters and drains on French door and side-by-side fridges.",
  },
  {
    q: "Do you repair commercial fridges for restaurants and food shops?",
    a: "Yes. We repair under-bench, upright, display and prep fridges, and coolrooms, and we prioritise breakdowns where stock is at risk.",
  },
  {
    q: "Is it worth repairing my fridge?",
    a: "Usually, if it's under about 8 years old and the fault isn't the compressor. For older fridges with a major fault, replacement may be cheaper, and we'll tell you honestly.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Fridge repair",
    name: "Fridge Repairs St George",
    url: CANONICAL_URL,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Fridge Repairs Near Me",
      email: enquiryEmail,
    },
    areaServed: suburbAreas.flatMap((a) => a.suburbs.split(", ")).map((s) => ({ "@type": "City", name: s })),
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fridgerepairsnearme.com.au/" },
      { "@type": "ListItem", position: 2, name: "Fridge Repairs", item: "https://fridgerepairsnearme.com.au/fridge-repairs/" },
      { "@type": "ListItem", position: 3, name: "St George", item: CANONICAL_URL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: stGeorgeFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export default function StGeorgePage() {
  usePageSeo({
    title: "Fridge Repairs St George | Local Technician",
    description:
      "Fridge repairs across St George, from Hurstville and Kogarah to Rockdale and Brighton-Le-Sands. Local technician, fixed quote before any work starts.",
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
            <p className="eyebrow eyebrow--light">St George</p>
            <h1>Fridge Repairs in St George: Local Technician</h1>
            <p className="hero__lede">
              Fridge gone warm in Hurstville, Kogarah, Rockdale or Brighton-Le-Sands? We repair
              fridges, freezers and commercial refrigeration across the St George area of Sydney,
              the suburbs between the Georges River and Botany Bay.
            </p>
            <p className="hero__sub">
              You get a fixed quote before any work starts, and we'll tell you honestly if a
              repair isn't worth it.
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
            <p className="eyebrow" style={{ justifyContent: "center" }}>Response Times</p>
            <h2>How Fast Can You Get to St George?</h2>
          </div>

          <div className="card highlight-card">
            <p>
              Same-day visits may be available depending on your suburb and the day's bookings —
              tell us when you enquire and we'll confirm honestly, even if that means the next
              available slot instead. If the fridge is full of food or stock, tell us when you
              call and we'll prioritise it where possible. See our{" "}
              <a href="/same-day-fridge-repair-sydney/">same-day fridge repair page</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="suburbs">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Coverage</p>
            <h2>Suburbs We Cover in St George</h2>
            <p>
              We cover the whole St George area, from Hurstville and Kogarah to Rockdale and the
              Botany Bay foreshore. Don't see your suburb? Send us your postcode, as nearby areas
              can usually still be booked.
            </p>
          </div>

          <div className="data-table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Area</th>
                  <th>Suburbs</th>
                </tr>
              </thead>
              <tbody>
                {suburbAreas.map((r) => (
                  <tr key={r.area}>
                    <td>{r.area}</td>
                    <td>{r.suburbs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="hub-suburbs__note">
            Working further out? See{" "}
            <a href="/fridge-repairs/">all Sydney areas we service →</a>
          </p>
        </div>
      </section>

      <section className="section" id="local">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Local Conditions</p>
            <h2>What's Different About Fridges in St George</h2>
            <p>
              St George has a bigger mix of apartments, family homes and food businesses than
              most people expect, and each has its own fridge issues.
            </p>
          </div>

          <div className="data-table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Where you live</th>
                  <th>Common problem</th>
                  <th>What we do</th>
                </tr>
              </thead>
              <tbody>
                {housingRows.map((r) => (
                  <tr key={r.where}>
                    <td>{r.where}</td>
                    <td>{r.problem}</td>
                    <td>{r.fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="hub-suburbs__note">
            Access tip: many St George apartments need a booking or a loading zone. Tell us when
            you call so we can arrive ready.
          </p>
        </div>
      </section>

      <section className="section section--alt" id="problems">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Common Faults</p>
            <h2>Fridge Problems We Fix Across St George</h2>
          </div>

          <div className="data-table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Problem</th>
                  <th>Usual cause</th>
                  <th>More info</th>
                </tr>
              </thead>
              <tbody>
                {problemRows.map((r) => (
                  <tr key={r.problem}>
                    <td>{r.problem}</td>
                    <td>{r.cause}</td>
                    <td><a href={r.href}>{r.label}</a></td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section" id="brands">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Brands</p>
            <h2>Brands We Repair in St George</h2>
            <p>
              We repair most makes found in St George homes, plus commercial equipment such as
              Bromic, Skope, Williams, True and Vintec.
            </p>
          </div>

          <div className="brands__grid" style={{ justifyContent: "center" }}>
            {brands.map((b) => (
              <span className="brands__chip" key={b}>{b}</span>
            ))}
          </div>
          <p className="hub-suburbs__note" style={{ textAlign: "center" }}>
            <a href="/#brands">See all fridge brands we repair →</a>
          </p>
        </div>
      </section>

      <section className="section section--alt" id="commercial">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Businesses</p>
            <h2>Commercial Fridge and Coolroom Repairs for St George Businesses</h2>
          </div>

          <div className="grid grid-3">
            {commercialCards.map(({ icon: Icon, title, text, href, label }) => (
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

      <section className="section cost" id="cost">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Pricing</p>
            <h2>Fridge Repair Cost in St George</h2>
            <p>Price depends on the fault and the part. As a general Sydney market guide:</p>
          </div>

          <div className="data-table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Job</th>
                  <th>Typical price range</th>
                </tr>
              </thead>
              <tbody>
                {costRows.map((r) => (
                  <tr key={r.job}>
                    <td>{r.job}</td>
                    <td>{r.range}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="hub-suburbs__note">
            Note: general Sydney market guide, not our prices. Prices change over time. Our
            call-out is {callOutFee} incl. GST and your exact price is quoted after diagnosis.{" "}
            <a href="/#cost">See our fridge repair cost guide →</a>
          </p>
        </div>
      </section>

      <section className="section" id="booking">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>How It Works</p>
            <h2>How Booking Works</h2>
          </div>

          <div className="card highlight-card">
            <ol className="regas__steps">
              {bookingSteps.map((s) => <li key={s}>{s}</li>)}
            </ol>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="repair-or-replace">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Repair or Replace</p>
            <h2>Repair or Replace Your Fridge?</h2>
          </div>

          <div className="card highlight-card">
            <p>
              If your fridge is under about 8 years old and the fault is a fan, sensor, seal or
              board, repair is usually worthwhile. If it's over 10 years old and needs a new
              compressor, replacement can make more sense. We'll give you a straight answer
              either way. Read more about whether to{" "}
              <a href="/blog">repair or replace your fridge</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="st-george-faq">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>FAQ</p>
            <h2>Fridge Repairs St George FAQs</h2>
          </div>

          <div className="accordion faq__accordion">
            {stGeorgeFaqs.map((item, i) => (
              <AccordionItem key={item.q} title={item.q} defaultOpen={i === 0}>
                <p>{item.a}</p>
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>

      <section className="section--dark section" id="st-george-cta">
        <div className="container">
          <div className="section-head section-head--center">
            <h2>Book a Fridge Repair in St George</h2>
            <p>
              Tell us your suburb, the fridge brand and model, and what it's doing. We'll find
              the real fault and give you a fixed quote before any work starts.
            </p>
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
