export default function Intro() {
  return (
    <section className="section intro">
      <div className="container intro__grid">
        <div className="intro__copy">
          <p className="eyebrow">Fridge Repairs Near You</p>
          <h2>Looking for Fridge Repairs Near You in Sydney?</h2>
          <p>
            When your fridge stops cooling properly, starts leaking or develops an unusual
            noise, you usually want one thing: a reliable fridge repair service close to home
            or your business.
          </p>
          <p>
            Fridge repair services may be available across supported Sydney suburbs for
            household refrigerators, freezers and commercial refrigeration equipment. Local
            availability depends on your suburb, appliance type and the repair required.
          </p>
          <p>
            Common problems include fridges not cooling, freezers icing up, water leaks, noisy
            fan motors, temperature fluctuations, electrical faults and refrigeration system
            problems. Depending on the symptoms, diagnosis may involve airflow, fan motors,
            temperature sensors, thermostats, defrost components, compressor start components,
            control boards or the sealed refrigeration system.
          </p>
          <p className="intro__cta-line">
            Simply provide your Sydney suburb or postcode, appliance brand and a description of
            the fault to check fridge repairs near you.
          </p>
          <a href="#contact" className="btn btn-primary">Check Fridge Repairs Near You</a>
        </div>

        <div className="intro__panel" aria-hidden="true">
          <div className="intro__panel-card">
            <span className="intro__panel-tag">Household</span>
            <p>Refrigerators &amp; freezers</p>
          </div>
          <div className="intro__panel-card intro__panel-card--offset">
            <span className="intro__panel-tag">Commercial</span>
            <p>Coolrooms, display &amp; prep units</p>
          </div>
          <div className="intro__panel-card">
            <span className="intro__panel-tag">Diagnosis</span>
            <p>Fault-first, before parts</p>
          </div>
        </div>
      </div>
    </section>
  );
}
