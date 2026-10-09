import usePageSeo from "../hooks/usePageSeo";
import {
  enquiryEmail,
  enquiryEmailHref,
  callOutFee,
  warrantyPeriod,
  domesticTypes,
  brands,
} from "../data/content";
import {
  MailIcon,
  PinIcon,
  WrenchIcon,
  ShieldIcon,
  CheckIcon,
  FridgeIcon,
} from "../components/Icons";
import AccordionItem from "../components/Accordion";

const CANONICAL_URL = "https://fridgerepairsnearme.com.au/domestic-fridge-repairs-sydney/";

const trustPoints = [
  { icon: PinIcon, label: "Repairs at your home, all Sydney regions" },
  { icon: WrenchIcon, label: `${callOutFee} call-out, fixed quote before work` },
  { icon: ShieldIcon, label: "All major household brands" },
  { icon: CheckIcon, label: `${warrantyPeriod} warranty on parts and labour` },
];

const quickChecks = [
  "Power: is the light on? Check the power point, the plug and your switchboard for a tripped safety switch.",
  "Temperature setting: the fresh-food section should be set to 3–4°C and the freezer to around −18°C. Settings can get bumped when cleaning.",
  "Door seal: close the door on a sheet of paper. If it slides out easily, the seal isn't gripping.",
  "Vents and airflow: food pushed against the back wall can block the cold-air vents between the freezer and fridge.",
  "Space behind the fridge: the fridge needs a gap behind and above it to release heat. A dusty condenser or a tight cavity makes it run hot.",
];

const symptomTable = [
  { symptom: "Fridge not cooling, freezer cold", causes: "Evaporator fan, iced-up evaporator (defrost fault), air damper", check: "Make sure vents aren't blocked by food", tech: "No improvement after 2–3 hours" },
  { symptom: "Fridge and freezer both warm", causes: "Condenser fan, start relay, compressor, refrigerant leak, control board", check: "Check power and that the compressor area isn't covered in dust", tech: "The compressor clicks on and off, or is silent" },
  { symptom: "Freezer not freezing", causes: "Defrost heater or sensor, evaporator fan, door seal", check: "Check the freezer door seal and setting", tech: "Ice is building on the back panel" },
  { symptom: "Water leaking inside or on the floor", causes: "Blocked defrost drain, water inlet valve, cracked drain tray", check: "Look for ice blocking the drain hole at the back of the fridge", tech: "Water keeps coming back after cleaning" },
  { symptom: "Ice building up", causes: "Defrost heater, sensor or timer; worn door seal", check: "Check the door closes fully", tech: "Ice returns within days" },
  { symptom: "Loud buzzing, clicking or grinding", causes: "Evaporator or condenser fan motor, start relay, loose panel", check: "Check the fridge is level and not touching the wall", tech: "The noise is new or getting louder" },
  { symptom: "Running constantly", causes: "Dirty condenser, worn seals, sensor fault, low refrigerant", check: "Clean around the back, check seals", tech: "It still runs non-stop after cleaning" },
  { symptom: "Ice maker or water dispenser not working", causes: "Water inlet valve, frozen water line, ice maker module, filter", check: "Replace an old water filter, check the tap behind the fridge", tech: "No water flow with a new filter" },
  { symptom: "Display blank or error code", causes: "Control board, sensor, power supply", check: "Turn off at the wall for 5 minutes, then restart", tech: "The error code returns" },
];

const subFaults = [
  {
    id: "not-cooling",
    title: "Fridge Not Cooling but Freezer Is Cold",
    text: "This is the most common call we get. In most frost-free fridges, cold air is made in the freezer and blown into the fridge section by a fan. If that fan fails, or ice blocks the airway after a defrost fault, the freezer stays cold while the fridge warms up. The compressor is usually fine.",
  },
  {
    id: "leaking",
    title: "Fridge Leaking Water",
    text: "Most leaks come from a blocked defrost drain. Melt water can't escape, so it overflows under the crisper drawers or onto the floor. On plumbed fridges, a faulty water inlet valve or a loose water line is the other common cause. Turn off the water tap behind the fridge until it's checked.",
  },
  {
    id: "noise",
    title: "Fridge Making a Noise",
    text: "A new buzz or grind from the back usually means a fan motor bearing is wearing out, or ice is touching a fan blade. Repeated clicking from the bottom often points to the compressor start relay. Fixing a noisy fan early is cheaper than waiting for it to stop.",
  },
  {
    id: "ice-maker",
    title: "Ice Maker and Water Dispenser Faults",
    text: "Plumbed fridges add a water inlet valve, water lines, a filter and an ice maker module. Each can fail or freeze. A cheap first check is swapping in a new water filter before booking a repair.",
  },
  {
    id: "gas-leak",
    title: "Gas Leaks and Low Refrigerant",
    text: "A fridge doesn't use up gas. If refrigerant is low, there's a leak that has to be found and repaired before regassing.",
    link: { href: "/#regas", label: "See fridge regas and gas leak repairs" },
  },
];

