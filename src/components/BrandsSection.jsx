import { brands } from "../data/content";

export default function BrandsSection() {
  return (
    <section id="brands" className="section section--alt brands">
      <div className="container">
        <div className="section-head section-head--center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>Brand Coverage</p>
          <h2>Fridge Repairs Near Me for Major Brands</h2>
          <p>
            Local fridge repair services may be available for many refrigerator brands
            commonly used in Australian homes and businesses. Repair availability can vary by
            brand, model and location.
          </p>
        </div>

        <div className="brands__grid">
          {brands.map((brand) => (
            <span className="brands__chip" key={brand}>{brand}</span>
          ))}
        </div>

        <p className="brands__note">
          Don't see your fridge brand? Provide the make and model when you enquire so fridge
          repair availability near you can be confirmed before booking.
        </p>
      </div>
    </section>
  );
}
