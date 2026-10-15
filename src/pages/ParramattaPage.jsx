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

const CANONICAL_URL = "https://fridgerepairsnearme.com.au/fridge-repairs/parramatta/";

const trustPoints = [
  { icon: ClockIcon, label: "Same-day visits where availability allows" },
  { icon: ShieldIcon, label: "ARCtick licensed technician" },
  { icon: WrenchIcon, label: `${callOutFee} call-out, fixed quote first` },
  { icon: CheckIcon, label: `${warrantyPeriod} warranty on parts and labour` },
];

const suburbAreas = [
  { area: "Parramatta and the CBD", suburbs: "Parramatta, Parramatta CBD, Church Street, Phillip Street, Westfield Parramatta, Parramatta Park" },
  { area: "Bordering Parramatta", suburbs: "Harris Park, Granville, Westmead, North Parramatta, Rosehill, Rydalmere, Mays Hill, Wentworthville, Camellia" },
  { area: "Short drive away", suburbs: "Merrylands, Auburn, Silverwater, Newington, Telopea, Dundas, Epping, Carlingford, Baulkham Hills" },
];

const housingRows = [
  {
    where: "Apartment towers in the CBD (Church Street, Phillip Street, Macquarie Street, Parramatta Square side)",
    problem: "Strata approval, lift bookings, loading dock windows and built-in fridges set into tight cabinetry with little air around them",
    fix: "Agree the time and access with you and the building first, and check clearance around the fridge as well as the fridge itself",
  },
  {
    where: "Units and townhouses (Harris Park, Granville, Westmead, Rosehill)",
    problem: "Shared basement parking, visitor permits and rentals where the owner or agent has to approve the work",
    fix: "A written quote you can send to the landlord, agent or strata manager before we start",
  },
  {
    where: "Older houses (North Parramatta, Mays Hill, Rydalmere, Wentworthville)",
    problem: "Fridges 12 to 20 years old, often running in a garage, granny flat or second kitchen through hot western Sydney summers",
    fix: "A clear answer on whether a part is worth fitting once the age and the cost are put side by side",
  },
  {
    where: "Restaurants, cafes and sweet shops (Church Street, Wigram Street in Harris Park, Westfield food areas)",
    problem: "Under-bench, prep and display fridges and freezers working long hours, with little spare space to store stock if one fails",
    fix: "Fast diagnosis to protect your stock, and repairs outside the lunch and dinner rush where we can",
  },
  {
    where: "Clinics, pharmacies and offices (Westmead, Parramatta CBD)",
    problem: "Small medical and breakroom fridges where a steady temperature matters",
    fix: "Quick, tidy repairs with little disruption. Tell us when you book if the fridge holds medicines so we can prioritise it",
  },
];

const problemRows = [
  { problem: "Fridge not cooling", cause: "Failed fan, dirty condenser coil, faulty thermostat or sensor", href: "/domestic-fridge-repairs-sydney/#symptoms", label: "Fridge not cooling" },
  { problem: "Fridge leaking water onto the floor", cause: "Blocked defrost drain or damaged door seal", href: "/domestic-fridge-repairs-sydney/#symptoms", label: "Fridge leaking water" },
  { problem: "Freezer iced up or not freezing", cause: "Defrost heater, thermostat or fan fault", href: "/domestic-fridge-repairs-sydney/", label: "Freezer repairs" },
  { problem: "Noisy or constantly running fridge", cause: "Fan blade, compressor mount or a dirty coil", href: "/domestic-fridge-repairs-sydney/", label: "Domestic fridge repairs" },
  { problem: "Ice maker or water dispenser not working", cause: "Blocked water line, faulty inlet valve or frozen tube", href: "/ice-maker-repairs-sydney/", label: "Ice maker repairs" },
  { problem: "Low refrigerant or a gas leak", cause: "A leak in the sealed system", href: "/#regas", label: "Fridge regas" },
];

