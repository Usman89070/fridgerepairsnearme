import { useEffect } from "react";
import { blogPosts } from "../data/content";
import { ArticleIcon, ArrowRightIcon } from "../components/Icons";

export default function BlogIndexPage() {
  useEffect(() => {
    document.title = "Fridge Care Guides & Advice | Fridge Repairs Near Me";
  }, []);

  return (
    <section className="section blog-page">
      <div className="container">
        <div className="section-head section-head--center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>From the Blog</p>
          <h1>Fridge Care Guides &amp; Advice</h1>
          <p>
            Practical, no-nonsense reading on fridge and freezer faults, maintenance and
            repair-or-replace decisions — new articles are added regularly.
          </p>
        </div>

        <div className="grid grid-3 blog__grid">
          {blogPosts.map((post) => (
            <article className="card blog__card" key={post.slug}>
              <div className="blog__card-top">
                <span className="icon-badge"><ArticleIcon /></span>
              </div>
              <span className="pill blog__category">{post.category}</span>
              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>
              <a href={`/blog/${post.slug}`} className="blog__read-more">
                Read Article <ArrowRightIcon />
              </a>
            </article>
          ))}
        </div>

        <div className="blog__cta">
          <a href="/#contact-us" className="btn btn-primary">Ask Us a Question</a>
          <a href="/" className="btn btn-outline">Back to Home</a>
        </div>
      </div>
    </section>
  );
}
