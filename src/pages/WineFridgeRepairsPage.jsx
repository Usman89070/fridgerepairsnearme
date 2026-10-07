import usePageSeo from "../hooks/usePageSeo";
import {
  enquiryEmail,
  enquiryEmailHref,
  callOutFee,
  warrantyPeriod,
} from "../data/content";
import {
  MailIcon,
  WrenchIcon,
  ShieldIcon,
  CheckIcon,
  SnowflakeIcon,
  FridgeIcon,
  BuildingIcon,
} from "../components/Icons";
import AccordionItem from "../components/Accordion";

const CANONICAL_URL = "https://fridgerepairsnearme.com.au/wine-fridge-repairs-sydney/";

const trustPoints = [
  { icon: SnowflakeIcon, label: "Compressor and thermoelectric wine units" },
  { icon: ShieldIcon, label: "ARCtick licensed technician" },
  { icon: WrenchIcon, label: `${callOutFee} call-out, fixed quote first` },
  { icon: CheckIcon, label: `${warrantyPeriod} warranty on parts and labour` },
];

const faultRows = [
  { symptom: "Wine fridge not cooling", cause: "Failed fan, dirty condenser, faulty thermostat or sensor, or a sealed-system fault", fix: "Replace the fan or sensor, clean the condenser; sealed-system repair if needed" },
  { symptom: "Running too cold or freezing bottles", cause: "Faulty temperature sensor or thermostat, control board fault", fix: "Replace sensor or board and recalibrate" },
  { symptom: "One zone warm, the other fine (dual zone)", cause: "Zone damper or fan fault, sensor on that zone", fix: "Replace the damper, fan or sensor" },
  { symptom: "Compressor running non-stop", cause: "Dirty condenser, poor ventilation, worn door seal, low gas", fix: "Clean, free up airflow, replace the seal; leak repair if gas is low" },
  { symptom: "Water pooling inside or underneath", cause: "Blocked drain, condensation from a torn seal", fix: "Clear the drain, replace the seal" },
  { symptom: "Loud humming, rattling or clicking", cause: "Fan blade hitting ice or dust, loose compressor mounts", fix: "Clear and clean the fan, replace it if worn, re-secure the compressor" },
  { symptom: "Display blank or showing an error", cause: "Control board or keypad fault, power supply", fix: "Reset and test; replace the board if faulty" },
  { symptom: "Door not sealing, frost around the edge", cause: "Perished or warped gasket", fix: "Replace the gasket" },
  { symptom: "Interior light out", cause: "Failed LED or driver", fix: "Replace the light unit" },
];

const brandRows = [
  { brand: "Vintec", models: "V40SGEBK, VWS050SBB, V155SGES3, V190SG2EBK, VWM198PBA-L", repairs: "Temperature sensors, fans, control boards, seals, dual-zone dampers" },
  { brand: "Liebherr", models: "WFbli 5241, WKb and WKt series", repairs: "Compressor faults, door seals, electronic controls" },
  { brand: "EuroCave", models: "Performance, Premium and Revelation series", repairs: "Fans, thermostats, humidity and cooling faults" },
  { brand: "Transtherm", models: "Built-in and freestanding cabinets", repairs: "Thermostats, fans, door seals" },
  { brand: "Fisher & Paykel", models: "Wine cabinets and beverage units", repairs: "Sensors, fans, boards" },
  { brand: "Other brands", models: "Kings Bottle, Husky, Vino Vault, Grand Cru, Schmick, Smeg and more", repairs: "Most faults — check with us" },
];

const repairSteps = [
  "You tell us the symptom and model: a photo of the model label is ideal.",
  "We book a time: we'll confirm the call-out fee before we arrive.",
  "Diagnosis on site: we check temperature at each zone, the sensors, fans, seals, drain and compressor, so we find the cause and not just the symptom.",
  "Fixed quote: you get the price for parts and labour before we start. No surprises, no pressure.",
  "Repair: most faults are fixed on the same visit when the part is on the van.",
  "Test and handover: we run the cabinet until it holds the right temperature and tell you what to watch for.",
];

