import { cityLocations } from "../data/content";
import { PinIcon } from "./Icons";

export default function LocationsSection() {
  return (
    <section id="locations" className="section section--alt locations">
      <div className="container">
        <div className="section-head section-head--center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>By Location</p>
          <h2>Find Fridge Repairs Near Me by Location</h2>
          <p>
            Searching for a fridge repairer close to home or your business? Check service
            availability across supported Australian cities and surrounding areas.
          </p>
        </div>

        <div className="grid grid-3 locations__grid">
          {cityLocations.map((loc) => (
            <div className="card locations__card" id={`location-${loc.city.toLowerCase()}`} key={loc.city}>
              <span className="icon-badge"><PinIcon /></span>
              <h3>Fridge Repairs Near Me in {loc.city}</h3>
              <p>{loc.blurb}</p>
              <a href="#contact" className="locations__link">Check {loc.city} availability →</a>
            </div>
          ))}
        </div>

        <p className="locations__note">
          Only genuine, currently supported service areas are published on the live site.
        </p>
      </div>
    </section>
  );
}
