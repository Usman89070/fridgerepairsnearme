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

const CANONICAL_URL = "https://fridgerepairsnearme.com.au/fridge-repairs/sutherland-shire/";

const trustPoints = [
  { icon: ClockIcon, label: "Same-day visits where availability allows" },
  { icon: ShieldIcon, label: "ARCtick licensed technician" },
  { icon: WrenchIcon, label: `${callOutFee} call-out, fixed quote first` },
  { icon: CheckIcon, label: `${warrantyPeriod} warranty on parts and labour` },
];

const suburbAreas = [
  { area: "Sutherland and the centre", suburbs: "Sutherland, Kirrawee, Gymea, Gymea Bay, Miranda, Jannali, Kareela, Sylvania, Sylvania Waters, Taren Point, Caringbah, Caringbah South" },
  { area: "Cronulla and the coast", suburbs: "Cronulla, Woolooware, Burraneer, Greenhills Beach, Kurnell, Dolans Bay, Port Hacking, Lilli Pilli, Grays Point, Yowie Bay" },
  { area: "Georges River and Woronora", suburbs: "Como, Oyster Bay, Bonnet Bay, Kangaroo Point, Illawong, Alfords Point, Woronora, Woronora Heights, Bangor, Menai, Barden Ridge, Lucas Heights" },
  { area: "South and the National Park", suburbs: "Engadine, Yarrawarrah, Loftus, Heathcote, Waterfall, Bundeena, Maianbar" },
];

const housingRows = [
  { where: "Beachside homes (Cronulla, Greenhills Beach, Kurnell, Burraneer)", problem: "Salt air corrodes condenser coils, fans and electrical contacts, so fridges run hotter and fail sooner", fix: "Clean and treat the coil, replace corroded parts, and show you how to keep the back of the fridge clean" },
  { where: "Waterfront and canal homes (Sylvania Waters, Dolans Bay, Port Hacking, Oyster Bay, Woronora)", problem: "Humid air and second fridges in boat sheds and garages", fix: "Check ventilation and the sealed system, and advise honestly on age" },
  { where: "Bushland family homes (Engadine, Menai, Illawong, Heathcote, Barden Ridge)", problem: "Large French door and side-by-side fridges, ice makers and water filters, plus fridges in hot garages", fix: "Check the water line, drain and sealed system" },
  { where: "Older homes and units (Sutherland, Miranda, Caringbah, Gymea)", problem: "Older fridges and freezers running past their best, often as a second fridge", fix: "Diagnose before replacing" },
  { where: "Cafes, clubs and food shops (Cronulla, Kirrawee, Miranda, Caringbah, Taren Point)", problem: "Fridges and coolrooms that run all day, plus fish, bakery and butcher cabinets", fix: "Fast diagnosis to protect stock" },
];

const problemRows = [
  { problem: "Fridge not cooling", cause: "Failed fan, dirty or corroded condenser, faulty thermostat or sensor", href: "/domestic-fridge-repairs-sydney/#symptoms", label: "Fridge not cooling" },
  { problem: "Fridge leaking water", cause: "Blocked defrost drain or damaged door seal", href: "/domestic-fridge-repairs-sydney/#symptoms", label: "Fridge leaking water" },
  { problem: "Freezer iced up or not freezing", cause: "Defrost heater, thermostat or fan fault", href: "/domestic-fridge-repairs-sydney/", label: "Freezer repairs" },
  { problem: "Noisy fridge", cause: "Fan blade or compressor mount issue", href: "/domestic-fridge-repairs-sydney/", label: "Domestic fridge repairs" },
  { problem: "Gas leak or low refrigerant", cause: "A leak in the sealed system", href: "/#regas", label: "Fridge regas" },
];

