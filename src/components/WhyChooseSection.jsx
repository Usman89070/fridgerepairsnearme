import { whyChoose } from "../data/content";
import { PinIcon, FridgeIcon, WrenchIcon, ShieldIcon, CheckIcon, ClockIcon } from "./Icons";

const icons = [PinIcon, FridgeIcon, WrenchIcon, ShieldIcon, CheckIcon, ClockIcon];

export default function WhyChooseSection() {
  return (
    <section className="section why">
      <div className="container">
        <div className="section-head section-head--center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>Why Fridge Repairs Near Me</p>
          <h2>Why Choose Fridge Repair Help Near You?</h2>
          <p>
            Choosing a repair service is easier when you know what to expect — verified
            service facts, not generic "best service" claims.
          </p>
        </div>

        <div className="grid grid-3 why__grid">
          {whyChoose.map((item, i) => {
            const Icon = icons[i % icons.length];
            return (
              <div className="card why__card" key={item.title}>
                <span className="icon-badge"><Icon /></span>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
