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
  AlertIcon,
  ClockIcon,
  FridgeIcon,
  BuildingIcon,
  SnowflakeIcon,
} from "../components/Icons";
import AccordionItem from "../components/Accordion";

const CANONICAL_URL = "https://fridgerepairsnearme.com.au/display-fridge-repairs-sydney/";

const trustPoints = [
  { icon: FridgeIcon, label: "Glass-door, drinks, deli, bar & display freezer repairs" },
  { icon: ClockIcon, label: "Same-day appointments where available" },
  { icon: WrenchIcon, label: `${callOutFee} call-out, fixed quote first` },
  { icon: ShieldIcon, label: "ARCtick licensed technician" },
  { icon: CheckIcon, label: `${warrantyPeriod} warranty on parts and labour` },
];

const warningSigns = [
  "Drinks or food not cold enough — the display reads above 5°C, or products feel warm",
  "Foggy or sweating glass that hides your products",
  "Ice or frost on the back wall or evaporator coil",
  "Doors that don't close properly, or a door that stays open",
  "Torn or loose door seals",
  "Lights flickering or out — LED strips, drivers or switches have failed",
  "A noisy compressor or fan: buzzing, rattling or grinding",
  "Water leaking onto the floor or pooling underneath",
  "The compressor never switches off, and the power bill is climbing",
  "A blank or incorrect temperature display, or error codes on a digital controller",
];

const whatWeFix = [
  {
    icon: FridgeIcon,
    title: "Glass-Door Fridge Repair",
    text: "Cooling faults, fan motors, door closers and hinges, door gaskets, heater wires that stop glass fogging, thermostats, controllers and lighting.",
  },
  {
    icon: FridgeIcon,
    title: "Drinks & Beverage Fridge Repair",
    text: "Single, double and triple-door drinks fridge units, bottle coolers and slim-line cabinets, so your products stay cold during the rush.",
  },
  {
    icon: FridgeIcon,
    title: "Deli, Cake & Serve-Over Display Repair",
    text: "Cooling faults, humidity and misting problems, lighting, fans and sliding or hinged glass on deli counters and patisserie cabinets.",
  },
  {
    icon: SnowflakeIcon,
    title: "Open Multideck & Grab-and-Go Displays",
    text: "Weak airflow, blocked coils, fan failures, defrost issues and controller faults on open-front displays and grab-and-go cabinets.",
  },
  {
    icon: BuildingIcon,
    title: "Bar Fridge Repairs",
    text: "Cooling problems, noisy compressors, door seals, lights and controllers for back-bar and under-counter units in pubs, clubs and venues.",
  },
  {
    icon: SnowflakeIcon,
    title: "Display Freezers & Ice Cream Cabinets",
    text: "Defrost faults, iced evaporators, failing compressors and temperature drift in upright and chest display freezers.",
  },
  {
    icon: FridgeIcon,
    title: "Wine & Specialty Fridges",
    text: "Cooling, thermostat and sensor faults, and fan problems. See our dedicated wine fridge repairs page.",
    href: "/wine-fridge-repairs-sydney/",
    label: "Wine fridge repairs →",
  },
];

const faultRows = [
  { symptom: "Display fridge not cooling", cause: "Dirty condenser, failed fan, faulty thermostat, low refrigerant", fix: "Clean condenser, replace fan or sensor, find leak" },
  { symptom: "Warm at the top, cold at the bottom", cause: "Blocked airflow or overloaded shelves", fix: "Clear vents, rebalance stock, check fans" },
  { symptom: "Glass fogging or sweating", cause: "Worn seal, door left ajar, failed glass heater, high humidity", fix: "Replace seal or heater wire, adjust door" },
  { symptom: "Ice on the back wall", cause: "Defrost fault or door leaks", fix: "Replace defrost heater, timer or sensor" },
  { symptom: "Door won't close or stays open", cause: "Worn hinge, damaged closer, warped door", fix: "Replace hinge or closer, align door" },
  { symptom: "Lights flickering or dead", cause: "Failed LED strip, driver or switch", fix: "Replace LED, driver or switch" },
  { symptom: "Loud buzzing or rattling", cause: "Fan motor, loose part or compressor stress", fix: "Replace fan motor, secure parts" },
  { symptom: "Water pooling under the cabinet", cause: "Blocked drain or full drip tray", fix: "Clear drain, repair tray or heater" },
  { symptom: "Compressor runs constantly", cause: "Dirty coils, hot room, worn seal, low gas", fix: "Clean coils, improve ventilation, repair leak" },
  { symptom: "Controller error or blank display", cause: "Faulty sensor or control board", fix: "Replace sensor or board" },
];

