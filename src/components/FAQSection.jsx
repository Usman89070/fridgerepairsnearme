import { faqs } from "../data/content";
import AccordionItem from "./Accordion";

export default function FAQSection() {
  return (
    <section id="faq" className="section faq">
      <div className="container">
        <div className="section-head section-head--center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>FAQ</p>
          <h2>Frequently Asked Questions</h2>
          <p>Answers to the questions we're asked most often about fridge repairs near you.</p>
        </div>

        <div className="accordion faq__accordion">
          {faqs.map((item, i) => (
            <AccordionItem key={item.q} title={item.q} defaultOpen={i === 0}>
              <p>{item.a}</p>
            </AccordionItem>
          ))}
        </div>
      </div>
    </section>
  );
}