const brandTable = [
  { brand: "Samsung", models: "SRS636SCLS (side-by-side), SRF678CDLS (French door), SRF9300BFH and SRF9700BFH (Family Hub)", repairs: "Ice makers, evaporator fans, ice build-up, error codes" },
  { brand: "LG", models: "GF-L708PL (French door), GF-V910MBL (InstaView), GT-515BPL (top mount)", repairs: "Cooling faults, water dispensers, error codes, inverter compressor checks" },
  { brand: "Fisher & Paykel", models: "RF610ADX5 (Series 7 French door), ActiveSmart range", repairs: "Control modules, sensors, door alarms, defrost faults" },
  { brand: "Westinghouse", models: "WBE5300SC (bottom mount), WHE6000SA (French door), WQE6000SA (four-door)", repairs: "Not cooling, freezing food in the fridge, fans, seals" },
];

const otherBrands = brands.filter((b) => !["Samsung", "LG", "Fisher & Paykel", "Westinghouse"].includes(b));

const visitSteps = [
  { step: "01", title: "Book Online or Email", text: "Tell us the brand, model number, your suburb and what's happening. A photo of the model label helps." },
  { step: "02", title: "We Arrive at Your Home", text: "Response times vary by suburb and technician scheduling on the day." },
  { step: "03", title: "Diagnosis", text: `Call-out ${callOutFee} incl. GST. We test fans, sensors, the defrost system, the compressor circuit and controls to find the real cause.` },
  { step: "04", title: "Fixed Quote", text: "You approve the price before any work starts. If the fridge isn't worth fixing, we'll say so." },
  { step: "05", title: "Repair and Test", text: `We fix it and check it's cooling properly before we leave, backed by our ${warrantyPeriod} warranty. If a part needs ordering, we book a return visit.` },
];