const careList = [
  "Move bottles somewhere cool and dark. A cupboard on an internal wall is better than the kitchen bench.",
  "Don't leave them in a warm room for days. A short time is fine, but repeated swings damage wine.",
  "Keep corks moist. Bottles on their side are less likely to dry out the cork.",
  "Don't switch the cabinet on and off repeatedly. Let it settle for several hours after power is restored before loading bottles.",
];

const costRows = [
  { job: "Call-out and diagnosis", range: "$150 – $250" },
  { job: "Door seal or gasket replacement", range: "$200 – $400" },
  { job: "Temperature sensor or thermostat", range: "$250 – $450" },
  { job: "Fan replacement", range: "$250 – $450" },
  { job: "Control board or display repair", range: "$300 – $650" },
  { job: "Compressor or sealed-system repair", range: "$700 – $1,500+" },
];

const settingCards = [
  {
    icon: FridgeIcon,
    title: "Home Wine Cabinets",
    text: "Under-bench, freestanding and built-in cabinets in kitchens, butler's pantries and cellars.",
    href: "/domestic-fridge-repairs-sydney/",
    label: "See domestic fridge repairs →",
  },
  {
    icon: BuildingIcon,
    title: "Restaurants and Wine Bars",
    text: "Display wine fridges and under-counter units that run all day and carry stock worth thousands.",
    href: "/#commercial",
    label: "See commercial fridge repairs →",
  },
  {
    icon: SnowflakeIcon,
    title: "Large Cellars and Coolrooms",
    text: "Walk-in wine rooms with a split system or condensing unit. Tell us what you have when you book so we send the right technician.",
    href: "/#commercial",
    label: "See commercial fridge repairs →",
  },
];

