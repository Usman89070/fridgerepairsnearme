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

const CANONICAL_URL = "https://fridgerepairsnearme.com.au/fridge-repairs/northern-beaches/";

const trustPoints = [
  { icon: ClockIcon, label: "Same-day visits where availability allows" },
  { icon: ShieldIcon, label: "ARCtick licensed technician" },
  { icon: WrenchIcon, label: `${callOutFee} call-out, fixed quote first` },
  { icon: CheckIcon, label: `${warrantyPeriod} warranty on parts and labour` },
];

const suburbAreas = [
  { area: "Manly and the southern beaches", suburbs: "Manly, Fairlight, Balgowlah, Balgowlah Heights, North Balgowlah, Manly Vale, Seaforth, Clontarf, Allambie Heights, Beacon Hill, Queenscliff" },
  { area: "Central beaches", suburbs: "Freshwater, Curl Curl, North Curl Curl, Harbord, Brookvale, Dee Why, Narraweena, Cromer, Collaroy, Collaroy Plateau, Narrabeen, Warriewood" },
  { area: "Hills and bushland", suburbs: "Frenchs Forest, Belrose, Forestville, Killarney Heights, Davidson, Terrey Hills, Elanora Heights" },
  { area: "Pittwater and the northern beaches", suburbs: "Mona Vale, Newport, Bilgola, Avalon Beach, Clareville, Bayview, Church Point, Whale Beach, Palm Beach" },
];