const domesticFaqs = [
  {
    q: "Why is my fridge not cold but the freezer is?",
    a: "In most frost-free fridges, a fan blows cold air from the freezer into the fridge section. If that fan fails, or ice blocks the airway because of a defrost fault, the freezer stays cold but the fridge warms up. It's usually a fan or defrost repair, not the compressor.",
  },
  {
    q: "What temperature should my fridge be?",
    a: "Set the fresh-food section to 3–4°C and the freezer to around −18°C. Food Standards Australia New Zealand advises keeping chilled food at 5°C or colder.",
  },
  {
    q: "Can a fridge be repaired at home?",
    a: "Yes. Almost all household fridge repairs are done on-site in your kitchen, so you don't need to move the fridge. If a part has to be ordered, we come back to fit it.",
  },
  {
    q: "Is it worth fixing a 7-year-old fridge?",
    a: "Often yes, if the fault is a fan, sensor, seal, thermostat or defrost part. With an average lifespan of about 10 years, a 7-year-old fridge usually isn't worth a compressor or major gas-leak repair. Compare the quote with the value of the years it has left.",
  },
  {
    q: "Why is my fridge leaking water?",
    a: "The most common cause is a blocked defrost drain, which makes melt water overflow under the crisper or onto the floor. On plumbed fridges, a faulty water inlet valve or loose water line can also leak.",
  },
  {
    q: "Why is my fridge making a loud noise?",
    a: "New buzzing, grinding or rattling usually comes from a worn fan motor or ice touching a fan blade. Repeated clicking from the bottom of the fridge often points to the compressor start relay.",
  },
  {
    q: "Which fridge brands do you repair?",
    a: "We repair all major household brands in Australia, including Samsung, LG, Fisher & Paykel, Westinghouse, Electrolux, Hisense, Haier, Bosch, Mitsubishi Electric, Kelvinator, Whirlpool, Smeg, Liebherr and Miele.",
  },
  {
    q: "What should I have ready when I book?",
    a: "Your suburb, the fridge brand and model number, what's happening and when it started. A photo of the model label and the problem area helps us bring the right parts the first time.",
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "Service",
    serviceType: "Domestic fridge repair",
    name: "Domestic Fridge Repairs Sydney",
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
      { "@type": "ListItem", position: 2, name: "Domestic Fridge Repairs Sydney", item: CANONICAL_URL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: domesticFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export default function DomesticFridgeRepairsPage() {
  usePageSeo({
    title: "Domestic Fridge Repairs Sydney | All Brands, Home Visits",
    description:
      "Domestic fridge repairs in Sydney for French door, side-by-side, top-mount and integrated fridges. Not cooling, leaking or noisy? Book a technician.",
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
            <p className="eyebrow eyebrow--light">Household Fridges</p>
            <h1>Domestic Fridge Repairs in Sydney</h1>
            <p className="hero__lede">
              Fridge not cooling, leaking, iced up or making a new noise? We carry out domestic
              fridge repairs across Sydney (also called residential or home fridge repairs) at
              your home: French door, side-by-side, top-mount, bottom-mount, integrated and bar
              fridges, from all major brands.
            </p>
            <p className="hero__sub">
              We find the actual fault, give you a fixed quote before any work, and tell you
              honestly if the fridge isn't worth fixing. Same-day appointments may be available
              depending on your suburb and technician scheduling.
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
            <p className="eyebrow" style={{ justifyContent: "center" }}>Quick Checks</p>
            <h2>Fridge Stopped Working? Check These 5 Things First</h2>
            <p>Some "breakdowns" have a simple cause. Before you book, check:</p>
          </div>

          <div className="card highlight-card">
            <ol className="regas__steps">
              {quickChecks.map((c) => <li key={c}>{c}</li>)}
            </ol>
          </div>

          <p className="hub-suburbs__note">
            Still not right after an hour? Book a technician. Leaving a fault usually makes it
            worse and more expensive.
          </p>
        </div>
      </section>

      <section className="section section--alt" id="symptoms">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Diagnosis First</p>
            <h2>Common Domestic Fridge Problems: Symptoms, Causes and What to Do</h2>
            <p>
              The same symptom can have several causes, which is why diagnosis comes before
              parts. This table shows what usually causes each problem in household fridges and
              whether there's anything safe to check yourself.
            </p>
          </div>

          <div className="data-table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Symptom</th>
                  <th>Most likely causes</th>
                  <th>Safe check you can do</th>
                  <th>Needs a technician when…</th>
                </tr>
              </thead>
              <tbody>
                {symptomTable.map((r) => (
                  <tr key={r.symptom}>
                    <td><strong>{r.symptom}</strong></td>
                    <td>{r.causes}</td>
                    <td>{r.check}</td>
                    <td>{r.tech}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="hub-suburbs__note">
            More detail: <a href="#not-cooling">why your fridge isn't cooling</a>.
          </p>

          {subFaults.map((f) => (
            <div className="page-subsection" id={f.id} key={f.id}>
              <h3>{f.title}</h3>
              <p>
                {f.text}{" "}
                {f.link && <a href={f.link.href}>{f.link.label}</a>}
              </p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="types">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Fridge Types</p>
            <h2>Domestic Fridge Types We Repair</h2>
            <p>Each fridge design has its own weak spots. Knowing your type helps us bring the right parts.</p>
          </div>

          <div className="grid grid-3 domestic__grid">
            {domesticTypes.map((type) => (
              <div className="card domestic__card" key={type.title}>
                <span className="icon-badge"><FridgeIcon /></span>
                <h3>{type.title}</h3>
                <p>{type.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--alt" id="brands">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Brand Coverage</p>
            <h2>Household Fridge Brands We Repair</h2>
            <p>
              We repair all major household fridge brands sold in Australia. Here are the models
              we're asked about most. Your model number is on the label inside the fridge,
              usually on a side wall or behind the crisper drawer.
            </p>
          </div>

          <div className="data-table-wrap">
            <table className="data-table">
              <thead>
                <tr>
                  <th>Brand</th>
                  <th>Popular Australian models</th>
                  <th>Things we commonly repair</th>
                </tr>
              </thead>
              <tbody>
                {brandTable.map((r) => (
                  <tr key={r.brand}>
                    <td><strong>{r.brand}</strong></td>
                    <td>{r.models}</td>
                    <td>{r.repairs}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          <p className="hub-suburbs__note">
            We also repair {otherBrands.join(", ")} fridges.{" "}
            <a href="/#brands">See all household fridge brands we repair →</a>
          </p>

          <p className="hub-suburbs__note">
            Fridge still under warranty? Contact the manufacturer or retailer first. Some brands
            cover the sealed system (compressor and gas lines) for longer than the standard
            warranty, and repairs by others may affect a warranty claim.
          </p>
        </div>
      </section>

      <section className="section" id="worth-repairing">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Repair or Replace</p>
            <h2>Is It Worth Repairing Your Fridge?</h2>
            <p>
              Usually yes. Most household fridge faults are a single part such as a fan, sensor,
              seal or defrost component. According to CHOICE, fridges last 6 to 20 years, about
              10 years on average.
            </p>
          </div>

          <div className="card highlight-card">
            <p>
              A simple rule of thumb: divide what the fridge cost new by 10, multiply by the
              years it has left, and compare that number with the repair quote.
            </p>
            <div className="worked-example">
              <strong>Example:</strong> a $2,000 French door fridge that's 4 years old has about
              6 years left: $2,000 ÷ 10 × 6 = $1,200. A $400 fan repair is clearly worth it; a
              $1,400 sealed-system repair probably isn't.
            </div>
            <p>
              Replacement is usually better when an older fridge needs a compressor, has a major
              gas leak, or has had several big faults recently.{" "}
              <a href="#worth">Read more: repair or replace your fridge?</a>
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="visit">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>The Process</p>
            <h2>What to Expect From a Home Fridge Repair Visit</h2>
          </div>

          <div className="process__steps">
            {visitSteps.map((s, i) => (
              <div className="process__step" key={s.step}>
                <div className="process__step-num">{s.step}</div>
                <div className="process__step-body">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
                {i < visitSteps.length - 1 && <span className="process__connector" aria-hidden="true" />}
              </div>
            ))}
          </div>

          <p className="hub-suburbs__note">
            Before we arrive: clear space in front of the fridge, empty the bottom shelves and
            crisper if possible, and keep your receipt or warranty details handy.
          </p>
        </div>
      </section>

      <section className="section" id="food-safety">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>While You Wait</p>
            <h2>Keep Your Food Safe While You Wait</h2>
            <p>
              Keep the doors closed. A closed fridge holds its temperature for a few hours. Food
              Standards Australia New Zealand advises that food between 5°C and 60°C for under 2
              hours can be refrigerated or used; between 2 and 4 hours, use it but don't
              re-refrigerate; over 4 hours, throw it out. Move meat, dairy and leftovers to an
              esky with ice if the repair will take longer.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt cost">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Pricing</p>
            <h2>Domestic Fridge Repair Costs in Sydney</h2>
            <p>
              Most household fridge repairs in Sydney cost a few hundred dollars, depending on
              the part and fridge type.{" "}
              <a href="/#cost">See typical price ranges in our fridge repair cost guide →</a>{" "}
              Our call-out is {callOutFee} incl. GST, and you get a fixed quote before any work.
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="areas">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Service Areas</p>
            <h2>Domestic Fridge Repairs Across Sydney</h2>
            <p>We repair household fridges at homes and apartments across 8 Sydney regions:</p>
            <p>
              Inner West · Western Sydney · North Shore · Northern Beaches · Eastern Suburbs ·
              Sydney CBD · St George · Sutherland Shire
            </p>
            <p>
              <a href="/fridge-repairs/">See all service areas →</a>{" "}
              Running a cafe or shop? <a href="/#commercial">See commercial fridge repairs →</a>
            </p>
          </div>
        </div>
      </section>

      <section className="section section--alt" id="domestic-faq">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>FAQ</p>
            <h2>Domestic Fridge Repairs Sydney FAQs</h2>
          </div>

          <div className="accordion faq__accordion">
            {domesticFaqs.map((item, i) => (
              <AccordionItem key={item.q} title={item.q} defaultOpen={i === 0}>
                <p>{item.a}</p>
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>

      <section className="section--dark section" id="domestic-cta">
        <div className="container">
          <div className="section-head section-head--center">
            <h2>Book a Domestic Fridge Repair in Sydney</h2>
            <p>
              Tell us your suburb, fridge brand and model, and what it's doing. We'll confirm a
              time and give you a fixed quote at your home.
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
