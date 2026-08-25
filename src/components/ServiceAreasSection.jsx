import { serviceAreas } from "../data/content";
import AccordionItem from "./Accordion";

export default function ServiceAreasSection() {
  return (
    <section className="section service-areas">
      <div className="container">
        <div className="section-head section-head--center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>Service Areas</p>
          <h2>Fridge Repairs Near Me Across Australia</h2>
          <p>
            Whether you are searching from Sydney, Melbourne, Brisbane, Perth, Adelaide,
            Canberra or another supported Australian location, use your suburb or postcode to
            check fridge repair availability near you. Service availability should always be
            confirmed by postcode or suburb.
          </p>
        </div>

        <div className="accordion service-areas__accordion">
          {serviceAreas.map((area, i) => (
            <AccordionItem
              key={area.state}
              title={`${area.state} Fridge Repairs`}
              subtitle={area.region}
              defaultOpen={i === 0}
            >
              <div className="service-areas__suburbs">
                {area.suburbs.map((s) => (
                  <span className="pill" key={s}>{s}</span>
                ))}
              </div>
              <p className="service-areas__note">
                Only genuine locations and regions with current service coverage are retained
                on the live website.
              </p>
            </AccordionItem>
          ))}
        </div>
      </div>
    </section>
  );
}
