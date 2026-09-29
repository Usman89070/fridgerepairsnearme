import usePageSeo from "../hooks/usePageSeo";
import { enquiryEmail, enquiryEmailHref, processSteps, brands, callOutFee, warrantyPeriod } from "../data/content";
import {
  MailIcon,
  ShieldIcon,
  WrenchIcon,
  PinIcon,
  BuildingIcon,
  FridgeIcon,
  SnowflakeIcon,
  DropletIcon,
  AlertIcon,
} from "../components/Icons";
import AccordionItem from "../components/Accordion";

const CANONICAL_URL = "https://fridgerepairsnearme.com.au/fridge-repairs/";

const trustPoints = [
  { icon: ShieldIcon, label: "ARCtick licensed technician" },
  { icon: WrenchIcon, label: `${callOutFee} call-out, fixed quote before any work` },
  { icon: PinIcon, label: "On-site repairs at your home or business" },
  { icon: BuildingIcon, label: "Domestic, commercial & coolroom refrigeration" },
];

const regionOverview = [
  { region: "Inner West", suburbs: "Marrickville, Burwood, Strathfield, Leichhardt, Newtown" },
  { region: "Western Sydney", suburbs: "Parramatta, Auburn, Bankstown, Granville, Merrylands" },
  { region: "North Shore", suburbs: "North Sydney, Mosman, Ryde, Lane Cove, St Ives" },
  { region: "Northern Beaches", suburbs: "Manly, Frenchs Forest, Balgowlah, Brookvale, Seaforth" },
  { region: "Eastern Suburbs", suburbs: "Bondi, Randwick, Paddington, Maroubra, Double Bay" },
  { region: "Sydney CBD & Inner City", suburbs: "Surry Hills, Pyrmont, Zetland, Redfern, Ultimo" },
  { region: "St George", suburbs: "Hurstville, Kogarah, Rockdale, Bexley, Revesby" },
  { region: "Sutherland Shire", suburbs: "Cronulla, Miranda, Sylvania, Menai, Illawong" },
];

const hubServices = [
  {
    icon: FridgeIcon,
    title: "Domestic Fridge Repairs",
    text: "French-door, side-by-side, top-mount, bottom-mount, integrated and bar fridges. Common faults: not cooling, leaking, noisy, iced up.",
    href: "/#domestic",
  },
  {
    icon: BuildingIcon,
    title: "Commercial Refrigeration Repairs",
    text: "Upright and underbench fridges, prep and makeline units, display and glass-door fridges for cafes, restaurants and retail.",
    href: "/#commercial",
  },
  {
    icon: SnowflakeIcon,
    title: "Coolroom & Walk-In Freezer Repairs",
    text: "Fans, controllers, door seals, icing and condensing units.",
    href: "/#commercial",
  },
  {
    icon: FridgeIcon,
    title: "Freezer Repairs",
    text: "Upright and chest freezers and fridge-freezer combinations.",
    href: "/#domestic",
  },
  {
    icon: DropletIcon,
    title: "Fridge Regas & Gas Leak Repairs",
    text: "Leak detection, repair, evacuation and recharge by an ARCtick-licensed technician.",
    href: "/#regas",
  },
  {
    icon: AlertIcon,
    title: "Same-Day & Urgent Repairs",
    text: "Urgent appointments may be available depending on your suburb and technician scheduling — tell us if food or stock is at risk.",
    href: "/#emergency",
  },
];