const wineFaqs = [
  {
    q: "Why is my wine fridge not cooling?",
    a: "The most common causes are a failed fan, a dirty condenser, a faulty sensor or thermostat, or a worn door seal. In a thermoelectric cooler, the cooling module or its fan may have failed. A sealed-system problem is less common, but a technician needs to test it to confirm.",
  },
  {
    q: "Can a Vintec wine cabinet be repaired?",
    a: "Yes. Vintec cabinets are compressor units and most parts can be replaced, including sensors, fans, control boards, seals and dampers. Have the model number ready, as it helps us bring the right part.",
  },
  {
    q: "How much does wine fridge repair cost in Sydney?",
    a: "As a general market guide, most repairs cost between $250 and $650, and a compressor or sealed-system repair can reach $700 to $1,500 or more. Prices vary and change over time; we quote after diagnosis.",
  },
  {
    q: "Is it worth repairing a wine fridge?",
    a: "For a good compressor cabinet under about 10 years old, usually yes. For a cheap thermoelectric cooler or an old cabinet needing a new compressor, replacement can be cheaper.",
  },
  {
    q: "Why is my wine fridge too cold?",
    a: "A faulty temperature sensor, thermostat or control board is the usual cause. Frozen bottles can burst and ruin wine, so turn the temperature up and call us.",
  },
  {
    q: "What temperature should a wine fridge be?",
    a: "Most wines store well at about 12 to 14°C. Many dual-zone cabinets let you set whites and sparkling cooler and reds a little warmer for serving.",
  },
  {
    q: "Why is my wine fridge leaking water?",
    a: "A blocked drain or a torn door seal letting in warm air that condenses are the usual causes. Both are quick repairs.",
  },
  {
    q: "Do you repair wine fridges for restaurants and bars?",
    a: "Yes. We repair wine fridges and display units for restaurants, bars, cafes and bottle shops across Sydney, and we prioritise commercial breakdowns where stock is at risk.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Wine fridge and wine cabinet repair",
    name: "Wine Fridge Repairs Sydney",
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
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fridgerepairsnearme.com.au/" },
      { "@type": "ListItem", position: 2, name: "Wine Fridge Repairs Sydney", item: CANONICAL_URL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: wineFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export default function WineFridgeRepairsPage() {
  usePageSeo({
    title: "Wine Fridge Repairs Sydney | Vintec & Wine Cabinets",
    description:
      "Wine fridge not cooling or running warm? Sydney repairs for Vintec and other wine cabinets: compressor, thermostat, fan and seal faults, fixed quote first.",
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
            <p className="eyebrow eyebrow--light">Wine Fridge Repairs</p>
            <h1>Wine Fridge Repair in Sydney: Vintec, Wine Cabinets and Coolers</h1>
            <p className="hero__lede">
              If your wine fridge is running warm, freezing the bottles, leaking or making a
              noise it didn't used to, it's worth getting looked at quickly. Wine doesn't cope
              with temperature swings the way food does.
            </p>
            <p className="hero__sub">
              We repair wine fridges, wine cabinets and wine coolers across Sydney, including
              Vintec, Liebherr, EuroCave and Transtherm units, and we'll tell you straight if a
              repair isn't worth the money.
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
            <p className="eyebrow" style={{ justifyContent: "center" }}>Repair or Replace</p>
            <h2>Is My Wine Fridge Worth Repairing?</h2>
          </div>

          <div className="card highlight-card">
            <p>
              Usually yes, if it's a compressor wine cabinet and the fault is a sensor, fan,
              thermostat, seal or control board. Those repairs cost a fraction of a new cabinet.
              It's often not worth it for a cheap thermoelectric cooler, or when the sealed
              system (compressor or gas circuit) has failed on an older unit. Book a diagnosis
              and we'll give you a fixed quote and a straight opinion before any work starts.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="faults">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Common Faults</p>
            <h2>Common Wine Fridge Faults and What Causes Them</h2>
          </div>

          <div className="data-table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>What you notice</th>
                  <th>Likely cause</th>
                  <th>Typical fix</th>
                </tr>
              </thead>
              <tbody>
                {faultRows.map((r) => (
                  <tr key={r.symptom}>
                    <td>{r.symptom}</td>
                    <td>{r.cause}</td>
                    <td>{r.fix}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="hub-suburbs__note">
            Not sure what your symptom means? Our guide to{" "}
            <a href="/domestic-fridge-repairs-sydney/#symptoms">fridge not cooling and leaking water</a>{" "}
            covers the same checks in more detail.
          </p>
        </div>
      </section>

      <section className="section" id="types">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Know Your Fridge</p>
            <h2>Compressor Wine Cabinets vs Thermoelectric Wine Coolers</h2>
            <p>
              The type of wine fridge you own changes what we can fix and whether it's worth it.
              The label on the back or inside the door will tell you the model.
            </p>
          </div>

          <div className="grid grid-2">
            <div className="card domestic__card">
              <h3>Compressor Wine Cabinets</h3>
              <p>
                These work like a normal fridge, with a compressor and refrigerant. Vintec,
                Liebherr, EuroCave and most larger or built-in cabinets are compressor units.
                They hold a steady temperature even in a warm room, they last 10 to 15 years or
                more, and nearly every part can be replaced. Repairs here are usually worthwhile.
              </p>
            </div>
            <div className="card domestic__card">
              <h3>Thermoelectric Wine Coolers</h3>
              <p>
                These use a Peltier plate and fan instead of a compressor. They're quiet and
                vibration-free, but they can only cool a limited amount below the room
                temperature, so they struggle in a hot garage or a Sydney summer. When the
                thermoelectric module fails, the part often costs close to what a new cooler
                does. We'll check before you pay for a repair that doesn't make sense.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="brands">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Brands</p>
            <h2>Brands and Model Numbers We Repair</h2>
            <p>
              The model number is on a sticker inside the cabinet or on the back. Having it
              ready helps us bring the right part on the first visit.
            </p>
          </div>

          <div className="data-table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Brand</th>
                  <th>Model number examples</th>
                  <th>What we commonly repair</th>
                </tr>
              </thead>
              <tbody>
                {brandRows.map((r) => (
                  <tr key={r.brand}>
                    <td>{r.brand}</td>
                    <td>{r.models}</td>
                    <td>{r.repairs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="hub-suburbs__note">
            Under warranty? Your brand's own service line may need to handle the repair. Check
            the warranty first, and if you're not sure we'll tell you whether our work could
            affect it.
          </p>
        </div>
      </section>

      <section className="section" id="process">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>How It Works</p>
            <h2>How We Repair a Wine Fridge</h2>
          </div>

          <div className="card highlight-card">
            <ol className="regas__steps">
              {repairSteps.map((s) => <li key={s}>{s}</li>)}
            </ol>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="care">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Looking After Your Wine</p>
            <h2>Temperature, Humidity and Vibration</h2>
            <p>
              Most wine is happiest stored at roughly 12 to 14°C, with humidity around 50 to
              70%, away from light and constant vibration. While your cabinet is being repaired:
            </p>
          </div>

          <div className="card highlight-card">
            <ul className="cost__list">
              {careList.map((t) => <li key={t}><CheckIcon /> {t}</li>)}
            </ul>
          </div>

          <p className="hub-suburbs__note">If it's valuable wine, tell us on the call so we can prioritise your booking.</p>
        </div>
      </section>

      <section className="section cost" id="cost">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Pricing</p>
            <h2>Wine Fridge Repair Cost in Sydney</h2>
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

      <section className="section" id="repair-or-replace">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Repair or Replace</p>
            <h2>Repair or Replace Your Wine Fridge?</h2>
          </div>

          <div className="card highlight-card">
            <ul className="cost__list">
              <li><CheckIcon /> <strong>Repair it:</strong> a compressor cabinet under about 10 years old with a fault in the sensor, fan, thermostat, board or seal.</li>
              <li><CheckIcon /> <strong>Think hard:</strong> a compressor or sealed-system failure on a cabinet over 10 years old. If the quote is more than about half the price of a comparable new unit, replacement may make more sense.</li>
              <li><CheckIcon /> <strong>Usually replace:</strong> a cheap thermoelectric cooler with a failed module, or a cabinet that's rusted, badly damaged or can no longer be sourced parts for.</li>
            </ul>
          </div>

          <p className="hub-suburbs__note">
            Gas leaks are the most common sealed-system problem. See our{" "}
            <a href="/#regas">fridge regas and gas leak repairs</a>.
          </p>
        </div>
      </section>

      <section className="section section--alt" id="settings">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Homes &amp; Businesses</p>
            <h2>Wine Fridges for Homes, Restaurants and Bars</h2>
          </div>

          <div className="grid grid-3">
            {settingCards.map(({ icon: Icon, title, text, href, label }) => (
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

      <section className="section" id="areas">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Service Areas</p>
            <h2>Wine Fridge Repair Near You in Sydney</h2>
            <p>We repair wine fridges and wine cabinets across 8 Sydney regions:</p>
            <p>
              Inner West · Western Sydney · North Shore · Northern Beaches · Eastern Suburbs ·
              Sydney CBD · St George · Sutherland Shire
            </p>
            <p><a href="/fridge-repairs/">See all suburbs we service →</a></p>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="wine-faq">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>FAQ</p>
            <h2>Wine Fridge Repair Sydney FAQs</h2>
          </div>

          <div className="accordion faq__accordion">
            {wineFaqs.map((item, i) => (
              <AccordionItem key={item.q} title={item.q} defaultOpen={i === 0}>
                <p>{item.a}</p>
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>

      <section className="section--dark section" id="wine-cta">
        <div className="container">
          <div className="section-head section-head--center">
            <h2>Book a Wine Fridge Repair</h2>
            <p>
              Tell us your suburb, the brand and model number, and what the fridge is doing.
              We'll find the real fault and give you a fixed quote before any work starts.
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
