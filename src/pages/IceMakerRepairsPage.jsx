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
  AlertIcon,
  ClockIcon,
  SnowflakeIcon,
} from "../components/Icons";
import AccordionItem from "../components/Accordion";

const CANONICAL_URL = "https://fridgerepairsnearme.com.au/ice-maker-repairs-sydney/";

const trustPoints = [
  { icon: SnowflakeIcon, label: "Ice makers, water dispensers & filter housings repaired" },
  { icon: ClockIcon, label: "Same-day appointments where available" },
  { icon: WrenchIcon, label: `${callOutFee} call-out, fixed quote first` },
  { icon: ShieldIcon, label: "ARCtick licensed technician" },
  { icon: CheckIcon, label: `${warrantyPeriod} warranty on parts and labour` },
];

const warningSigns = [
  "The ice maker isn't making ice, or the bin stays empty",
  "Ice is small, hollow or stuck together in a solid lump",
  "Ice tastes or smells bad, or looks cloudy or discoloured",
  "The water dispenser is slow, weak, or doesn't dispense at all",
  "Water leaks at the front of the fridge, inside the freezer or under the unit",
  "Ice has frozen around the ice maker or the fill tube",
  "The ice maker is noisy, grinding or clicking without producing ice",
  "The dispenser lever or chute is jammed",
  "The filter light is on or the filter needs replacing",
  "The ice maker works, but the freezer isn't cold enough",
];

const iceMakerFaults = [
  "Ice maker assembly failure: the motor, heater, ejector or sensor inside the unit stops working",
  "Faulty water inlet valve: the part that lets water into the fridge gets blocked, worn or fails electrically",
  "Frozen fill tube: the small tube that delivers water to the ice maker freezes shut",
  "Faulty temperature sensor or thermostat: the freezer isn't staying cold enough to make ice",
  "Control board faults: the electronics don't tell the ice maker to run",
  "Ice clumping: ice melts and refreezes into a block, often because of a temperature or defrost issue",
  "Jammed ice mould or auger: the ice can't leave the bin or the dispenser chute",
];

const dispenserFaults = [
  "Clogged or old water filter: low flow and cloudy water are common signs",
  "Faulty dispenser switch or actuator: the lever doesn't send the signal",
  "Blocked or frozen water line: water can't reach the dispenser",
  "Failed inlet valve: no water enters the system",
  "Low water pressure from the household supply",
  "Control board and sensor faults: the dispenser doesn't respond",
];

const faultRows = [
  { symptom: "No ice at all", cause: "Ice maker switched off, or the bin arm is up", fix: "Switch it on and lower the arm" },
  { symptom: "No ice, no water either", cause: "Water supply tap off, kinked line or failed inlet valve", fix: "Open the tap, free the line, replace the valve" },
  { symptom: "Little or tiny ice cubes", cause: "Clogged filter or low water pressure", fix: "Replace the filter, check pressure" },
  { symptom: "Ice maker runs but no ice", cause: "Frozen fill tube or failed inlet valve", fix: "Thaw the tube, replace the valve" },
  { symptom: "Freezer not cold enough", cause: "Thermostat, sensor, fan or defrost fault", fix: "Repair the freezer fault" },
  { symptom: "Ice clumps together", cause: "Temperature swings, door left ajar, ice melting and refreezing", fix: "Fix temperature or defrost problem" },
  { symptom: "Ice tastes bad", cause: "Old filter, dirty bin or stale ice", fix: "Replace the filter, clean the bin, discard old ice" },
  { symptom: "Leaking water", cause: "Loose fitting, cracked tube or blocked drain", fix: "Tighten, replace or clear" },
  { symptom: "Ice maker makes noise but no ice", cause: "Failed motor or ejector", fix: "Replace the ice maker assembly" },
];

const quickChecks = [
  "Check the ice maker is switched on. Lower the wire arm or turn the switch to \"on\".",
  "Check the freezer temperature. Ice needs a cold freezer, around −18°C.",
  "Check the water supply tap behind or beside the fridge is fully open.",
  "Look for kinks in the water line if you can see it, and make sure the fridge isn't squashing it.",
  "Check the water filter. If it's over six months old, it may be clogged.",
  "Check the door is closing fully. A door left ajar lets in warm air and melts ice.",
  "Clear any ice clumps from the bin and the chute.",
  "Wait a day. After a new install, a filter change or a reset, it can take up to 24 hours to produce the first batch of ice.",
];

