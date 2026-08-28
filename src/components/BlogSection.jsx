import { useEffect, useState } from "react";
import { api } from "../lib/api";
import BlogCard from "./BlogCard";

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
            <BlogCard post={post} headingTag="h3" key={post.slug} />
          ))}
        </div>

        <div className="blog__cta">
          <a href="/blog" className="btn btn-outline">View All Articles</a>
        </div>
      </div>
    </section>
  );
}
