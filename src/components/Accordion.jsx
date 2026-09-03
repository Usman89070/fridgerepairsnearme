import { useState } from "react";
import { ChevronIcon } from "./Icons";

export default function AccordionItem({ title, subtitle, children, defaultOpen = false, id }) {
  const [open, setOpen] = useState(defaultOpen);

  return (
    <div id={id} className={`accordion-item ${open ? "accordion-item--open" : ""}`}>
      <button
        type="button"
        className="accordion-item__trigger"
        onClick={() => setOpen((v) => !v)}
        aria-expanded={open}
      >
        <span>
          <span className="accordion-item__title">{title}</span>
          {subtitle && <span className="accordion-item__subtitle">{subtitle}</span>}
        </span>
        <ChevronIcon className="accordion-item__chevron" />
      </button>
      <div className="accordion-item__panel" role="region">
        <div className="accordion-item__panel-inner">{children}</div>
      </div>
    </div>
  );
}
