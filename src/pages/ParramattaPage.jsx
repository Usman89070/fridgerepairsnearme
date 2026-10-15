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

const CANONICAL_URL = "https://fridgerepairsnearme.com.au/fridge-repairs/fridge-repairs-parramatta/";

const trustPoints = [
  { icon: ClockIcon, label: "Same-day visits where availability allows" },
  { icon: ShieldIcon, label: "ARCtick licensed technician" },
  { icon: WrenchIcon, label: `${callOutFee} call-out, fixed quote first` },
  { icon: CheckIcon, label: `${warrantyPeriod} warranty on parts and labour` },
];

const suburbAreas = [
  { area: "Parramatta CBD and Church Street", suburbs: "Parramatta, Parramatta CBD, Church Street, Phillip Street, Westfield Parramatta, Parramatta Park" },
  { area: "Right next door", suburbs: "Harris Park, Granville, Westmead, North Parramatta, Rosehill, Rydalmere, Mays Hill, Wentworthville, Camellia" },
  { area: "A short drive", suburbs: "Merrylands, Auburn, Silverwater, Newington, Telopea, Dundas, Epping, Carlingford, Baulkham Hills" },
];

const towerSteps = [
  "Tell us the tower or complex name and the unit number when you book. We check the building's rules before we set a time.",
  "Book the lift if the building requires it, and ask the building manager about loading dock hours for any large parts.",
  "Clear the space in front of the fridge. In many apartments the fridge sits in a recess with only a few centimetres at each side.",
  "If the unit is a rental, forward our written quote to the agent before the visit so approval is ready.",
];

const hotspots = [
  {
    icon: BuildingIcon,
    title: "Church Street and the CBD",
    text: "Cafes, restaurants and bars along Church Street and the streets off it run under-bench fridges, prep fridges and glass-door drink fridges for long hours. When one fails, we diagnose quickly so you know whether to move stock, and book repairs outside the rush where we can.",
    href: "/#commercial",
    label: "See commercial fridge repairs →",
  },
  {
    icon: DropletIcon,
    title: "Harris Park and Wigram Street",
    text: "Restaurants, sweet shops and grocers in Harris Park depend on display fridges, upright freezers and cool storage that work all day. Door seals, fans and thermostats cause most breakdowns, and most are quick fixes when the part is on the van.",
    href: "/display-fridge-repairs-sydney/",
    label: "See display fridge repairs →",
  },
  {
    icon: ShieldIcon,
    title: "Westmead clinics and pharmacies",
    text: "Small medical, pharmacy and breakroom fridges around the Westmead precinct need a steady temperature. Tell us when you book if the fridge holds medicines, and we will prioritise the job and keep the visit tidy.",
    href: "/#commercial",
    label: "See commercial fridge repairs →",
  },
];

const livingRows = [
  { where: "High-rise apartments in the CBD", job: "Built-in and integrated fridges with little air around them, plus lift and dock bookings", note: "We check airflow as well as the fridge" },
  { where: "Units and townhouses in Harris Park, Granville and Westmead", job: "Shared parking, rentals, and fridges of mixed age", note: "Written quotes you can forward to your agent" },
  { where: "Older houses in North Parramatta, Mays Hill, Rydalmere and Wentworthville", job: "Second fridges in garages and granny flats working hard through summer", note: "Repair or replace advice with the age and cost side by side" },
];

const faultList = [
  { f: "Fridge warm but the light and fan still run", c: "Often a failed evaporator fan, a defrost problem or a blocked air vent" },
  { f: "Freezer frosted over", c: "Defrost heater, defrost thermostat or a door that is not sealing" },
  { f: "Clicking, then silence", c: "Start relay or overload on the compressor, which is cheaper to fix than a new compressor" },
  { f: "Water on the floor", c: "Blocked defrost drain, a split water line or a perished door seal" },
  { f: "Ice maker won't make ice", c: "Water inlet valve, frozen line or the ice maker module" },
];