const commercialCards = [
  {
    icon: BuildingIcon,
    title: "Restaurants, Cafes and Sweet Shops",
    text: "Under-bench, upright and prep fridges and freezers, plus display cabinets, along Church Street, Wigram Street and the streets around the CBD. When a fridge fails mid-service, we focus on keeping your stock safe.",
    href: "/#commercial",
    label: "See commercial fridge repairs →",
  },
  {
    icon: DropletIcon,
    title: "Display Fridges and Retail",
    text: "Grocers, convenience stores, takeaway shops and bottle shops with display fridges, drink cabinets and ice cream freezers.",
    href: "/display-fridge-repairs-sydney/",
    label: "See display fridge repairs →",
  },
  {
    icon: BuildingIcon,
    title: "Coolrooms",
    text: "Walk-in coolrooms and freezer rooms for restaurants, caterers and food suppliers across Parramatta, Granville and Rydalmere, including condensing units and evaporators.",
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
  "Tell us what's happening: your address or building, the fridge brand and model, and the fault. A photo of the label inside the door or on the back helps.",
  "We confirm a time and access: same day where availability allows, with any strata, lift, loading dock or parking details agreed first.",
  "Diagnosis on site: we test the fans, sensors, defrost system, door seals and compressor to find the actual cause.",
  "Fixed quote: you get the price before we start, and we only go ahead if you say yes.",
  "Repair and test: most faults are fixed on the same visit when the part is on the van, and we check the fridge is holding temperature before we leave.",
];

const parramattaFaqs = [
  {
    q: "Do you offer same-day fridge repairs in Parramatta?",
    a: "Same-day visits may be available depending on the day's bookings, and they're easier to arrange the earlier you call. If your fridge is full of food, tell us when you book and we'll try to prioritise it.",
  },
  {
    q: "How much does a fridge repair cost in Parramatta?",
    a: `As a general Sydney market guide, most repairs cost between $150 and $650, and compressor or gas work can reach $700 to $1,500 or more. Our call-out is ${callOutFee} and we give you a fixed quote after diagnosis, before any work starts.`,
  },
  {
    q: "Which suburbs around Parramatta do you cover?",
    a: "Parramatta and the CBD, plus Harris Park, Granville, Westmead, North Parramatta, Rosehill, Rydalmere, Mays Hill, Wentworthville and Camellia, and a short drive further out to Merrylands, Auburn, Silverwater and Epping. If you're not sure, send us your postcode and we'll tell you.",
  },
  {
    q: "Can you work in apartment buildings with strict access rules?",
    a: "Yes. Tell us about strata approval, lift bookings, loading dock times, visitor parking and any paperwork when you book, and we'll arrange it before we arrive. It saves a wasted trip for both of us.",
  },
  {
    q: "My fridge isn't cooling. What should I check before calling?",
    a: "Check the power point and the temperature dial, make sure the door is closing fully, and see that nothing is blocking the vents inside. Pull the fridge out slightly and look for dust on the coil at the back. If it still isn't cooling, switch it off and call us rather than keep it running, as a failing compressor can get worse.",
  },
  {
    q: "Do you repair commercial fridges for restaurants and cafes on Church Street?",
    a: "Yes. We repair under-bench, upright, prep and display fridges, glass-door drink fridges, freezers and walk-in coolrooms. If stock is at risk, say so on the phone and we'll prioritise the job.",
  },
  {
    q: "Which fridge brands do you repair?",
    a: "Samsung, LG, Fisher & Paykel, Westinghouse, Electrolux, Bosch, Miele, Smeg, Kelvinator, Hisense, Haier, Beko, Whirlpool, Liebherr and more, as well as commercial brands such as Bromic, Skope, Williams and True.",
  },
  {
    q: "Is it worth repairing an older fridge?",
    a: "Usually, if it's under about 8 years old and the fault isn't the compressor. For fridges over 10 years old with a major fault, replacement can be cheaper, and we'll tell you plainly after diagnosis rather than sell you a repair that won't last.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${CANONICAL_URL}#service`,
    serviceType: "Fridge repair",
    name: "Fridge Repairs Parramatta",
    description:
      "On-site fridge, freezer and commercial refrigeration repairs in Parramatta NSW 2150 and nearby Western Sydney suburbs, with a fixed quote before any work starts.",
    url: CANONICAL_URL,
    provider: {
      "@type": "HomeAndConstructionBusiness",
      name: "Fridge Repairs Near Me",
      url: "https://fridgerepairsnearme.com.au/",
      email: enquiryEmail,
    },
    areaServed: [
      {
        "@type": "Place",
        name: "Parramatta NSW 2150",
        geo: { "@type": "GeoCoordinates", latitude: -33.815, longitude: 151.001 },
      },
      ...suburbAreas
        .flatMap((a) => a.suburbs.split(", "))
        .filter((s) => !["Parramatta", "Parramatta CBD", "Church Street", "Phillip Street", "Westfield Parramatta", "Parramatta Park"].includes(s))
        .map((s) => ({ "@type": "City", name: s })),
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Fridge repair services in Parramatta",
      itemListElement: [
        "Domestic fridge repairs",
        "Freezer repairs",
        "Fridge regas",
        "Commercial fridge repairs",
        "Coolroom repairs",
        "Display fridge repairs",
        "Ice maker repairs",
      ].map((n) => ({ "@type": "Offer", itemOffered: { "@type": "Service", name: n } })),
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fridgerepairsnearme.com.au/" },
      { "@type": "ListItem", position: 2, name: "Fridge Repairs", item: "https://fridgerepairsnearme.com.au/fridge-repairs/" },
      { "@type": "ListItem", position: 3, name: "Parramatta", item: CANONICAL_URL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: parramattaFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export default function ParramattaPage() {
  usePageSeo({
    title: `Fridge Repairs Parramatta | ${callOutFee} Call-Out, Fixed Quote First`,
    description: `Fridge not cooling in Parramatta? Local technician, ${callOutFee} call-out, same-day visits where available, fixed quote first and a ${warrantyPeriod} warranty on parts.`,
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
            <p className="eyebrow eyebrow--light">Parramatta NSW 2150</p>
            <h1>Fridge Repairs in Parramatta: Fixed Quote Before We Start</h1>
            <p className="hero__lede">
              Fridge gone warm in an apartment off Church Street, a unit in Harris Park or a
              restaurant kitchen near Westfield? We repair fridges, freezers and commercial
              refrigeration across Parramatta and the western Sydney suburbs around it.
            </p>
            <p className="hero__sub">
              You get a fixed quote before any work starts, and we'll tell you plainly if a
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
            <p className="eyebrow" style={{ justifyContent: "center" }}>Quick Answer</p>
            <h2>Fridge Repair in Parramatta at a Glance</h2>
          </div>

          <div className="card highlight-card">
            <p>
              We repair domestic and commercial fridges, freezers, wine fridges, ice makers and
              coolrooms in Parramatta, Harris Park, Granville, Westmead, North Parramatta and
              nearby suburbs. The call-out is {callOutFee}, you get a fixed quote after
              diagnosis, and every completed repair carries a {warrantyPeriod} warranty on parts
              and labour. Most faults, such as a failed fan, a worn door seal or a faulty
              sensor, are fixed on the first visit when the part is on the van. If your fridge
              is full of food, tell us when you book and we'll try to get to you the same day.
              See our <a href="/same-day-fridge-repair-sydney/">same-day fridge repair page</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="suburbs">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Coverage</p>
            <h2>Parramatta and the Suburbs Around It</h2>
            <p>
              Parramatta sits about 23 km west of the Sydney CBD, and we cover the CBD, the
              surrounding suburbs and the streets between them. Don't see yours? Send us your postcode, as
              nearby areas can usually still be booked.
            </p>
          </div>

          <div className="data-table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Area</th>
                  <th>Suburbs and places</th>
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
            <h2>What's Different About Fridge Repairs in Parramatta</h2>
            <p>
              At the 2021 Census, Parramatta had about 30,200 residents at a density of roughly
              5,800 people per square kilometre, with a median age of 32. That is a lot of
              people in apartments and units, living next to older houses around North Parramatta
              and Rydalmere. The building you live in changes the job.
            </p>
          </div>

          <div className="data-table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Where you are</th>
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
            Apartment tip: a fridge needs a few centimetres of clear space behind and beside it
            to shed heat. Check your manual for the gap. A fridge pushed hard into a tight
            cabinet recess runs hotter, works harder and wears its compressor out sooner. Also
            working further west? See our{" "}
            <a href="/fridge-repairs/western-sydney/">Western Sydney fridge repairs</a>.
          </p>
        </div>
      </section>

      <section className="section section--alt" id="problems">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Common Faults</p>
            <h2>Fridge Problems We Fix in Parramatta</h2>
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
            <h2>Brands We Repair in Parramatta</h2>
            <p>
              We repair most makes found in Parramatta homes and kitchens, plus commercial
              and wine fridge brands such as Bromic, Skope, Williams, True and Vintec.
            </p>
          </div>

          <div className="brands__grid" style={{ justifyContent: "center" }}>
            {brands.map((b) => (
              <span className="brands__chip" key={b}>{b}</span>
            ))}
          </div>
          <p className="hub-suburbs__note" style={{ textAlign: "center" }}>
            <a href="/#brands">See all fridge brands we repair →</a>{" "}
            and our <a href="/wine-fridge-repairs-sydney/">wine fridge repairs →</a>
          </p>
        </div>
      </section>

      <section className="section section--alt" id="commercial">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Businesses</p>
            <h2>Commercial Fridge and Coolroom Repairs for Parramatta Businesses</h2>
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
            <h2>Fridge Repair Cost in Parramatta</h2>
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
              board, repair is usually worthwhile. That is especially true for built-in
              apartment fridges, which cost far more to replace once cabinetry is involved. If it's over
              10 years old and needs a new compressor, replacement can make more sense. We'll
              give you a straight answer either way. Read more about whether to{" "}
              <a href="/blog">repair or replace your fridge</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="parramatta-faq">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>FAQ</p>
            <h2>Fridge Repairs Parramatta FAQs</h2>
          </div>

          <div className="accordion faq__accordion">
            {parramattaFaqs.map((item, i) => (
              <AccordionItem key={item.q} title={item.q} defaultOpen={i === 0}>
                <p>{item.a}</p>
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>

      <section className="section--dark section" id="parramatta-cta">
        <div className="container">
          <div className="section-head section-head--center">
            <h2>Book a Fridge Repair in Parramatta</h2>
            <p>
              Tell us your address or building, the fridge brand and model, and what it's doing. We'll find
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
