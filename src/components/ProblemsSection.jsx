import { problems } from "../data/content";
import { AlertIcon } from "./Icons";

export default function ProblemsSection() {
  return (
    <section id="problems" className="section problems">
      <div className="container">
        <div className="section-head">
          <p className="eyebrow">Fault Diagnosis</p>
          <h2>Common Fridge Problems We Diagnose and Repair</h2>
          <p>
            Different refrigerator faults can produce very similar symptoms. A fridge that is
            not cooling, for example, does not automatically need refrigerant or a replacement
            compressor. Problems with airflow, sensors, fan motors, defrost components or
            electrical controls can create similar behaviour. Accurate diagnosis helps identify
            the actual cause before repair work begins.
          </p>
        </div>

        <div className="grid grid-2 problems__grid">
          {problems.map((p) => (
            <div className="card problems__card" key={p.title}>
              <div className="problems__card-head">
                <span className="icon-badge icon-badge--amber"><AlertIcon /></span>
                <h3>{p.title}</h3>
              </div>
              <p>{p.summary}</p>
              <ul className="tag-list problems__causes">
                {p.causes.map((c) => <li key={c}>{c}</li>)}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