const commercialCards = [
  {
    icon: BuildingIcon,
    title: "Cafes and Restaurants",
    text: "Under-bench, upright and prep fridges and freezers around Cronulla, Kirrawee, Miranda and Caringbah. When a fridge fails mid-service we focus on keeping your stock safe.",
    href: "/#commercial",
    label: "See commercial fridge repairs →",
  },
  {
    icon: DropletIcon,
    title: "Fish Shops, Bakeries and Butchers",
    text: "Display and glass-door fridges, serve-over cabinets and cold rooms for food shops.",
    href: "/display-fridge-repairs-sydney/",
    label: "See display fridge repairs →",
  },
  {
    icon: BuildingIcon,
    title: "Clubs, Clinics and Industrial Sites",
    text: "Bar fridges, coolrooms for clubs and caterers, medical fridges around Caringbah and Sutherland, and sites at Taren Point and Kirrawee.",
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

const sutherlandShireFaqs = [
  {
    q: "Do you offer same-day fridge repairs in the Sutherland Shire?",
    a: "Same-day visits may be available depending on your suburb and the day's bookings. The Shire sits south of the Georges River, so traffic on the bridges and the Princes Highway can affect arrival times — we'll give you a realistic window for your suburb when you call.",
  },
  {
    q: "Which Sutherland Shire suburbs do you cover?",
    a: "All of them, from Sutherland, Miranda and Caringbah to Cronulla, Menai, Engadine and Heathcote, plus Bundeena. Send us your postcode if you're not sure.",
  },
  {
    q: "How much does a fridge repair cost in the Sutherland Shire?",
    a: "As a general guide, most repairs cost between $150 and $650, and compressor or gas work can reach $700 to $1,500 or more. Prices vary and change over time; we quote after diagnosis.",
  },
  {
    q: "Does salt air damage fridges near the beach?",
    a: "It can. Salt in the air corrodes condenser coils, fans and electrical contacts, so fridges in Cronulla, Kurnell and other coastal suburbs can run hotter and fail earlier. Keeping the back of the fridge clean and well ventilated helps.",
  },
  {
    q: "Can you repair a fridge in a garage or boat shed?",
    a: "Yes. Second fridges in hot garages and boat sheds often run harder than they should. We check ventilation and the sealed system, and tell you if the fridge is worth repairing.",
  },
  {
    q: "Do you repair fridges with ice makers and water filters?",
    a: "Yes. We repair ice makers, water lines, filters and drains on French door and side-by-side fridges.",
  },
  {
    q: "Do you repair commercial fridges for cafes, clubs and food shops?",
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
    name: "Fridge Repairs Sutherland Shire",
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
      { "@type": "ListItem", position: 3, name: "Sutherland Shire", item: CANONICAL_URL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: sutherlandShireFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export default function SutherlandShirePage() {
  usePageSeo({
    title: "Fridge Repairs Sutherland Shire | Local Technician",
    description:
      "Fridge repairs across the Sutherland Shire, from Cronulla and Miranda to Menai and Engadine. Local technician, fixed quote before any work starts.",
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
            <p className="eyebrow eyebrow--light">Sutherland Shire</p>
            <h1>Fridge Repairs in the Sutherland Shire: Local Technician</h1>
            <p className="hero__lede">
              Fridge gone warm in Cronulla, Miranda, Caringbah or Engadine? We repair fridges,
              freezers and commercial refrigeration across the Sutherland Shire, from Kurnell and
              Cronulla to Heathcote and Waterfall, for homes, cafes, clubs and food shops.
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
            <h2>How Fast Can You Get to the Sutherland Shire?</h2>
          </div>

          <div className="card highlight-card">
            <p>
              Same-day visits may be available depending on your suburb and the day's bookings.
              The Shire sits south of the Georges River, so traffic on the bridges and the
              Princes Highway can affect arrival times — when you call we'll give you a realistic
              window for your suburb. If the fridge is full of food or stock, tell us and we'll
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
            <h2>Suburbs We Cover in the Sutherland Shire</h2>
            <p>
              We cover the whole Shire, from Sutherland in the centre to Cronulla on the coast and
              Heathcote in the south. Don't see your suburb? Send us your postcode, as nearby
              areas can usually still be booked.
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
            Remote suburbs: Bundeena and Maianbar are across Port Hacking and reached via the
            Royal National Park or the Cronulla ferry, so tell us when you call and we'll plan
            the trip.
          </p>
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
            <h2>What's Different About Fridges in the Sutherland Shire</h2>
            <p>
              The Shire is mostly houses, with beaches, rivers and bushland all close by. That
              shapes the fridge problems we see.
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
        </div>
      </section>

      <section className="section section--alt" id="problems">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Common Faults</p>
            <h2>Fridge Problems We Fix Across the Sutherland Shire</h2>
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
            <h2>Brands We Repair in the Sutherland Shire</h2>
            <p>
              We repair most makes found in Shire homes, plus commercial equipment such as
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
            <h2>Commercial Fridge and Coolroom Repairs for Shire Businesses</h2>
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
            <h2>Fridge Repair Cost in the Sutherland Shire</h2>
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

      <section className="section" id="sutherland-faq">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>FAQ</p>
            <h2>Fridge Repairs Sutherland Shire FAQs</h2>
          </div>

          <div className="accordion faq__accordion">
            {sutherlandShireFaqs.map((item, i) => (
              <AccordionItem key={item.q} title={item.q} defaultOpen={i === 0}>
                <p>{item.a}</p>
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>

      <section className="section--dark section" id="sutherland-cta">
        <div className="container">
          <div className="section-head section-head--center">
            <h2>Book a Fridge Repair in the Sutherland Shire</h2>
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
