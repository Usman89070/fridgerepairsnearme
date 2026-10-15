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

const CANONICAL_URL = "https://fridgerepairsnearme.com.au/fridge-repairs/strathfield/";

const trustPoints = [
  { icon: ClockIcon, label: "Same-day visits where availability allows" },
  { icon: ShieldIcon, label: "ARCtick licensed technician" },
  { icon: WrenchIcon, label: `${callOutFee} call-out, fixed quote first` },
  { icon: CheckIcon, label: `${warrantyPeriod} warranty on parts and labour` },
];

const homeCards = [
  {
    icon: BuildingIcon,
    title: "Big family homes off Redmyre Road and The Boulevarde",
    text: "Strathfield still has a lot of large older houses on generous blocks. They tend to have one oversized French door or side-by-side fridge in the main kitchen and a second, older fridge running in the garage or a back room. The big one usually fails at the ice maker, water valve or control board. The old one usually fails because it has simply been running for 15 years.",
    tip: "Tell us the brand and model of both fridges when you book.",
  },
  {
    icon: DropletIcon,
    title: "Apartments around the station and Strathfield Plaza",
    text: "The streets around the station have the suburb's apartments. Built-in fridges sit in tight cabinetry with little air around them, so they run hot and wear out their fans and compressors early. Access is its own job: lifts, strata rules and basement parking.",
    tip: "Send us your building name and any lift booking rules.",
  },
  {
    icon: WrenchIcon,
    title: "Rentals and student units in North Strathfield, Strathfield South and Belfield",
    text: "With rentals the person who calls us is often not the person who pays. We write the quote so it can go straight to your agent or landlord, and we say clearly what is a repair and what is just a fridge that has reached the end of its life.",
    tip: "Ask for a written quote to forward to your agent.",
  },
];

const faultCards = [
  { symptom: "Ice maker stopped or the dispenser is dripping", check: "Water inlet valve, a kinked or frozen supply line, and the filter", href: "/ice-maker-repairs-sydney/" },
  { symptom: "Fridge section warm, freezer still cold", check: "Evaporator fan, defrost system and the air damper between the two", href: "/domestic-fridge-repairs-sydney/#symptoms" },
  { symptom: "Water pooling under the fridge", check: "Blocked defrost drain, door seal and the water line behind the fridge", href: "/domestic-fridge-repairs-sydney/#symptoms" },
  { symptom: "Display flashing an error code", check: "Control board and temperature sensors, read against the model's fault codes", href: "/domestic-fridge-repairs-sydney/" },
  { symptom: "Garage fridge icing up through summer", check: "Door seal, defrost heater and whether the fridge is coping with the heat", href: "/domestic-fridge-repairs-sydney/" },
  { symptom: "Fridge running all the time", check: "Condenser coil, fan blade and the compressor's start components", href: "/#regas" },
];

const foodCards = [
  {
    icon: BuildingIcon,
    title: "Restaurants, bakeries and bubble tea shops",
    text: "The food strips around the station and Albert Road run fridges and freezers from early morning to late night. We aim to diagnose fast so you know whether you need to move stock, and we book repairs outside the rush where we can.",
    href: "/#commercial",
    label: "See commercial fridge repairs →",
  },
  {
    icon: DropletIcon,
    title: "Grocers and takeaway shops",
    text: "Display fridges, drink cabinets, ice cream freezers and upright freezers that sit open to customers all day. Door seals, fans and thermostats cause most of the faults.",
    href: "/display-fridge-repairs-sydney/",
    label: "See display fridge repairs →",
  },
  {
    icon: BuildingIcon,
    title: "Suppliers, caterers and wholesalers",
    text: "Homebush, Flemington and Lidcombe have food businesses where a coolroom going down puts a day's deliveries at risk. We check condensers, evaporators and airflow as well as the controls.",
    href: "/#commercial",
    label: "See coolroom repairs →",
  },
];

const coverage = [
  { area: "Strathfield and the station area", suburbs: "Strathfield, Strathfield Plaza, Redmyre Road, The Boulevarde, Albert Road" },
  { area: "Next door", suburbs: "North Strathfield, Strathfield South, Homebush, Homebush West, Burwood, Belfield, Enfield, Flemington" },
  { area: "Short drive", suburbs: "Concord, Croydon, Croydon Park, Lidcombe, Auburn, Newington, Silverwater, Greenacre" },
];

const costRows = [
  { job: "Call-out and diagnosis", range: "$150 – $250" },
  { job: "Door seal replacement", range: "$200 – $400" },
  { job: "Water inlet valve or ice maker part", range: "$250 – $550" },
  { job: "Fan, thermostat or sensor", range: "$250 – $500" },
  { job: "Control board or defrost heater", range: "$300 – $650" },
  { job: "Compressor or gas leak repair with regas", range: "$700 – $1,500+" },
];

