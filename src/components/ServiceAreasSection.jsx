import { serviceAreas } from "../data/content";
import AccordionItem from "./Accordion";

function slugify(text) {
  return text.toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "");
}

export default function ServiceAreasSection() {
  return (
    <section id="locations" className="section service-areas">
      <div className="container">
        <div className="section-head section-head--center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>Service Areas</p>
          <h2>Fridge Repairs Near You Across Sydney</h2>
          <p>
            Fridge repair service is available across a wide range of supported Sydney
            suburbs. Use your suburb or postcode when booking so local availability can be
            confirmed.
          </p>
        </div>

        <div className="service-areas__map">
          <iframe
            title="Satellite map of Sydney service area"
            src="https://www.google.com/maps?q=Sydney,+NSW,+Australia&t=k&z=10&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </div>

        <div className="accordion service-areas__accordion">
          {serviceAreas.map((area, i) => (
            <AccordionItem
              key={area.region}
              id={`region-${slugify(area.region)}`}
              title={area.region}
              defaultOpen={i === 0}
            >
              <div className="service-areas__suburbs">
                {area.suburbs.map((s) => (
                  <span className="pill" key={s}>{s}</span>
                ))}
              </div>
              <p className="service-areas__note">
                Only genuine, currently supported service areas are published on the live site.
              </p>
            </AccordionItem>
          ))}
        </div>

        <p className="service-areas__closing">
          Don't see your Sydney suburb listed? Coverage can change and nearby locations may
          also be available. Enter your suburb or postcode when enquiring to check fridge
          repairs near you.
        </p>
      </div>
    </section>
  );
}