const hubRegions = [
  {
    region: "Inner West",
    suburbs: [
      "Abbotsford", "Alexandria", "Annandale", "Ashbury", "Ashfield", "Balmain", "Bardwell Park",
      "Birchgrove", "Breakfast Point", "Burwood", "Cabarita", "Concord", "Croydon", "Croydon Park",
      "Drummoyne", "Dulwich Hill", "Earlwood", "Enfield", "Enmore", "Erskineville", "Five Dock",
      "Forest Lodge", "Glebe", "Haberfield", "Homebush", "Leichhardt", "Lewisham", "Liberty Grove",
      "Lilyfield", "Marrickville", "Newtown", "Petersham", "Rhodes", "Rodd Point", "Rozelle",
      "Russell Lea", "St Peters", "Stanmore", "Strathfield", "Summer Hill", "Sydenham", "Tempe",
      "Wareemba",
    ],
  },
  {
    region: "Western Sydney",
    suburbs: [
      "Auburn", "Bankstown", "Bass Hill", "Baulkham Hills", "Belfield", "Belmore", "Berala",
      "Birrong", "Granville", "Lakemba", "Merrylands", "Newington", "Parramatta", "Punchbowl",
      "Regents Park", "Rosehill", "Rydalmere", "Sefton", "Silverwater", "Telopea", "Yagoona",
    ],
  },
  {
    region: "North Shore",
    suburbs: [
      "Artarmon", "Balmoral", "Beecroft", "Cremorne", "Crows Nest", "Denistone", "Dundas",
      "East Killara", "East Lindfield", "East Ryde", "Eastwood", "Epping", "Ermington",
      "Gladesville", "Gordon", "Greenwich", "Henley", "Hunters Hill", "Huntleys Point", "Killara",
      "Kirribilli", "Lane Cove", "Lavender Bay", "Lindfield", "Linley Point", "Longueville",
      "Macquarie Park", "Marsfield", "McMahons Point", "Meadowbank", "Melrose Park",
      "Middle Cove", "Milsons Point", "Mortlake", "Mosman", "Naremburn", "North Epping",
      "North Ryde", "North Sydney", "Northbridge", "Northwood", "Oatlands", "Putney", "Pymble",
      "Riverview", "Roseville", "Ryde", "St Ives", "Tennyson", "Waverton", "West Pymble",
      "West Ryde", "Willoughby", "Wollstonecraft",
    ],
  },
  {
    region: "Northern Beaches",
    suburbs: [
      "Allambie Heights", "Balgowlah", "Balgowlah Heights", "Beacon Hill", "Belrose", "Brookvale",
      "Cromer", "Fairlight", "Forestville", "Frenchs Forest", "Freshwater", "Killarney Heights",
      "Manly", "Manly Vale", "North Balgowlah", "Queenscliff", "Seaforth",
    ],
  },
  {
    region: "Eastern Suburbs",
    suburbs: [
      "Banksmeadow", "Bellevue Hill", "Bondi", "Botany", "Bronte", "Coogee", "Daceyville",
      "Darling Point", "Double Bay", "Dover Heights", "Eastgardens", "Eastlakes", "Edgecliff",
      "Hillsdale", "Kensington", "Kingsford", "Little Bay", "Malabar", "Maroubra", "Mascot",
      "Matraville", "Paddington", "Pagewood", "Point Piper", "Port Botany", "Queens Park",
      "Randwick", "Rose Bay", "Rushcutters Bay", "South Coogee", "Tamarama", "Vaucluse",
      "Watsons Bay", "Waverley", "Woollahra",
    ],
  },
  {
    region: "Sydney CBD & Inner City",
    suburbs: [
      "Beaconsfield", "Darlinghurst", "Darlington", "Elizabeth Bay", "Millers Point",
      "Moore Park", "Potts Point", "Pyrmont", "Redfern", "Rosebery", "Surry Hills", "Ultimo",
      "Waterloo", "Woolloomooloo", "Zetland",
    ],
  },
  {
    region: "St George",
    suburbs: [
      "Allawah", "Arncliffe", "Banksia", "Beverley Park", "Beverly Hills", "Bexley",
      "Blakehurst", "Brighton-Le-Sands", "Connells Point", "Dolls Point", "East Hills",
      "Hurlstone Park", "Hurstville", "Kingsgrove", "Kogarah", "Kyeemagh", "Kyle Bay", "Lugarno",
      "Monterey", "Mortdale", "Narwee", "Oatley", "Padstow", "Panania", "Peakhurst", "Penshurst",
      "Ramsgate", "Revesby", "Riverwood", "Rockdale", "Roselands", "Sandringham", "Sans Souci",
      "South Hurstville", "Turrella", "Undercliffe", "Wiley Park", "Wolli Creek",
    ],
  },
  {
    region: "Sutherland Shire",
    suburbs: [
      "Alfords Point", "Cronulla", "Illawong", "Kangaroo Point", "Kareela", "Menai",
      "Miranda", "Port Hacking", "Sylvania", "Taren Point",
    ],
  },
];