const partsReplaced = [
  "Ice maker assemblies and ice moulds",
  "Water inlet valves",
  "Water filter housings and filters",
  "Dispenser switches and actuators",
  "Fill tubes and water lines",
  "Ice bins, augers and chutes",
  "Temperature sensors and thermostats",
  "Control boards",
];

const howItWorks = [
  "Request a quote: tell us the brand, model and what's happening.",
  "Fast booking: same-day appointments across Sydney where available.",
  "Diagnosis: we test the ice maker, water valve, filter, line, sensors and freezer temperature to find the real cause.",
  "Plain-English explanation: we show you what's wrong.",
  "Upfront quote: you approve the price before any work begins.",
  "Repair: most faults are fixed in one visit using parts from the van.",
  "Test: we run the dispenser, check for leaks and confirm the ice maker cycles correctly.",
];

const maintenanceTips = [
  "Replace the water filter about every six months",
  "Use the ice regularly, as old ice picks up odours",
  "Empty and clean the ice bin every few months",
  "Keep the freezer at −18°C",
  "Don't overfill the freezer or block the air vents",
  "Check the water line isn't kinked or squashed when you move the fridge",
  "Wipe the dispenser area to prevent build-up and mould",
  "Check for small leaks early",
];

const iceMakerFaqs = [
  {
    q: "Why is my fridge ice maker not making ice?",
    a: "Common causes include a switched-off ice maker, a clogged filter, a closed water tap, a frozen fill tube, a failed inlet valve or a freezer that isn't cold enough. A technician can test each one.",
  },
  {
    q: "How much does fridge ice maker repair cost in Sydney?",
    a: `The cost depends on the fault, the brand and the parts. Our call-out fee is ${callOutFee} incl. GST, and we give you an upfront quote before any repair begins.`,
  },
  {
    q: "Why is my fridge water dispenser not working?",
    a: "Most often it's a clogged filter, a blocked or frozen water line, a failed inlet valve, a faulty dispenser switch or low water pressure.",
  },
  {
    q: "Why is my ice maker leaking?",
    a: "Leaks usually come from a loose fitting, a cracked tube, a worn valve, a blocked drain or ice build-up. Switch off the water supply if the leak is heavy, and call us.",
  },
  {
    q: "How often should I replace the fridge water filter?",
    a: "About every six months, or when the filter light comes on. Replace it sooner if the water flow slows or tastes different.",
  },
  {
    q: "Why is the ice in my fridge small or hollow?",
    a: "Small or hollow cubes usually mean low water pressure, a clogged filter or a partly blocked inlet valve.",
  },
  {
    q: "Why does ice clump together?",
    a: "Ice clumps when it melts and refreezes. This can happen with temperature swings, a door left ajar, or an ice maker that's cycling too often.",
  },
  {
    q: "Can you repair a Samsung or LG fridge ice maker?",
    a: "Yes. We repair ice makers and water dispensers in most major brands, including Samsung, LG, Fisher & Paykel, Westinghouse and Electrolux.",
  },
  {
    q: "Is it safe to use the ice if the fridge has been faulty?",
    a: "If ice has melted and refrozen, or tastes or smells unusual, we recommend throwing it out, cleaning the bin and replacing the filter. When in doubt, throw it out.",
  },
  {
    q: "Do I need a plumber or a fridge technician?",
    a: "If the problem is inside the fridge, such as the valve, ice maker or filter housing, we can fix it. If the household tap or pipework is the cause, a licensed plumber may be needed. We'll tell you honestly.",
  },
  {
    q: "How long does an ice maker repair take?",
    a: "Most repairs take one to two hours on site. If a part must be ordered, we'll let you know the timeframe.",
  },
  {
    q: "Do you offer same-day ice maker repair in Sydney?",
    a: "Same-day appointments may be available depending on your suburb and the day's bookings. Tell us when you enquire and we'll confirm honestly.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Fridge ice maker and water dispenser repair",
    name: "Ice Maker Repairs Sydney",
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
      { "@type": "ListItem", position: 2, name: "Ice Maker Repairs Sydney", item: CANONICAL_URL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: iceMakerFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export default function IceMakerRepairsPage() {
  usePageSeo({
    title: "Fridge Ice Maker Repair Sydney – Water Dispensers Too",
    description:
      "Fridge ice maker not making ice or water dispenser not working? We fix fridge ice makers across Sydney. Upfront quotes, same-day help and warranty.",
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
            <p className="eyebrow eyebrow--light">Ice Makers &amp; Water Dispensers</p>
            <h1>Fridge Ice Maker Repair Sydney: Fix Ice Makers and Water Dispensers Fast</h1>
            <p className="hero__lede">
              You reach for ice on a hot day and the bin is empty. Or you press the water
              dispenser and nothing comes out. We get you back to cold water and plenty of ice.
            </p>
            <p className="hero__sub">
              We send licensed technicians to homes across Greater Sydney to repair ice makers,
              water dispensers, water filters and the water lines that feed them. We find the
              real cause, explain it in plain English and give you an upfront price before we
              start.
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
            <h2>Signs Your Fridge Ice Maker or Water Dispenser Needs Repair</h2>
            <p>Call us if you notice any of these:</p>
          </div>

          <div className="card highlight-card">
            <ul className="cost__list">
              {warningSigns.map((s) => <li key={s}><AlertIcon style={{ color: "var(--amber-600)" }} /> {s}</li>)}
            </ul>
          </div>

          <p className="hub-suburbs__note">
            A leaking ice maker or water line should be fixed quickly. Water can damage floors
            and cabinetry, and a frozen-over freezer can affect food.
          </p>
        </div>
      </section>

      <section className="section section--alt" id="what-we-fix">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>What We Fix</p>
            <h2>Fridge Ice Maker Repair in Sydney: What We Fix</h2>
            <p>Our technicians handle the full ice and water system, including:</p>
          </div>

          <div className="grid grid-2">
            <div className="card highlight-card">
              <h3>Ice Maker Faults</h3>
              <ul className="cost__list">
                {iceMakerFaults.map((f) => <li key={f}><CheckIcon /> {f}</li>)}
              </ul>
            </div>
            <div className="card highlight-card">
              <h3>Water Dispenser Faults</h3>
              <ul className="cost__list">
                {dispenserFaults.map((f) => <li key={f}><CheckIcon /> {f}</li>)}
              </ul>
            </div>
          </div>

          <p className="hub-suburbs__note">
            <strong>Water filter replacement:</strong> fridge water filters should be replaced
            about every six months, or when the filter light comes on. We replace filters and
            check the housing for leaks, then help you restart the system properly.
          </p>
          <p className="hub-suburbs__note">
            <strong>Leaks:</strong> leaking ice makers and dispensers are often caused by loose
            fittings, cracked tubes, worn valves, blocked drains or ice build-up. We find the
            source, fix it and test the system.
          </p>
        </div>
      </section>

      <section className="section" id="faults">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Common Causes</p>
            <h2>Why Is My Fridge Ice Maker Not Making Ice?</h2>
            <p>Here are the causes we see most, from simplest to most serious:</p>
          </div>

          <div className="data-table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Symptom</th>
                  <th>Likely cause</th>
                  <th>What fixes it</th>
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
        </div>
      </section>

      <section className="section section--alt" id="quick-checks">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Before You Call</p>
            <h2>Quick Checks Before You Call</h2>
            <p>These simple steps solve some problems, and help us diagnose faster:</p>
          </div>

          <div className="card highlight-card">
            <ol className="regas__steps">
              {quickChecks.map((s) => <li key={s}>{s}</li>)}
            </ol>
          </div>

          <p className="hub-suburbs__note">
            After changing a filter, run several litres of water through the dispenser to flush
            out air, and discard the first few batches of ice.
          </p>
          <p className="hub-suburbs__note">
            If these steps don't help, please don't dismantle the fridge. Electrical faults can
            be dangerous, and refrigerant work legally requires an ARCtick-licensed technician.
          </p>
        </div>
      </section>

      <section className="section" id="parts">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Parts We Replace</p>
            <h2>Ice Maker Parts We Replace</h2>
          </div>

          <div className="card highlight-card">
            <ul className="cost__list">
              {partsReplaced.map((p) => <li key={p}><CheckIcon /> {p}</li>)}
            </ul>
          </div>

          <p className="hub-suburbs__note">
            We use genuine or quality compatible parts. If a part must be ordered, we tell you
            the timeframe up front.
          </p>
        </div>
      </section>

      <section className="section section--alt" id="plumbing">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Water Line &amp; Plumbing</p>
            <h2>What About the Water Line and Plumbing?</h2>
          </div>

          <div className="card highlight-card">
            <p>
              Most of the problems we find are inside the fridge. But sometimes the cause is in
              the household plumbing, such as a closed tap, low water pressure or a damaged
              pipe. If the issue is in your home's plumbing, a licensed plumber may be needed,
              and we'll tell you so honestly. We can check the fridge side and show you where the
              fault lies, so you don't pay for work you don't need.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="how-it-works">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>How It Works</p>
            <h2>How Our Ice Maker Repair Service Works</h2>
          </div>

          <div className="card highlight-card">
            <ol className="regas__steps">
              {howItWorks.map((s) => <li key={s}>{s}</li>)}
            </ol>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="repair-or-replace">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Repair or Replace</p>
            <h2>Ice Maker Repair or Replace?</h2>
            <p>
              Repairing is usually the better choice. A faulty ice maker or water valve is a
              small part of a much larger fridge. As a general rule:
            </p>
          </div>

          <div className="card highlight-card">
            <ul className="cost__list">
              <li><CheckIcon /> <strong>Repair</strong> if the fridge is under about 8 to 10 years old and the fault is in the ice, water or filter system.</li>
              <li><CheckIcon /> <strong>Think carefully</strong> if the fridge is old and also has cooling or compressor problems.</li>
              <li><CheckIcon /> <strong>Replace</strong> only if the fridge itself has major faults, not just the ice maker.</li>
            </ul>
          </div>

          <p className="hub-suburbs__note">We'll give you honest advice, even if that means saying a repair isn't worth it.</p>
        </div>
      </section>

      <section className="section" id="maintenance">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Maintenance</p>
            <h2>Keep Your Ice and Water System Healthy</h2>
          </div>

          <div className="card highlight-card">
            <ul className="cost__list">
              {maintenanceTips.map((t) => <li key={t}><CheckIcon /> {t}</li>)}
            </ul>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="areas">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Service Areas</p>
            <h2>Ice Maker and Water Dispenser Repairs Across Sydney</h2>
            <p>We provide fridge ice maker repair across 8 Sydney regions:</p>
            <p>
              Inner West · Western Sydney · North Shore · Northern Beaches · Eastern Suburbs ·
              Sydney CBD · St George · Sutherland Shire
            </p>
            <p><a href="/fridge-repairs/">See all suburbs we service →</a></p>
          </div>
        </div>
      </section>

      <section className="section" id="brands">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Brands</p>
            <h2>Brands We Repair</h2>
            <p>We repair ice makers and water dispensers in most major fridge brands, including:</p>
          </div>

          <div className="brands__grid" style={{ justifyContent: "center" }}>
            {brands.map((b) => (
              <span className="brands__chip" key={b}>{b}</span>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" id="related">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Related Services</p>
            <h2>French Door &amp; Side-by-Side Fridge Repairs</h2>
            <p>
              Ice makers and water dispensers are most common in French door, side-by-side and
              bottom-mount fridges. See our{" "}
              <a href="/domestic-fridge-repairs-sydney/">domestic fridge repairs page</a> for the
              full range of faults we fix on these models.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="ice-faq">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>FAQ</p>
            <h2>Frequently Asked Questions</h2>
          </div>

          <div className="accordion faq__accordion">
            {iceMakerFaqs.map((item, i) => (
              <AccordionItem key={item.q} title={item.q} defaultOpen={i === 0}>
                <p>{item.a}</p>
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>

      <section className="section--dark section" id="ice-cta">
        <div className="container">
          <div className="section-head section-head--center">
            <h2>Book Your Fridge Ice Maker Repair in Sydney Today</h2>
            <p>Don't wait for another hot day with an empty ice bin. Request a quote or email us now.</p>
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
