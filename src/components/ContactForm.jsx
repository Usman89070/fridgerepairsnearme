import { useState } from "react";
import { applianceOptions, enquiryEmail, enquiryEmailHref } from "../data/content";
import { CheckIcon } from "./Icons";

const initialState = {
  name: "",
  email: "",
  suburb: "",
  appliance: applianceOptions[0],
  brand: "",
  message: "",
  website: "", // honeypot
};

export default function ContactForm({ variant = "hero" }) {
  const [values, setValues] = useState(initialState);
  const [errors, setErrors] = useState({});
  const [status, setStatus] = useState("idle"); // idle | submitting | success

  const update = (field) => (e) =>
    setValues((v) => ({ ...v, [field]: e.target.value }));

  const validate = () => {
    const next = {};
    if (!values.name.trim()) next.name = "Please enter your name.";
    if (!values.email.trim()) {
      next.email = "Please enter your email address.";
    } else if (!/^\S+@\S+\.\S+$/.test(values.email)) {
      next.email = "Please enter a valid email address.";
    }
    if (!values.suburb.trim()) next.suburb = "Please enter your suburb or postcode.";
    if (!values.message.trim()) next.message = "Briefly describe the fault.";
    return next;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (values.website) return; // honeypot triggered — silently drop

    const next = validate();
    setErrors(next);
    if (Object.keys(next).length > 0) return;

    setStatus("submitting");
    // No backend is wired up yet — this simulates submission so the UI/UX
    // can be validated end to end. Connect to a form endpoint (e.g. your
    // CRM, email API or a service like Formspree) before going live.
    setTimeout(() => {
      setStatus("success");
      setValues(initialState);
    }, 900);
  };

  if (status === "success") {
    return (
      <div className={`contact-form contact-form--${variant} contact-form--success`}>
        <div className="contact-form__success">
          <span className="contact-form__success-icon"><CheckIcon /></span>
          <h3>Enquiry Received</h3>
          <p>
            Thanks — your details have been submitted. Local fridge repair availability for
            your suburb will be confirmed shortly by email. For urgent faults, you can also
            email us directly at <a href={enquiryEmailHref}>{enquiryEmail}</a>.
          </p>
          <button type="button" className="btn btn-outline btn-sm" onClick={() => setStatus("idle")}>
            Submit another enquiry
          </button>
        </div>
      </div>
    );
  }

  return (
    <form className={`contact-form contact-form--${variant}`} onSubmit={handleSubmit} noValidate>
      <div className="contact-form__head">
        <h3>Check Fridge Repairs Near Me</h3>
        <p>Tell us your suburb and the fault — we'll confirm local service availability.</p>
      </div>

      <input
        type="text"
        name="website"
        value={values.website}
        onChange={update("website")}
        className="visually-hidden"
        tabIndex={-1}
        autoComplete="off"
        aria-hidden="true"
      />

      <div className="field-row">
        <div className="field">
          <label htmlFor="cf-name">Full Name</label>
          <input id="cf-name" type="text" value={values.name} onChange={update("name")} placeholder="Jane Smith" />
          {errors.name && <span className="field-error">{errors.name}</span>}
        </div>
        <div className="field">
          <label htmlFor="cf-email">Email Address</label>
          <input id="cf-email" type="email" value={values.email} onChange={update("email")} placeholder="you@email.com" />
          {errors.email && <span className="field-error">{errors.email}</span>}
        </div>
      </div>

      <div className="field-row">
        <div className="field">
          <label htmlFor="cf-suburb">Suburb or Postcode</label>
          <input id="cf-suburb" type="text" value={values.suburb} onChange={update("suburb")} placeholder="e.g. Parramatta, 2150" />
          {errors.suburb && <span className="field-error">{errors.suburb}</span>}
        </div>
        <div className="field">
          <label htmlFor="cf-appliance">Appliance Type</label>
          <select id="cf-appliance" value={values.appliance} onChange={update("appliance")}>
            {applianceOptions.map((opt) => (
              <option key={opt} value={opt}>{opt}</option>
            ))}
          </select>
        </div>
      </div>

      <div className="field">
        <label htmlFor="cf-brand">Fridge Brand (optional)</label>
        <input id="cf-brand" type="text" value={values.brand} onChange={update("brand")} placeholder="e.g. Samsung" />
      </div>

      <div className="field">
        <label htmlFor="cf-message">What's happening with the fridge?</label>
        <textarea
          id="cf-message"
          rows={3}
          value={values.message}
          onChange={update("message")}
          placeholder="e.g. Fridge not cooling, freezer icing up, unusual noise…"
        />
        {errors.message && <span className="field-error">{errors.message}</span>}
      </div>

      <button type="submit" className="btn btn-primary btn-block" disabled={status === "submitting"}>
        {status === "submitting" ? "Checking availability…" : "Check Availability Near Me"}
      </button>

      <p className="contact-form__note">
        Prefer email? Reach us directly at <a href={enquiryEmailHref}>{enquiryEmail}</a>.
      </p>
    </form>
  );
}
