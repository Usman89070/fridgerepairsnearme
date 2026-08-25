import { processSteps } from "../data/content";

export default function ProcessSection() {
  return (
    <section id="process" className="section process">
      <div className="container">
        <div className="section-head section-head--center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>The Process</p>
          <h2>How Fridge Repair Works</h2>
          <p>
            A straightforward repair process can help avoid unnecessary uncertainty and make
            it easier to match the job with the appropriate local service.
          </p>
        </div>

        <div className="process__steps">
          {processSteps.map((s, i) => (
            <div className="process__step" key={s.step}>
              <div className="process__step-num">{s.step}</div>
              <div className="process__step-body">
                <h3>{s.title}</h3>
                <p>{s.text}</p>
              </div>
              {i < processSteps.length - 1 && <span className="process__connector" aria-hidden="true" />}
            </div>
          ))}
        </div>

        <div className="process__cta">
          <a href="#contact" className="btn btn-primary">Book a Fridge Repair</a>
        </div>
      </div>
    </section>
  );
}