const beforeWeArrive = [
  "The brand and model number, from the label inside the door or on the back. For a large French door fridge this decides which board and valve we bring.",
  "Whether the fridge is built in or free-standing, and how much gap there is at the sides.",
  "Any building rules: strata approval, lift booking, loading dock times or visitor parking.",
  "For a business, what is in the fridge and how long it can sit warm. We will tell you on the phone if it needs to move.",
];

const strathfieldFaqs = [
  {
    q: "Can you fix my fridge today in Strathfield?",
    a: "Possibly. Same-day visits depend on the day's bookings and are easier to arrange the earlier you call. If the fridge is full of food, say so when you book and we will try to prioritise it.",
  },
  {
    q: "What do you charge to look at a fridge in Strathfield?",
    a: `The call-out is ${callOutFee}. After we diagnose the fault you get a fixed quote, and nothing is done until you agree. As a general Sydney market guide, most repairs fall between $150 and $650, and compressor or gas work can reach $700 to $1,500 or more.`,
  },
  {
    q: "My ice maker has stopped and water is leaking from the dispenser. What is wrong?",
    a: "The usual suspects are a faulty water inlet valve, a frozen or kinked supply line and a clogged filter. Turn off the water supply to the fridge if it is dripping and call us with the model number.",
  },
  {
    q: "I have two fridges, a new one inside and an old one in the garage. Is the old one worth fixing?",
    a: "Often not. A garage fridge works hardest in summer and is usually the oldest. If it is over 10 years old and the fault is in the sealed system, replacing it is normally cheaper. A new seal, fan or thermostat on a fridge that is otherwise sound is worth doing.",
  },
  {
    q: "Do you work in apartments near Strathfield station?",
    a: "Yes. Give us the building name and tell us about lift bookings, strata approval and where we can park. We sort the access first so the visit is not wasted.",
  },
  {
    q: "Can you look at a coolroom in Homebush or Flemington?",
    a: "Yes. We repair walk-in coolrooms and freezer rooms, including condensing units and evaporators. Call early if stock is at risk so we can plan the visit around it.",
  },
  {
    q: "Which suburbs do you cover around Strathfield?",
    a: "Strathfield, North Strathfield, Strathfield South, Homebush, Homebush West, Burwood, Belfield, Enfield and Flemington, with short drives to Concord, Croydon, Lidcombe, Auburn and Greenacre. Send your postcode if you are unsure.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${CANONICAL_URL}#service`,
    serviceType: "Fridge repair",
    name: "Fridge Repairs Strathfield",
    description:
      "On-site fridge, freezer and commercial refrigeration repairs in Strathfield NSW 2135 and nearby Inner West suburbs, with a fixed quote before any work starts.",
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
        name: "Strathfield NSW 2135",
        geo: { "@type": "GeoCoordinates", latitude: -33.873, longitude: 151.094 },
      },
      ...coverage
        .flatMap((a) => a.suburbs.split(", "))
        .filter((s) => !["Strathfield", "Strathfield Plaza", "Redmyre Road", "The Boulevarde", "Albert Road"].includes(s))
        .map((s) => ({ "@type": "City", name: s })),
    ],
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: "Fridge repair services in Strathfield",
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
      { "@type": "ListItem", position: 3, name: "Strathfield", item: CANONICAL_URL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: strathfieldFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export default function StrathfieldPage() {
  usePageSeo({
    title: `Fridge Repairs Strathfield | ${callOutFee} Call-Out, Same-Day Help`,
    description: `Fridge not cooling in Strathfield? Local technician, ${callOutFee} call-out, same-day visits where available, fixed quote first and a ${warrantyPeriod} warranty on parts.`,
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
            <p className="eyebrow eyebrow--light">Strathfield NSW 2135</p>
            <h1>Fridge Repairs in Strathfield: Local Technician, Fixed Quote First</h1>
            <p className="hero__lede">
              Big French door fridge with a dead ice maker, a second fridge in the garage that
              has stopped cooling, or a coolroom in Homebush that cannot afford a day off? We
              repair domestic and commercial refrigeration in Strathfield and the suburbs around
              the station.
            </p>
            <p className="hero__sub">
              You get a fixed quote before any work starts, and we tell you plainly when a
              repair is not worth it.
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
            <h2>Fridge Repairs Strathfield: The Short Version</h2>
          </div>

          <div className="card highlight-card">
            <p>
              We fix fridges, freezers, ice makers and coolrooms in Strathfield, North
              Strathfield, Strathfield South, Homebush and Burwood. The call-out is {callOutFee},
              you get a fixed quote after diagnosis, and completed repairs carry a{" "}
              {warrantyPeriod} warranty on parts and labour. Strathfield is a suburb of large
              older homes with apartments around the station, so a lot of our work here is on
              oversized French door fridges, second fridges in garages, and food businesses
              near the station and in Homebush. Need it fast? Read our{" "}
              <a href="/same-day-fridge-repair-sydney/">same-day fridge repair page</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="local">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Around Strathfield</p>
            <h2>Three Kinds of Strathfield Fridge Job</h2>
            <p>
              At the 2021 Census Strathfield had about 25,900 residents, at roughly 3,950 people
              per square kilometre. That is more spread out than most of the Inner West, and it
              shows in the fridges.
            </p>
          </div>

          <div className="grid grid-3">
            {homeCards.map(({ icon: Icon, title, text, tip }) => (
              <div className="card domestic__card" key={title}>
                <span className="icon-badge"><Icon /></span>
                <h3>{title}</h3>
                <p>{text}</p>
                <p style={{ marginTop: 10 }}><strong>Tip:</strong> {tip}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="problems">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>What We Check</p>
            <h2>Symptoms We See Most in Strathfield</h2>
          </div>

          <div className="grid grid-3">
            {faultCards.map((f) => (
              <div className="card domestic__card" key={f.symptom}>
                <h3>{f.symptom}</h3>
                <p><strong>We check:</strong> {f.check}</p>
                <p style={{ marginTop: 10 }}><a href={f.href}>More on this fault →</a></p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" id="commercial">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Food Businesses</p>
            <h2>Commercial Refrigeration Around the Station, Albert Road and Homebush</h2>
          </div>

          <div className="grid grid-3">
            {foodCards.map(({ icon: Icon, title, text, href, label }) => (
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

      <section className="section" id="suburbs">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Where We Go</p>
            <h2>Strathfield and Nearby Suburbs We Service</h2>
            <p>Not on the list? Send your postcode, as nearby areas can usually still be booked.</p>
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
                {coverage.map((r) => (
                  <tr key={r.area}>
                    <td>{r.area}</td>
                    <td>{r.suburbs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="hub-suburbs__note">
            Next door: <a href="/fridge-repairs/burwood/">Burwood fridge repairs</a> or{" "}
            <a href="/fridge-repairs/">all Sydney areas we service →</a>
          </p>
        </div>
      </section>

      <section className="section section--alt" id="brands">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Brands</p>
            <h2>Large Fridges and Family Brands We Work On</h2>
            <p>
              Strathfield homes run a lot of large Samsung, LG, Fisher &amp; Paykel and
              Westinghouse fridges, plus commercial brands such as Bromic, Skope, Williams and
              True in the shops.
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

      <section className="section cost" id="cost">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Pricing</p>
            <h2>What a Fridge Repair Costs in Strathfield</h2>
            <p>The job decides the price. As a general Sydney market guide:</p>
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
            General Sydney market guide, not our prices, and prices change. Our call-out is{" "}
            {callOutFee} incl. GST and your exact price is quoted after diagnosis.{" "}
            <a href="/#cost">See our fridge repair cost guide →</a>
          </p>
        </div>
      </section>

      <section className="section section--alt" id="booking">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Booking</p>
            <h2>What to Have Ready When You Call</h2>
          </div>

          <div className="card highlight-card">
            <ul className="regas__steps">
              {beforeWeArrive.map((s) => <li key={s}>{s}</li>)}
            </ul>
            <p style={{ marginTop: 14 }}>
              Then it goes like this: we diagnose on site, you get a fixed price, and we only
              start if you say yes. Most faults are fixed on the same visit when the part is on
              the van, and we check the fridge is holding temperature before we leave.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="repair-or-replace">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Repair or Replace</p>
            <h2>Is Your Big Fridge Worth Fixing?</h2>
          </div>

          <div className="card highlight-card">
            <p>
              A large French door or side-by-side fridge costs a lot to replace, so a repair on
              the ice maker, fan, board or seal is usually worth it while the fridge is under
              about 8 years old. A garage fridge that is 12 years old with a failing compressor
              is a different story, and we will say so. Read more on whether to{" "}
              <a href="/blog">repair or replace your fridge</a>.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="strathfield-faq">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>FAQ</p>
            <h2>Fridge Repairs Strathfield: Your Questions</h2>
          </div>

          <div className="accordion faq__accordion">
            {strathfieldFaqs.map((item, i) => (
              <AccordionItem key={item.q} title={item.q} defaultOpen={i === 0}>
                <p>{item.a}</p>
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>

      <section className="section--dark section" id="strathfield-cta">
        <div className="container">
          <div className="section-head section-head--center">
            <h2>Book a Fridge Repair in Strathfield</h2>
            <p>
              Send us the brand and model, what it is doing and your address or building. We
              will find the fault and give you a fixed quote before we start.
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
