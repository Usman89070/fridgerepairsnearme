import { trustBar } from "../data/content";
import { FridgeIcon, BuildingIcon, ShieldIcon, PinIcon, WrenchIcon, ClockIcon } from "./Icons";

const icons = [FridgeIcon, BuildingIcon, ShieldIcon, PinIcon, WrenchIcon, ClockIcon];

export default function TrustBar() {
  return (
    <section className="trust-bar">
      <div className="container trust-bar__grid">
        {trustBar.map((label, i) => {
          const Icon = icons[i % icons.length];
          return (
            <div className="trust-bar__item" key={label}>
              <Icon />
              <span>{label}</span>
            </div>
          );
        })}
      </div>
    </section>
  );
}