const protectReasons = [
  "Stock loss: perishable items must be kept at 5°C or below under the Food Standards Code, and warm stock can mean throwing product out",
  "Lost sales: drinks that aren't cold don't sell, and a fogged-up display hides your products",
  "Food safety inspections: a cabinet that can't hold temperature can put you at risk during a council inspection",
  "Higher power bills: dirty coils and leaky seals make the fridge run harder",
  "Bigger repair costs: minor faults grow into compressor failures if left",
];

const whoWeHelp = [
  { biz: "Cafés and restaurants", equip: "Display cabinets, drinks fridges, bar fridges", matters: "Fixing before the morning or lunch rush" },
  { biz: "Bottle shops and pubs", equip: "Glass-door beer coolers, back-bar fridges", matters: "Cold drinks and minimal downtime" },
  { biz: "Convenience stores and supermarkets", equip: "Multidecks, glass-door fridges, display freezers", matters: "Protecting stock and clear displays" },
  { biz: "Delis and butchers", equip: "Serve-over displays, deli cabinets", matters: "Steady temperatures and clean glass" },
  { biz: "Bakeries and patisseries", equip: "Cake displays, pastry cabinets", matters: "Humidity and visual appeal" },
  { biz: "Hotels and function venues", equip: "Bar fridges, minibars, drinks coolers", matters: "Reliable cooling during events" },
  { biz: "Gyms, offices and clinics", equip: "Drinks fridges, display coolers", matters: "Quiet, tidy repairs" },
];

const howItWorks = [
  "Request a quote: tell us the brand, type of cabinet and what's happening.",
  "Fast booking: same-day appointments across Sydney where available.",
  "Diagnosis: we test temperatures, airflow, fans, seals, lights, controllers and the refrigerant circuit to find the real cause.",
  "Clear explanation: we show you the fault and your options.",
  "Upfront quote: you approve the price before any work begins.",
  "Repair: most faults are fixed on site using parts from the van.",
  "Test and tips: we confirm the cabinet is cold, the doors seal and the lights work before we leave.",
];

const whileYouWait = [
  "Keep the doors closed as much as possible",
  "Check the plug, power point and circuit breaker",
  "Move high-risk products (dairy, meat, cakes) to another working fridge",
  "Measure the temperature with a probe thermometer",
  "Don't overstock shelves or block air vents",
  "Clear dust from the front grille if you can reach it safely",
  "Don't keep turning the cabinet on and off",
];

const maintenanceTips = [
  "Clean the condenser coils every few months, and more often in dusty or greasy places",
  "Wipe door seals weekly and check for tears",
  "Leave space around the cabinet for airflow",
  "Don't overload shelves, and keep products away from the back wall",
  "Keep it out of direct sun and away from ovens and fryers",
  "Clean the glass with a soft cloth and non-abrasive cleaner",
  "Book a regular service, especially before summer",
];