const housingRows = [
  { where: "Beachfront homes and apartments (Manly, Dee Why, Collaroy, Narrabeen, Palm Beach)", problem: "Salt air corrodes condenser coils, fans and electrical contacts, so fridges run hotter and fail sooner", fix: "Clean and treat the coil, replace corroded parts, and show you how to keep the back of the fridge clean" },
  { where: "Holiday homes (Palm Beach, Whale Beach, Pittwater)", problem: "Fridges that sit unused for weeks, then fail when switched on, or run in humid, unventilated kitchens", fix: "Check the seals, drain and sealed system, and advise before you stock it" },
  { where: "Premium and integrated kitchens (Newport, Avalon, Bilgola, Clareville)", problem: "Built-in and integrated fridges with specialist parts", fix: "Careful diagnosis, minimal panel removal, and we quote the whole job" },
  { where: "Hills and bushland homes (Belrose, Frenchs Forest, Terrey Hills, Elanora Heights)", problem: "Large family fridges and second fridges in hot garages", fix: "Check ventilation and the sealed system, and advise honestly on age" },
  { where: "Cafes, clubs and pubs (Manly Corso, Dee Why, Mona Vale, Avalon, Brookvale)", problem: "Fridges and coolrooms that work flat out in summer, with salt air making it worse", fix: "Fast diagnosis to protect stock" },
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
    text: "Under-bench, upright and prep fridges and freezers on the Corso, in Dee Why, Mona Vale, Avalon and along Pittwater Road. When a fridge fails mid-service we focus on keeping your stock safe.",
    href: "/#commercial",
    label: "See commercial fridge repairs →",
  },
  {
    icon: DropletIcon,
    title: "Pubs, Clubs and Shops",
    text: "Bar fridges, keg fridges, display and glass-door fridges for pubs, surf clubs, delis and bottle shops.",
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

const northernBeachesFaqs = [
  {
    q: "Do you offer same-day fridge repairs on the Northern Beaches?",
    a: "Same-day visits may be available depending on your suburb and the day's bookings. Travel between the lower beaches and the Pittwater peninsula can take time, so we'll give you a realistic window for your suburb when you call rather than just promising \"today\".",
  },
  {
    q: "Which Northern Beaches suburbs do you cover?",
    a: "All of them, from Manly, Fairlight and Seaforth to Dee Why, Narrabeen, Mona Vale, Avalon and Palm Beach, plus Frenchs Forest, Belrose and Terrey Hills. Send us your postcode if you're not sure.",
  },
  {
    q: "How much does a fridge repair cost on the Northern Beaches?",
    a: "As a general guide, most repairs cost between $150 and $650, and compressor or gas work can reach $700 to $1,500 or more. Prices vary and change over time; we quote after diagnosis.",
  },
  {
    q: "Does salt air damage fridges near the beach?",
    a: "It can. Salt in the air corrodes condenser coils, fans and electrical contacts, so fridges in beachside suburbs can run hotter and fail earlier. Keeping the back of the fridge clean and well ventilated helps.",
  },
  {
    q: "Do you repair integrated and built-in fridges?",
    a: "Yes. We work on integrated and freestanding fridges from Miele, Smeg, ILVE, Bosch, Liebherr, Fisher & Paykel and others, taking care of panels and cabinetry.",
  },
  {
    q: "My holiday home fridge won't start after being switched off. Can you help?",
    a: "Yes. Fridges left off or idle for weeks can develop seal, drain or sealed-system problems, and it's better to have it checked before you load it with food.",
  },
  {
    q: "Do you repair commercial fridges for cafes, pubs and clubs?",
    a: "Yes. We repair under-bench, upright, display, keg and prep fridges, and coolrooms, and we prioritise breakdowns where stock is at risk.",
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
    name: "Fridge Repairs Northern Beaches",
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
      { "@type": "ListItem", position: 3, name: "Northern Beaches", item: CANONICAL_URL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: northernBeachesFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export default function NorthernBeachesPage() {
  usePageSeo({
    title: "Fridge Repairs Northern Beaches | Local Technician",
    description:
      "Fridge repairs across the Northern Beaches, from Manly and Dee Why to Mona Vale and Avalon. Local technician, fixed quote before any work starts.",
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
            <p className="eyebrow eyebrow--light">Northern Beaches</p>
            <h1>Fridge Repairs on the Northern Beaches: Local Technician</h1>
            <p className="hero__lede">
              Fridge gone warm in Manly, Dee Why, Mona Vale or Avalon? We repair fridges, freezers
              and commercial refrigeration across the Northern Beaches, from Balgowlah and
              Seaforth to Palm Beach, for homes, apartments, cafes and clubs.
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
            <h2>How Fast Can You Get to the Northern Beaches?</h2>
          </div>

          <div className="card highlight-card">
            <p>
              Same-day visits may be available depending on your suburb and the day's bookings.
              Travel between the lower beaches and the Pittwater peninsula can take time, so
              when you call we'll give you a realistic window for your suburb, not just "today".
              If the fridge is full of food or stock, tell us and we'll prioritise it where
              possible. See our{" "}
              <a href="/same-day-fridge-repair-sydney/">same-day fridge repair page</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="suburbs">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Coverage</p>
            <h2>Suburbs We Cover on the Northern Beaches</h2>
            <p>
              We cover the whole Northern Beaches, from Manly in the south to Palm Beach in the
              north. Don't see your suburb? Send us your postcode, as nearby areas can usually
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
            <h2>What's Different About Fridges on the Northern Beaches</h2>
            <p>
              Coastal living is hard on appliances, and the Northern Beaches has some of the
              saltiest air in Sydney.
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
            Tip for beachside kitchens: wipe down the back and sides of the fridge, vacuum the
            grille and keep a gap behind it. A clean condenser and good airflow cut the damage
            from salt and heat.
          </p>
        </div>
      </section>

      <section className="section section--alt" id="problems">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Common Faults</p>
            <h2>Fridge Problems We Fix Across the Northern Beaches</h2>
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
            <h2>Brands We Repair on the Northern Beaches</h2>
            <p>
              We repair most makes found in Northern Beaches homes, plus bar and commercial
              equipment such as Vintec, Bromic, Skope, Williams and True.
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
            <h2>Commercial Fridge and Coolroom Repairs for Northern Beaches Businesses</h2>
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
            <h2>Fridge Repair Cost on the Northern Beaches</h2>
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

      <section className="section" id="northern-beaches-faq">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>FAQ</p>
            <h2>Fridge Repairs Northern Beaches FAQs</h2>
          </div>

          <div className="accordion faq__accordion">
            {northernBeachesFaqs.map((item, i) => (
              <AccordionItem key={item.q} title={item.q} defaultOpen={i === 0}>
                <p>{item.a}</p>
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>

      <section className="section--dark section" id="northern-beaches-cta">
        <div className="container">
          <div className="section-head section-head--center">
            <h2>Book a Fridge Repair on the Northern Beaches</h2>
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
