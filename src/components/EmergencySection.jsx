import { AlertIcon, ClockIcon, CheckIcon } from "./Icons";

const triggers = [
  "A fridge has completely stopped cooling",
  "Frozen food is beginning to thaw",
  "A commercial fridge cannot hold temperature",
  "A coolroom has stopped operating",
  "Water is leaking near electrical components",
  "Stock is at risk",
];

export default function EmergencySection() {
  return (
    <section id="emergency" className="section--dark section emergency">
      <div className="container emergency__grid">
        <div className="emergency__copy">
          <p className="eyebrow"><AlertIcon /> Urgent Faults</p>
          <h2>Emergency Fridge Repairs Near You</h2>
          <p>
            A complete cooling failure can quickly become urgent, particularly when food,
            frozen goods or commercial stock are at risk. Provide your Sydney suburb or
            postcode, appliance type and symptoms so urgent fridge repair availability near you
            can be checked.
          </p>
          <p>
            Same-day or urgent appointments may be available depending on your Sydney suburb,
            the type of equipment and technician scheduling. Avoid promising a fixed response
            time unless it is genuinely supported across the service area.
          </p>
          <a href="#contact" className="btn btn-primary">Check Emergency Fridge Repair Availability</a>
        </div>

        <div className="emergency__panel">
          <div className="emergency__panel-head">
            <ClockIcon />
            <h3>Urgent service may be appropriate when:</h3>
          </div>
          <ul className="emergency__list">
            {triggers.map((t) => (
              <li key={t}><CheckIcon /> {t}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
