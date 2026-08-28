import { worthRepairingFactors } from "../data/content";
import { CheckIcon } from "./Icons";

export default function WorthRepairingSection() {
  return (
    <section className="section section--alt worth">
      <div className="container worth__grid">
        <div className="worth__panel card">
          <h3>Factors Worth Considering</h3>
          <ul className="worth__list">
            {worthRepairingFactors.map((f) => (
              <li key={f}><CheckIcon /> {f}</li>
            ))}
          </ul>
        </div>

        <div className="worth__copy">
          <p className="eyebrow">Repair or Replace</p>
          <h2>Is It Worth Repairing My Fridge?</h2>
          <p>
            Whether a refrigerator should be repaired or replaced depends on more than its age.
            A relatively old fridge may still be worth repairing if the fault is straightforward
            and the appliance is otherwise in good condition. A newer appliance with a serious
            sealed-system problem may require a more careful cost comparison.
          </p>
          <p>
            A diagnosis gives you more useful information before making the decision. The aim
            should not be to repair every appliance at any cost. It should be to understand the
            fault and determine whether repair represents a sensible option.
          </p>
          <a href="#contact" className="btn btn-primary">Request a Free Quote</a>
        </div>
      </div>
    </section>
  );
}
