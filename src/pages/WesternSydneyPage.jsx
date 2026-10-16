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
  AlertIcon,
} from "../components/Icons";
import AccordionItem from "../components/Accordion";

const CANONICAL_URL = "https://fridgerepairsnearme.com.au/fridge-repairs/western-sydney/";

const trustPoints = [
  { icon: ClockIcon, label: "Same-day visits where availability allows" },
  { icon: ShieldIcon, label: "ARCtick licensed technician" },
  { icon: WrenchIcon, label: `${callOutFee} call-out, fixed quote first` },
  { icon: CheckIcon, label: `${warrantyPeriod} warranty on parts and labour` },
];

const suburbAreas = [
  { area: "Parramatta and the central west", suburbs: "Parramatta, Rosehill, Rydalmere, Telopea, Silverwater, Newington, Granville, Harris Park, Westmead, Wentworthville" },
  { area: "Auburn and Merrylands", suburbs: "Auburn, Berala, Regents Park, Sefton, Merrylands, Guildford, Greystanes, Smithfield, Fairfield" },
  { area: "Bankstown and the south", suburbs: "Bankstown, Yagoona, Birrong, Bass Hill, Lakemba, Belmore, Belfield, Punchbowl" },
  { area: "Greater Western Sydney", suburbs: "Blacktown, Seven Hills, Baulkham Hills, Castle Hill, Wetherill Park, St Marys, Penrith, Liverpool, Campbelltown" },
];