const hubFaqs = [
  {
    q: "Which areas of Sydney do you cover?",
    a: "We cover 8 regions across Sydney: the Inner West, Western Sydney, North Shore, Northern Beaches, Eastern Suburbs, Sydney CBD, St George and the Sutherland Shire, together covering more than 230 suburbs. If your suburb isn't listed, send us your postcode — nearby areas can often still be booked.",
  },
  {
    q: "Do you repair fridges at my home or business?",
    a: "Yes. Repairs are carried out on-site at your home, apartment, cafe, restaurant or shop — you don't need to transport the fridge anywhere.",
  },
  {
    q: "Is the call-out fee different in each suburb?",
    a: `No. The call-out fee is ${callOutFee} incl. GST across our Sydney service area, and you always get a fixed quote before any work starts. Parking or access costs in areas like the CBD, such as a paid loading zone, are the only possible extra, and we'll flag that before booking if it applies.`,
  },
  {
    q: "How quickly can a technician get to me?",
    a: "Response times depend on your suburb, the fault and technician scheduling on the day. If food or commercial stock is at risk, tell us when you enquire so the job can be prioritised where possible.",
  },
  {
    q: "Do you repair commercial fridges and coolrooms across Sydney?",
    a: "Yes. We repair commercial fridges, display fridges, freezers and coolrooms for businesses across the regions we cover.",
  },
  {
    q: "What should I have ready when I book?",
    a: "Your suburb or postcode, the fridge brand and model number, what the fault is and when it started. A photo of the model label and the problem area helps us bring the right parts the first time.",
  },
  {
    q: "Do repairs come with a warranty?",
    a: `Yes. Every repair across our Sydney service area is backed by a ${warrantyPeriod} warranty covering both parts and workmanship.`,
  },
];

const schema = [
  {
    "@context": "https://schema.org",
    "@type": "HomeAndConstructionBusiness",
    name: "Fridge Repairs Near Me",
    url: CANONICAL_URL,
    image: "https://fridgerepairsnearme.com.au/logo.webp",
    email: enquiryEmail,
    areaServed: hubRegions.map((r) => ({ "@type": "City", name: r.region })),
    address: {
      "@type": "PostalAddress",
      addressLocality: "Sydney",
      addressRegion: "NSW",
      addressCountry: "AU",
    },
  },
  {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Home", item: "https://fridgerepairsnearme.com.au/" },
      { "@type": "ListItem", position: 2, name: "Service Areas", item: CANONICAL_URL },
    ],
  },
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    mainEntity: hubFaqs.map((f) => ({
      "@type": "Question",
      name: f.q,
      acceptedAnswer: { "@type": "Answer", text: f.a },
    })),
  },
];

