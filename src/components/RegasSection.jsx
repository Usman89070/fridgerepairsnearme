import { regasSteps } from "../data/content";
import { DropletIcon } from "./Icons";

export default function RegasSection() {
  return (
    <section className="section regas">
      <div className="container regas__grid">
        <div className="regas__copy">
          <p className="eyebrow"><DropletIcon /> Sealed System</p>
          <h2>Does My Fridge Need Regassing?</h2>
          <p>
            A refrigerator does not normally consume refrigerant during everyday operation. If
            the refrigerant charge is genuinely low, the reason should be investigated rather
            than assuming the appliance only needs a quick top-up.
          </p>
          <p>
            Symptoms that can sometimes be associated with a sealed-system problem include weak
            cooling, unusually long run times, an unusual evaporator frost pattern or a
            compressor running without the cabinet reaching temperature. These symptoms can
            also have other causes.
          </p>
          <p className="regas__callout">
            A warm fridge does not automatically need regassing. Accurate diagnosis comes first.
          </p>
        </div>

        <div className="regas__panel card">
          <h3>A Proper Refrigeration Service May Involve</h3>
          <ol className="regas__steps">
            {regasSteps.map((step) => <li key={step}>{step}</li>)}
          </ol>
        </div>
      </div>
    </section>
  );
}
