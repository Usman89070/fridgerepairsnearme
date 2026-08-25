import { costFactors } from "../data/content";
import { CheckIcon } from "./Icons";

export default function CostSection() {
  return (
    <section className="section section--alt cost">
      <div className="container cost__grid">
        <div className="cost__copy">
          <p className="eyebrow">Pricing</p>
          <h2>How Much Does Fridge Repair Cost?</h2>
          <p>
            There is no single repair price that accurately applies to every refrigerator. A
            faulty door seal, fan motor or sensor involves very different work from a
            compressor or sealed refrigeration system repair.
          </p>
          <p>
            The most useful starting point is to provide the fridge make, model number,
            symptoms and suburb or postcode. Some faults may be discussed initially from the
            information provided, while others require an onsite diagnosis before the repair
            cost can be confirmed.
          </p>
          <a href="#contact" className="btn btn-primary">Request a Repair Assessment</a>
        </div>

        <div className="cost__panel card">
          <h3>Cost Can Vary Depending On</h3>
          <ul className="cost__list">
            {costFactors.map((f) => (
              <li key={f}><CheckIcon /> {f}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