const costRows = [
  { job: "Call-out and diagnosis", range: "$150 – $250" },
  { job: "Door seal replacement", range: "$200 – $400" },
  { job: "Fan, thermostat or sensor", range: "$250 – $500" },
  { job: "Defrost heater or control board", range: "$300 – $650" },
  { job: "Compressor or gas leak repair with regas", range: "$700 – $1,500+" },
];

const parramattaFaqs = [
  {
    q: "How quickly can someone get to me in Parramatta?",
    a: "Same-day visits may be available depending on the day's bookings. Ring early and mention if the fridge is full of food, and we will try to prioritise it.",
  },
  {
    q: "What does a fridge repair cost in Parramatta?",
    a: `Our call-out is ${callOutFee}, and you get a fixed quote after diagnosis, before any work starts. As a general Sydney market guide, most repairs cost $150 to $650 and compressor or gas work can reach $700 to $1,500 or more.`,
  },
  {
    q: "My unit is in a tower with a lift booking system. Does that matter?",
    a: "It does, and it is easy to sort out first. Give us the building name, lift booking rules and loading dock hours when you book, and we will plan around them so the visit is not wasted.",
  },
  {
    q: "The fridge is clicking but not cooling. What does that mean?",
    a: "It is often the start relay or overload protector on the compressor, which is a small part. Switch the fridge off and call us rather than leaving it running on repeat, as repeated restarts can damage the compressor.",
  },
  {
    q: "Do you fix commercial fridges in Harris Park and along Church Street?",
    a: "Yes. We repair under-bench, upright, prep, display and glass-door fridges, freezers and walk-in coolrooms. Say if stock is at risk and we will treat the job as urgent.",
  },
  {
    q: "Can you look at a fridge that stores medicines?",
    a: "We can repair clinic, pharmacy and breakroom fridges around Westmead. Tell us what the fridge holds when you book so we can prioritise it, and please move anything temperature-sensitive as advised by your own protocols.",
  },
  {
    q: "Is it worth fixing an old fridge?",
    a: "Usually, if it is under about 8 years old and the fault is not the compressor. Over 10 years old with a major fault, replacement is often cheaper, and we will tell you plainly after diagnosis.",
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
              Fridge gone warm in a tower off Church Street, a unit in Harris Park or the prep
              fridge at a restaurant near Westfield? We repair fridges, freezers and commercial
              refrigeration across Parramatta and the suburbs around it.
            </p>
            <p className="hero__sub">
              The price is fixed before we start, and we tell you plainly if a repair is not
              worth doing.
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
            <h2>Fridge Repairs Parramatta in a Nutshell</h2>
          </div>

          <div className="card highlight-card">
            <p>
              We repair domestic and commercial fridges, freezers, ice makers and coolrooms in
              Parramatta, Harris Park, Granville, Westmead and North Parramatta. The call-out is{" "}
              {callOutFee}, the quote is fixed after diagnosis, and repairs carry a{" "}
              {warrantyPeriod} warranty on parts and labour. Parramatta is one of the most
              densely built parts of western Sydney, so apartment access and busy food strips
              shape a lot of our jobs. In a hurry? See our{" "}
              <a href="/same-day-fridge-repair-sydney/">same-day fridge repair page</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="local">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Living in Parramatta</p>
            <h2>How Your Building Changes the Repair</h2>
            <p>
              At the 2021 Census, Parramatta had about 30,200 residents at roughly 5,800 people
              per square kilometre, with a median age of 32. That is a dense, young suburb.
            </p>
          </div>

          <div className="data-table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Where you are</th>
                  <th>What the job looks like</th>
                  <th>How we handle it</th>
                </tr>
              </thead>
              <tbody>
                {livingRows.map((r) => (
                  <tr key={r.where}>
                    <td>{r.where}</td>
                    <td>{r.job}</td>
                    <td>{r.note}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section" id="towers">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Apartment Checklist</p>
            <h2>Booking a Repair in a Parramatta Apartment Tower</h2>
          </div>

          <div className="card highlight-card">
            <ol className="regas__steps">
              {towerSteps.map((s) => <li key={s}>{s}</li>)}
            </ol>
            <p style={{ marginTop: 14 }}>
              Tip: a fridge needs a few centimetres of clear space behind and beside it to shed
              heat. Pushed hard into a recess, it runs hotter and wears its compressor out
              sooner.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="commercial">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Local Businesses</p>
            <h2>Church Street, Harris Park and Westmead: Where We Work</h2>
          </div>

          <div className="grid grid-3">
            {hotspots.map(({ icon: Icon, title, text, href, label }) => (
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

      <section className="section" id="problems">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Symptoms</p>
            <h2>What Your Fridge Is Telling You</h2>
          </div>

          <div className="data-table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>If you notice</th>
                  <th>It is often</th>
                </tr>
              </thead>
              <tbody>
                {faultList.map((r) => (
                  <tr key={r.f}>
                    <td>{r.f}</td>
                    <td>{r.c}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <p className="hub-suburbs__note">
            More detail on our <a href="/domestic-fridge-repairs-sydney/#symptoms">fridge fault guide</a>,{" "}
            <a href="/ice-maker-repairs-sydney/">ice maker repairs</a> and{" "}
            <a href="/#regas">fridge regas</a>.
          </p>
        </div>
      </section>

      <section className="section section--alt" id="suburbs">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Coverage</p>
            <h2>Suburbs Around Parramatta We Cover</h2>
            <p>
              Parramatta sits about 23 km west of the Sydney CBD. If your suburb is not listed,
              send your postcode and we will check.
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
            Further west? See <a href="/fridge-repairs/western-sydney/">Western Sydney fridge repairs</a>{" "}
            or <a href="/fridge-repairs/">all Sydney areas →</a>
          </p>
        </div>
      </section>

      <section className="section" id="brands">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Brands</p>
            <h2>Brands We Repair in Parramatta</h2>
            <p>
              From apartment-size Samsung, LG and Haier fridges to commercial Bromic, Skope,
              Williams and True units and Vintec wine fridges.
            </p>
          </div>

          <div className="brands__grid" style={{ justifyContent: "center" }}>
            {brands.map((b) => (
              <span className="brands__chip" key={b}>{b}</span>
            ))}
          </div>
          <p className="hub-suburbs__note" style={{ textAlign: "center" }}>
            <a href="/#brands">See all brands →</a> and our{" "}
            <a href="/wine-fridge-repairs-sydney/">wine fridge repairs →</a>
          </p>
        </div>
      </section>

      <section className="section cost section--alt" id="cost">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Pricing</p>
            <h2>Parramatta Fridge Repair Prices</h2>
            <p>Every fault is different. As a general Sydney market guide:</p>
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
            General Sydney market guide, not our prices. Our call-out is {callOutFee} incl. GST
            and your exact price is quoted after diagnosis.{" "}
            <a href="/#cost">See our cost guide →</a>
          </p>
        </div>
      </section>

      <section className="section" id="parramatta-faq">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>FAQ</p>
            <h2>Parramatta Fridge Repair Questions</h2>
          </div>

          <div className="accordion faq__accordion">
            {parramattaFaqs.map((item, i) => (
              <AccordionItem key={item.q} title={item.q} defaultOpen={i === 0}>
                <p>{item.a}</p>
              </AccordionItem>
            ))}
          </div>
          <p className="hub-suburbs__note" style={{ textAlign: "center" }}>
            Not sure whether to repair or replace? Read our guide on whether to{" "}
            <a href="/blog">repair or replace your fridge</a>.
          </p>
        </div>
      </section>

      <section className="section--dark section" id="parramatta-cta">
        <div className="container">
          <div className="section-head section-head--center">
            <h2>Get a Fixed Quote in Parramatta</h2>
            <p>
              Tell us the tower or street, the brand and model, and what the fridge is doing.
              We will find the fault and quote before we start.
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
