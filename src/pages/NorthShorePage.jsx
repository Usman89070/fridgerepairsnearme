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

const CANONICAL_URL = "https://fridgerepairsnearme.com.au/fridge-repairs/north-shore/";

const trustPoints = [
  { icon: ClockIcon, label: "Same-day visits where availability allows" },
  { icon: ShieldIcon, label: "ARCtick licensed technician" },
  { icon: WrenchIcon, label: `${callOutFee} call-out, fixed quote first` },
  { icon: CheckIcon, label: `${warrantyPeriod} warranty on parts and labour` },
];

const suburbAreas = [
  { area: "Lower North Shore", suburbs: "North Sydney, Kirribilli, Milsons Point, Lavender Bay, McMahons Point, Waverton, Wollstonecraft, Crows Nest, Naremburn, Cremorne, Neutral Bay, Northbridge, Willoughby, Middle Cove, Castlecrag, Artarmon, Chatswood, Mosman, Balmoral" },
  { area: "Lane Cove and Hunters Hill", suburbs: "Lane Cove, Longueville, Greenwich, Hunters Hill, Huntleys Point, Linley Point, Riverview, Northwood, Gladesville, Henley" },
  { area: "Ryde and Epping district", suburbs: "Ryde, Putney, Tennyson, Meadowbank, Melrose Park, West Ryde, Denistone, Eastwood, Marsfield, Macquarie Park, North Ryde, East Ryde, Ermington, Dundas, Mortlake, Oatlands, Epping, North Epping, Beecroft" },
  { area: "Upper North Shore", suburbs: "Gordon, Killara, East Killara, Lindfield, East Lindfield, Roseville, Pymble, West Pymble, St Ives, Turramurra, Wahroonga, Warrawee, Hornsby" },
];

