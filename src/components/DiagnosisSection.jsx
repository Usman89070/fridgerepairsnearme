import { diagnosisComponents } from "../data/content";
import { WrenchIcon } from "./Icons";

export default function DiagnosisSection() {
  return (
    <section className="section section--alt diagnosis">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Behind the Fault</p>
          <h2>Accurate Diagnosis Before Repair</h2>
          <p>
            Modern refrigeration systems contain mechanical, electrical and electronic
            components that work together to maintain temperature. Depending on the symptoms,
            a technician may inspect several areas before confirming the fault.
          </p>
        </div>

        <div className="grid grid-4 diagnosis__grid">
          {diagnosisComponents.map((c) => (
            <div className="diagnosis__card" key={c.title}>
              <span className="icon-badge icon-badge--sm"><WrenchIcon /></span>
              <h4>{c.title}</h4>
              <p>{c.text}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
