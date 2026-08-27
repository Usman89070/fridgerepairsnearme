import { commercialEquipment, commercialSegments } from "../data/content";
import { BuildingIcon, CheckIcon } from "./Icons";

export default function CommercialSection() {
  return (
    <section id="commercial" className="section commercial">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Business & Hospitality</p>
          <h2>Commercial Fridge Repairs Near You</h2>
          <p>
            Commercial refrigeration problems can affect stock, food safety and day-to-day
            business operations. If refrigeration is critical to your business, finding a
            commercial fridge technician near you can help reduce disruption when equipment
            develops a fault. Depending on Sydney service coverage, commercial fridge repair
            services may be available for cafes, restaurants, supermarkets, convenience stores,
            hospitality venues, retail stores and other businesses requiring temperature-controlled
            equipment.
          </p>
        </div>

        <div className="commercial__layout">
          <div className="commercial__equipment card">
            <span className="icon-badge"><BuildingIcon /></span>
            <h3>Commercial Equipment That May Be Serviced</h3>
            <ul className="commercial__equipment-list">
              {commercialEquipment.map((item) => (
                <li key={item}><CheckIcon /> {item}</li>
              ))}
            </ul>
          </div>

          <div className="commercial__segments">
            {commercialSegments.map((seg) => (
              <div className="commercial__segment" key={seg.title}>
                <h4>{seg.title}</h4>
                <p>{seg.text}</p>
              </div>
            ))}
          </div>
        </div>

        <div className="commercial__cta">
          <a href="#contact" className="btn btn-primary">Find Commercial Fridge Repairs Near You</a>
        </div>
      </div>
    </section>
  );
}
