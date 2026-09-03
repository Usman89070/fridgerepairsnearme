import { domesticTypes } from "../data/content";
import { FridgeIcon } from "./Icons";

export default function DomesticSection() {
  return (
    <section id="domestic" className="section section--alt domestic">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Household Appliances</p>
          <h2>Request a Domestic Fridge Repairs</h2>
          <p>
            Household refrigerators have become increasingly complex, with multiple cooling
            zones, electronic controls, sensors, inverter compressors and automated defrost
            systems. Fridge repair services may be available across Sydney for many common
            domestic refrigerator and freezer types.
          </p>
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
  );
}
