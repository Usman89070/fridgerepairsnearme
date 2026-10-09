import { testimonials } from "../data/content";
import { StarIcon } from "./Icons";

export default function TestimonialsSection() {
  return (
    <section className="section section--alt testimonials">
      <div className="container">
        <div className="section-head section-head--center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>Reviews</p>
          <h2>What Customers Say</h2>
          <p>What customers can expect when booking a fridge repair near them.</p>
        </div>

        <div className="grid grid-3 testimonials__grid">
          {testimonials.map((t, i) => (
            <div className="card testimonials__card" key={i}>
              <div className="testimonials__stars">
                {Array.from({ length: 5 }).map((_, s) => <StarIcon key={s} />)}
              </div>
              <p className="testimonials__quote">&ldquo;{t.quote}&rdquo;</p>
              <div className="testimonials__author">
                <strong>{t.name}</strong>
                {t.location && <span>{t.location}</span>}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
