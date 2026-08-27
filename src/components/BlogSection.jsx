import { useEffect, useState } from "react";
import { api } from "../lib/api";
import { ArticleIcon, ArrowRightIcon } from "./Icons";

export default function BlogSection() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    api
      .listPosts()
      .then((data) => setPosts(data.slice(0, 3)))
      .catch(() => setPosts([]));
  }, []);

  if (posts.length === 0) return null;

  return (
    <section id="blog" className="section section--alt blog">
      <div className="container">
        <div className="section-head section-head--center">
          <p className="eyebrow" style={{ justifyContent: "center" }}>From the Blog</p>
          <h2>Fridge Care Guides &amp; Advice</h2>
          <p>
            Practical, no-nonsense reading on keeping fridges and freezers running well —
            new articles are added regularly.
          </p>
        </div>

        <div className="grid grid-3 blog__grid">
          {posts.map((post) => (
            <article className="card blog__card" key={post.slug}>
              <div className="blog__card-top">
                <span className="icon-badge"><ArticleIcon /></span>
              </div>
              <span className="pill blog__category">{post.category}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <a href={`/blog/${post.slug}`} className="blog__read-more">
                Read Article <ArrowRightIcon />
              </a>
            </article>
          ))}
        </div>

        <div className="blog__cta">
          <a href="/blog" className="btn btn-outline">View All Articles</a>
          <a href="/#contact-us" className="btn btn-primary">Ask Us a Question</a>
        </div>
      </div>
    </section>
  );
}