const housingRows = [
  { where: "Summer heat (most of Western Sydney)", problem: "Temperatures several degrees above the coast make fridges and freezers work harder, especially in garages, granny flats and enclosed patios", fix: "Check ventilation and the condenser, and advise honestly on age" },
  { where: "Large family homes (Merrylands, Greystanes, Fairfield, Castle Hill, Baulkham Hills)", problem: "Big French door and side-by-side fridges with ice makers and water filters, plus a second fridge or chest freezer in the garage", fix: "Check the water line, drain and sealed system" },
  { where: "Apartments (Parramatta CBD, Auburn, Bankstown, Westmead, Wentworthville)", problem: "Tight access, lift bookings, loading docks and fridges in small recesses with poor airflow", fix: "Agree a time with you and the building first, and check clearances and ventilation" },
  { where: "Storms and power surges", problem: "Power cuts and surges can damage control boards and spoil food", fix: "Test the board and power supply, and advise on surge protection" },
  { where: "Restaurants, bakeries and grocers (Auburn, Lakemba, Bankstown, Parramatta, Granville)", problem: "Fridges, display cabinets and coolrooms running all day for busy food strips", fix: "Fast diagnosis to protect stock" },
  { where: "Warehouses and factories (Silverwater, Smithfield, Wetherill Park, Rydalmere)", problem: "Coolrooms, blast chillers and large display units", fix: "Diagnosis on site" },
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
    title: "Restaurants, Bakeries and Grocers",
    text: "Under-bench, upright and prep fridges and freezers, display cabinets and cold rooms for food shops and restaurants around Auburn, Lakemba, Bankstown and Parramatta. When a fridge fails mid-service we focus on keeping your stock safe.",
    href: "/#commercial",
    label: "See commercial fridge repairs →",
  },
  {
    icon: AlertIcon,
    title: "Medical, Pharmacy and Aged Care",
    text: "Medical and vaccine fridges, pharmacy fridges and aged-care kitchens around Westmead, Parramatta and Bankstown, where temperature must stay in range.",
    href: "/display-fridge-repairs-sydney/",
    label: "See display fridge repairs →",
  },
  {
    icon: DropletIcon,
    title: "Warehouses and Coolrooms",
    text: "Walk-in coolrooms and freezer rooms for wholesalers, caterers and food factories at Silverwater, Smithfield, Wetherill Park and Rydalmere.",
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

const westernSydneyFaqs = [
  {
    q: "Do you offer same-day fridge repairs in Western Sydney?",
    a: "Same-day visits may be available depending on your suburb and the day's bookings. Distances are bigger out west, so we'll give you a realistic window for your suburb when you call rather than just promising \"today\".",
  },
  {
    q: "Which Western Sydney suburbs do you cover?",
    a: "All of them, from Parramatta, Auburn, Bankstown and Merrylands to Blacktown, Penrith and Liverpool. Send us your postcode if you're not sure.",
  },
  {
    q: "How much does a fridge repair cost in Western Sydney?",
    a: "As a general guide, most repairs cost between $150 and $650, and compressor or gas work can reach $700 to $1,500 or more. Prices vary and change over time; we quote after diagnosis.",
  },
  {
    q: "Does summer heat damage fridges?",
    a: "It makes them work harder. Western Sydney summers run hotter than the coast, so a fridge in a garage, granny flat or enclosed patio can overheat. Good airflow and a clean coil at the back help.",
  },
  {
    q: "Can you fix a fridge after a storm or power surge?",
    a: "Often, yes. A surge can damage the control board or power supply. We test the board and tell you if it can be repaired.",
  },
  {
    q: "Do you repair fridges with ice makers and water filters?",
    a: "Yes. We repair ice makers, water lines, filters and drains on French door and side-by-side fridges.",
  },
  {
    q: "Do you repair commercial and medical fridges?",
    a: "Yes. We repair under-bench, upright, display, prep and medical fridges and coolrooms, and we prioritise breakdowns where stock is at risk.",
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
    name: "Fridge Repairs Western Sydney",
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
      { "@type": "ListItem", position: 3, name: "Western Sydney", item: CANONICAL_URL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: westernSydneyFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export default function WesternSydneyPage() {
  usePageSeo({
    title: "Fridge Repairs Western Sydney | Local Technician",
    description:
      "Fridge repairs across Western Sydney, from Parramatta and Auburn to Bankstown and Blacktown. Local technician, fixed quote before any work starts.",
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
            <p className="eyebrow eyebrow--light">Western Sydney</p>
            <h1>Fridge Repairs in Western Sydney: Local Technician</h1>
            <p className="hero__lede">
              Fridge gone warm in Parramatta, Auburn, Bankstown or Merrylands? We repair fridges,
              freezers and commercial refrigeration across Western Sydney, for homes, granny
              flats, cafes, restaurants and warehouses.
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
            <h2>How Fast Can You Get to Western Sydney?</h2>
          </div>

          <div className="card highlight-card">
            <p>
              Same-day visits may be available depending on your suburb and the day's bookings.
              Distances are bigger out west, so when you call we'll give you a realistic window
              for your suburb. If the fridge is full of food or stock, tell us and we'll
              prioritise it where possible. See our{" "}
              <a href="/same-day-fridge-repair-sydney/">same-day fridge repair page</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="suburbs">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Coverage</p>
            <h2>Suburbs We Cover in Western Sydney</h2>
            <p>
              We cover Western Sydney from Silverwater and Parramatta out to Blacktown and
              Penrith. Don't see your suburb? Send us your postcode, as nearby areas can usually
              still be booked.
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
            <h2>What's Different About Fridges in Western Sydney</h2>
            <p>
              Western Sydney is hotter than the coast and full of big families, big homes and
              busy food businesses. That shapes the fridge problems we see.
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
            Heat tip: keep a gap of a few centimetres behind and above the fridge, clean the coil
            at the back once or twice a year, and avoid a fridge in direct sun. That alone can
            cut how hard it works in summer.
          </p>
        </div>
      </section>

      <section className="section section--alt" id="problems">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Common Faults</p>
            <h2>Fridge Problems We Fix Across Western Sydney</h2>
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
            <h2>Brands We Repair in Western Sydney</h2>
            <p>
              We repair most makes found in Western Sydney homes, plus commercial equipment such
              as Bromic, Skope, Williams, True and Husky.
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
            <h2>Commercial Fridge and Coolroom Repairs for Western Sydney Businesses</h2>
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
            <h2>Fridge Repair Cost in Western Sydney</h2>
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

      <section className="section" id="western-sydney-faq">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>FAQ</p>
            <h2>Fridge Repairs Western Sydney FAQs</h2>
          </div>

          <div className="accordion faq__accordion">
            {westernSydneyFaqs.map((item, i) => (
              <AccordionItem key={item.q} title={item.q} defaultOpen={i === 0}>
                <p>{item.a}</p>
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>

      <section className="section--dark section" id="western-sydney-cta">
        <div className="container">
          <div className="section-head section-head--center">
            <h2>Book a Fridge Repair in Western Sydney</h2>
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