const housingRows = [
  { where: "Harbourside apartments (Kirribilli, Neutral Bay, Cremorne, McMahons Point)", problem: "Integrated fridges behind cabinetry, strata rules, lift bookings and limited parking", fix: "Careful diagnosis, minimal panel removal, and we confirm access before we arrive" },
  { where: "High-rise towers (North Sydney, Chatswood, Macquarie Park)", problem: "Tight time windows, loading docks and building managers", fix: "Confirm timing and access in advance so the job runs smoothly" },
  { where: "Premium homes (Mosman, Balmoral, Castlecrag, Hunters Hill)", problem: "European and integrated fridges from Miele, Smeg, ILVE and Bosch with specialist parts", fix: "Diagnose first, so we only replace what has failed" },
  { where: "Large family homes (Pymble, Killara, Lindfield, Turramurra, Wahroonga, St Ives)", problem: "Big French door and side-by-side fridges, plus second fridges and wine fridges in garages and cellars that run hot", fix: "Check ventilation and the sealed system, and advise honestly on age" },
  { where: "Cafes, restaurants and offices (Crows Nest, Chatswood, Mosman, Macquarie Park)", problem: "Fridges that run all day and warm during service, plus office and kitchen fridges", fix: "Fast diagnosis to protect stock" },
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
    title: "Cafes and Restaurants",
    text: "Under-bench, upright and prep fridges and freezers around Crows Nest, Chatswood, Mosman, Lane Cove and North Sydney. When a fridge fails mid-service we focus on keeping your stock safe.",
    href: "/#commercial",
    label: "See commercial fridge repairs →",
  },
  {
    icon: DropletIcon,
    title: "Offices, Clinics and Shops",
    text: "Office kitchens, medical and dental clinics, bakeries and delis around Macquarie Park, Chatswood and North Sydney, including display and glass-door fridges.",
    href: "/display-fridge-repairs-sydney/",
    label: "See display fridge repairs →",
  },
  {
    icon: BuildingIcon,
    title: "Coolrooms",
    text: "Walk-in coolrooms and freezer rooms, including condensing units and evaporators.",
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

const northShoreFaqs = [
  {
    q: "Do you offer same-day fridge repairs on the North Shore?",
    a: "Same-day visits may be available depending on your suburb and the day's bookings. Tell us when you enquire and we'll confirm honestly, including if the next available slot is the better option.",
  },
  {
    q: "Do you cover both the Lower and Upper North Shore?",
    a: "Yes. We cover everything from Kirribilli, North Sydney and Mosman on the Lower North Shore to Pymble, Turramurra and Hornsby on the Upper North Shore, plus Lane Cove, Ryde and Macquarie Park. Send us your postcode if you're not sure.",
  },
  {
    q: "How much does a fridge repair cost on the North Shore?",
    a: "As a general guide, most repairs cost between $150 and $650, and compressor or gas work can reach $700 to $1,500 or more. Prices vary and change over time; we quote after diagnosis.",
  },
  {
    q: "Do you repair integrated and European fridges?",
    a: "Yes. We work on integrated and freestanding fridges from Miele, Smeg, ILVE, Bosch, Liebherr, Fisher & Paykel and others, taking care of panels and cabinetry.",
  },
  {
    q: "I live in an apartment. What do I need to arrange?",
    a: "Tell us about parking, lift bookings and any building manager or strata rules when you call, so we can arrive prepared.",
  },
  {
    q: "Can you repair a fridge in a garage or cellar?",
    a: "Yes. Second fridges and wine fridges in hot garages often run harder than they should. We check ventilation and the sealed system, and tell you if the fridge is worth repairing.",
  },
  {
    q: "Do you repair commercial fridges for cafes, restaurants and offices?",
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
    name: "Fridge Repairs North Shore",
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
      { "@type": "ListItem", position: 3, name: "North Shore", item: CANONICAL_URL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: northShoreFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export default function NorthShorePage() {
  usePageSeo({
    title: "Fridge Repairs North Shore | Local Technician",
    description:
      "Fridge repairs across the North Shore, from Mosman and North Sydney to Chatswood and Pymble. Local technician, fixed quote before any work starts.",
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
            <p className="eyebrow eyebrow--light">North Shore</p>
            <h1>Fridge Repairs on the North Shore: Local Technician</h1>
            <p className="hero__lede">
              Fridge gone warm in Mosman, North Sydney, Chatswood or Pymble? We repair fridges,
              freezers and commercial refrigeration across the Lower and Upper North Shore, for
              houses, apartments, cafes and offices.
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
            <h2>How Fast Can You Get to the North Shore?</h2>
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
            <h2>Suburbs We Cover on the North Shore</h2>
            <p>
              We cover the whole North Shore, from the harbour at Kirribilli to Hornsby in the
              north and Macquarie Park in the west. Don't see your suburb? Send us your postcode,
              as nearby areas can usually still be booked.
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
            <h2>What's Different About Fridges on the North Shore</h2>
            <p>
              The North Shore is a mix of harbour apartments, older leafy suburbs and large
              family homes, and each has its own fridge issues.
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
            Access tip: many North Shore homes have steep driveways and tight parking, and many
            apartments need a booking. Tell us when you call so we're ready on the day.
          </p>
        </div>
      </section>

      <section className="section section--alt" id="problems">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Common Faults</p>
            <h2>Fridge Problems We Fix Across the North Shore</h2>
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
            <h2>Brands We Repair on the North Shore</h2>
            <p>
              We repair most makes found in North Shore homes, plus commercial equipment such as
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
            <h2>Commercial Fridge and Coolroom Repairs for North Shore Businesses</h2>
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
            <h2>Fridge Repair Cost on the North Shore</h2>
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
              board, repair is usually worthwhile. That is especially true for premium and
              integrated fridges, which cost far more to replace. If it's over 10 years old and
              needs a new compressor, replacement can make more sense. We'll give you a straight
              answer either way. Read more about whether to{" "}
              <a href="/blog">repair or replace your fridge</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="north-shore-faq">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>FAQ</p>
            <h2>Fridge Repairs North Shore FAQs</h2>
          </div>

          <div className="accordion faq__accordion">
            {northShoreFaqs.map((item, i) => (
              <AccordionItem key={item.q} title={item.q} defaultOpen={i === 0}>
                <p>{item.a}</p>
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>

      <section className="section--dark section" id="north-shore-cta">
        <div className="container">
          <div className="section-head section-head--center">
            <h2>Book a Fridge Repair on the North Shore</h2>
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