const displayFaqs = [
  {
    q: "How much do display fridge repairs cost in Sydney?",
    a: `The price depends on the cabinet, the fault and the parts. Our call-out fee is ${callOutFee} incl. GST, and we give you an upfront quote before any repair begins.`,
  },
  {
    q: "Do you repair glass-door fridges?",
    a: "Yes. We repair glass-door fridges for cooling faults, fans, seals, hinges, glass heaters, lights and controllers.",
  },
  {
    q: "Why is my display fridge not cooling?",
    a: "Common causes include dirty condenser coils, a failed fan, a worn door seal, a faulty thermostat, a blocked evaporator or low refrigerant. A technician can test each one.",
  },
  {
    q: "Why does the glass on my display fridge fog up?",
    a: "Foggy glass usually points to a worn seal, a door left open, a failed glass heater, or very humid conditions. A technician can find the cause.",
  },
  {
    q: "Can you repair a bar fridge?",
    a: "Yes. We repair back-bar, under-counter and drinks fridges for pubs, clubs, restaurants and venues.",
  },
  {
    q: "Do you offer same-day display fridge repair?",
    a: "Often, yes. Same-day appointments may be available depending on your suburb and the day's bookings — tell us when you enquire and we'll confirm honestly.",
  },
  {
    q: "Can you replace a cracked fridge door glass?",
    a: "We can advise on the best option. Cracked glass can be unsafe, so keep customers away from it, and we'll help you work out a safe repair or replacement.",
  },
  {
    q: "How often should a display fridge be serviced?",
    a: "For busy businesses, every three to six months. Lighter use may need only a yearly service.",
  },
  {
    q: "What temperature should a display fridge be?",
    a: "Refrigerated food should be kept at 5°C or below. Many businesses aim for 3–4°C. Always follow your food safety plan.",
  },
  {
    q: "Are your technicians licensed?",
    a: "Yes. Our refrigeration technicians hold an ARCtick refrigerant handling licence, which is required by law for work on refrigerant gas.",
  },
  {
    q: "Do you service all of Sydney?",
    a: "We cover Greater Sydney. Send us your suburb or postcode and we'll confirm availability.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Display, glass-door and bar fridge repair",
    name: "Display Fridge Repairs Sydney",
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
      { "@type": "ListItem", position: 2, name: "Display Fridge Repairs Sydney", item: CANONICAL_URL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: displayFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export default function DisplayFridgeRepairsPage() {
  usePageSeo({
    title: "Display Fridge Repairs Sydney – Fast Glass-Door Fix",
    description:
      "Display fridge repairs in Sydney for cafes, shops and bars. Glass-door, drinks and bar fridges fixed fast. Upfront quotes, same-day help and a warranty.",
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
            <p className="eyebrow eyebrow--light">Display & Commercial Fridges</p>
            <h1>Display Fridge Repairs Sydney: Fast Fixes for Glass-Door, Drinks and Bar Fridges</h1>
            <p className="hero__lede">
              Your display fridge is a salesperson that never stops working. When the glass fogs
              up, the lights go out or the drinks go warm, customers walk past and stock is at
              risk. We get your cabinet cold, clear and looking its best again, with as little
              disruption to trading as possible.
            </p>
            <p className="hero__sub">
              We send licensed refrigeration technicians to cafés, restaurants, bottle shops,
              convenience stores, delis, bakeries, pubs and venues across Greater Sydney, and we
              explain the fault in plain English before any work starts.
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

      <section className="section" id="signs">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Warning Signs</p>
            <h2>Is Your Display Fridge Giving You Warning Signs?</h2>
            <p>
              Display fridges work harder than most. The doors open all day, the lights run
              non-stop and the cabinet sits in a warm shopfront. Call us if you notice:
            </p>
          </div>

          <div className="card highlight-card">
            <ul className="cost__list">
              {warningSigns.map((s) => <li key={s}><AlertIcon style={{ color: "var(--amber-600)" }} /> {s}</li>)}
            </ul>
          </div>

          <p className="hub-suburbs__note">
            Small faults rarely stay small. A worn seal or a weak fan can become a failed
            compressor, and a warm cabinet can mean wasted stock and a failed food inspection.
          </p>
        </div>
      </section>

      <section className="section section--alt" id="what-we-fix">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>What We Fix</p>
            <h2>Display Fridge Repairs in Sydney: What We Fix</h2>
            <p>We repair the equipment that keeps your products cold and on show.</p>
          </div>

          <div className="grid grid-3">
            {whatWeFix.map(({ icon: Icon, title, text, href, label }) => (
              <div className="card domestic__card" key={title}>
                <span className="icon-badge"><Icon /></span>
                <h3>{title}</h3>
                <p>{text}</p>
                {href && <p style={{ marginTop: 10 }}><a href={href}>{label}</a></p>}
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section" id="faults">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Common Faults</p>
            <h2>Common Display Fridge Faults and How We Fix Them</h2>
          </div>

          <div className="data-table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Symptom</th>
                  <th>Likely cause</th>
                  <th>Typical repair</th>
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
            If glass is cracked or smashed, we can advise on the safest next step and help you
            arrange a glass replacement where needed.
          </p>
        </div>
      </section>

      <section className="section section--alt" id="why-prompt">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Why It Matters</p>
            <h2>Why Prompt Display Fridge Repair Protects Your Business</h2>
            <p>Display fridges aren't just equipment. They affect your profit, your reputation and your compliance.</p>
          </div>

          <div className="card highlight-card">
            <ul className="cost__list">
              {protectReasons.map((t) => <li key={t}><CheckIcon /> {t}</li>)}
            </ul>
          </div>

          <p className="hub-suburbs__note">Quick, early repairs almost always cost less than a replacement.</p>
        </div>
      </section>

      <section className="section" id="who-we-help">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Who We Help</p>
            <h2>Who We Help Across Sydney</h2>
          </div>

          <div className="data-table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Business</th>
                  <th>Typical equipment</th>
                  <th>What matters most</th>
                </tr>
              </thead>
              <tbody>
                {whoWeHelp.map((r) => (
                  <tr key={r.biz}>
                    <td>{r.biz}</td>
                    <td>{r.equip}</td>
                    <td>{r.matters}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="how-it-works">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>How It Works</p>
            <h2>How Our Display Fridge Repair Service Works</h2>
          </div>

          <div className="card highlight-card">
            <ol className="regas__steps">
              {howItWorks.map((s) => <li key={s}>{s}</li>)}
            </ol>
          </div>

          <p className="hub-suburbs__note">
            If a part must be ordered, we tell you the timeframe and how to protect your stock in
            the meantime.
          </p>
        </div>
      </section>

      <section className="section" id="while-you-wait">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>While You Wait</p>
            <h2>What To Do While You Wait</h2>
          </div>

          <div className="card highlight-card">
            <ul className="cost__list">
              {whileYouWait.map((t) => <li key={t}><CheckIcon /> {t}</li>)}
            </ul>
          </div>

          <p className="hub-suburbs__note">
            Please don't dismantle the cabinet or touch refrigerant lines. Gas handling legally
            needs an ARCtick-licensed technician.
          </p>
        </div>
      </section>

      <section className="section section--alt" id="maintenance">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Maintenance</p>
            <h2>Keep Your Display Fridge Running Longer</h2>
            <p>A little care goes a long way:</p>
          </div>

          <div className="card highlight-card">
            <ul className="cost__list">
              {maintenanceTips.map((t) => <li key={t}><CheckIcon /> {t}</li>)}
            </ul>
          </div>

          <p className="hub-suburbs__note">For busy venues, a service every three to six months can prevent most breakdowns.</p>
        </div>
      </section>

      <section className="section" id="repair-or-replace">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Repair or Replace</p>
            <h2>Repair or Replace Your Display Fridge?</h2>
          </div>

          <div className="card highlight-card">
            <ul className="cost__list">
              <li><CheckIcon /> <strong>Repair</strong> if the cabinet is under about 8 to 10 years old and the repair costs less than half the price of a comparable new one.</li>
              <li><CheckIcon /> <strong>Replace</strong> if it is very old, has a failed compressor, is rusted or damaged, or keeps breaking down.</li>
              <li><CheckIcon /> <strong>Consider energy use.</strong> Older cabinets can use much more power than newer, efficient models.</li>
            </ul>
          </div>

          <p className="hub-suburbs__note">We'll give you honest advice, even if that means saying a repair isn't worth it.</p>
        </div>
      </section>

      <section className="section section--alt" id="areas">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Service Areas</p>
            <h2>Display Fridge Repairs Across Sydney</h2>
            <p>We provide display fridge repairs across 8 Sydney regions:</p>
            <p>
              Inner West · Western Sydney · North Shore · Northern Beaches · Eastern Suburbs ·
              Sydney CBD · St George · Sutherland Shire
            </p>
            <p><a href="/fridge-repairs/">See all suburbs we service →</a></p>
          </div>
        </div>
      </section>

      <section className="section" id="commercial">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Related Services</p>
            <h2>Commercial Refrigeration &amp; Coolroom Repairs</h2>
            <p>
              Display fridges are often part of a bigger commercial refrigeration setup. See our{" "}
              <a href="/#commercial">commercial fridge and coolroom repairs</a> for prep fridges,
              underbench units and walk-in coolrooms.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="display-faq">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>FAQ</p>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="accordion faq__accordion">
            {displayFaqs.map((item, i) => (
              <AccordionItem key={item.q} title={item.q} defaultOpen={i === 0}>
                <p>{item.a}</p>
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>

      <section className="section--dark section" id="display-cta">
        <div className="container">
          <div className="section-head section-head--center">
            <h2>Book Your Display Fridge Repair in Sydney Today</h2>
            <p>Don't let a faulty cabinet cost you sales. Request a quote or email us now.</p>
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