export default function FridgeRepairServicesPage() {
  usePageSeo({
    title: "Fridge Repair Services Sydney | Suburbs & Areas We Cover",
    description:
      "Fridge repair services across Sydney: Inner West, North Shore, Eastern Suburbs, St George, Shire & more. Find your suburb and book a local technician.",
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
            <p className="eyebrow eyebrow--light">Sydney Service Areas</p>
            <h1>Fridge Repair Services Across Sydney</h1>
            <p className="hero__lede">
              We repair household and commercial fridges across 8 Sydney regions and more than
              230 suburbs, from Parramatta to Bondi and from Mosman to Cronulla.
            </p>
            <p className="hero__sub">
              Find your area below to see local service details, or send us your suburb and the
              fault for a quote.
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

      <section className="section" id="coverage">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Coverage</p>
            <h2>Do You Service My Suburb?</h2>
            <p>
              We cover most of metropolitan Sydney. Our core service area includes the Inner
              West, Western Sydney, North Shore, Northern Beaches, Eastern Suburbs, Sydney CBD,
              St George and the Sutherland Shire. If your suburb isn't listed, send us your
              postcode — nearby areas can often still be booked.
            </p>
          </div>

          <div className="grid grid-4 hub-regions__grid">
            {regionOverview.map((r) => (
              <div className="card hub-region-card" key={r.region}>
                <h3>{r.region}</h3>
                <p>{r.suburbs}</p>
              </div>
            ))}
          </div>

          <p className="hub-suburbs__note">
            See the full suburb list for every region below.
          </p>
        </div>
      </section>

      <section className="section section--alt" id="hub-services">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Our Services</p>
            <h2>Fridge Repair Services We Offer in Sydney</h2>
            <p>Whichever part of Sydney you're in, the same services are available.</p>
          </div>

          <div className="grid grid-3">
            {hubServices.map(({ icon: Icon, title, text, href }) => (
              <a className="card domestic__card" href={href} key={title}>
                <span className="icon-badge"><Icon /></span>
                <h3>{title}</h3>
                <p>{text}</p>
              </a>
            ))}
          </div>
        </div>
      </section>

      <section className="section brands">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Brand Coverage</p>
            <h2>Brands We Repair Across Sydney</h2>
            <p>
              Have your fridge's model number ready — it's on the label inside the fridge,
              usually on a side wall or behind the crisper.
            </p>
          </div>

          <div className="brands__grid">
            {brands.map((brand) => (
              <span className="brands__chip" key={brand}>{brand}</span>
            ))}
          </div>

          <p className="brands__note">
            <a href="/#brands">See full brand coverage &amp; commercial equipment →</a>
          </p>
        </div>
      </section>

      <section className="section section--alt" id="how-it-works">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>The Process</p>
            <h2>How Local Fridge Repair Works</h2>
            <p>
              A straightforward repair process, wherever your Sydney suburb is.
            </p>
          </div>

          <div className="process__steps">
            {processSteps.map((s, i) => (
              <div className="process__step" key={s.step}>
                <div className="process__step-num">{s.step}</div>
                <div className="process__step-body">
                  <h3>{s.title}</h3>
                  <p>{s.text}</p>
                </div>
                {i < processSteps.length - 1 && <span className="process__connector" aria-hidden="true" />}
              </div>
            ))}
          </div>

          <div className="process__cta">
            <a href="/#contact" className="btn btn-primary">Request a Free Quote</a>
          </div>
        </div>
      </section>

      <section className="section" id="suburbs-by-region">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Full Coverage List</p>
            <h2>Fridge Repair Suburbs by Region</h2>
            <p>Browse the complete suburb list for each of the 8 regions we service.</p>
          </div>

          <div className="accordion">
            {hubRegions.map((r) => (
              <AccordionItem key={r.region} title={r.region} subtitle={`${r.suburbs.length} suburbs`}>
                <div className="service-areas__suburbs">
                  {r.suburbs.map((s) => (
                    <span className="pill" key={s}>{s}</span>
                  ))}
                </div>
              </AccordionItem>
            ))}
          </div>

          <p className="hub-suburbs__note">
            Don't see your suburb? Send us your postcode. Coverage changes, and nearby suburbs
            can often be booked.
          </p>
        </div>
      </section>

      <section className="section section--alt cost">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>Pricing</p>
            <h2>Fridge Repair Costs in Sydney</h2>
            <p>
              Our call-out fee of {callOutFee} incl. GST is the same across our Sydney service
              area. After diagnosis you get a fixed quote before any work starts.{" "}
              <a href="/#cost">See our fridge repair cost guide →</a>
            </p>
          </div>
        </div>
      </section>

      <section className="section" id="hub-faq">
        <div className="container">
          <div className="section-head section-head--center">
            <p className="eyebrow" style={{ justifyContent: "center" }}>FAQ</p>
            <h2>Fridge Repair Services Sydney FAQs</h2>
          </div>

          <div className="accordion faq__accordion">
            {hubFaqs.map((item, i) => (
              <AccordionItem key={item.q} title={item.q} defaultOpen={i === 0}>
                <p>{item.a}</p>
              </AccordionItem>
            ))}
          </div>
        </div>
      </section>

      <section className="section--dark section" id="hub-cta">
        <div className="container">
          <div className="section-head section-head--center">
            <h2>Book a Fridge Repair Near You</h2>
            <p>
              Tell us your suburb, fridge brand and the fault. We'll confirm availability and
              give you a fixed quote on site.
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
