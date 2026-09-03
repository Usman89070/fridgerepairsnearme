import { useEffect, useState } from "react";
import { api } from "../lib/api";
import BlogCard from "../components/BlogCard";

export default function BlogIndexPage() {
  const [posts, setPosts] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    document.title = "Fridge Care Guides & Advice | Fridge Repairs Near Me";
  }, []);

  useEffect(() => {
    api
      .listPosts()
      .then((data) => {
        setPosts(data);
        setStatus("ready");
      })
      .catch(() => setStatus("error"));
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

        {status === "loading" && <p style={{ textAlign: "center" }}>Loading articles…</p>}
        {status === "error" && (
          <p style={{ textAlign: "center" }}>Couldn't load articles right now. Please try again shortly.</p>
        )}
        {status === "ready" && posts.length === 0 && (
          <p style={{ textAlign: "center" }}>No articles published yet — check back soon.</p>
        )}

        {status === "ready" && posts.length > 0 && (
          <div className="grid grid-3 blog__grid">
            {posts.map((post) => (
              <BlogCard post={post} headingTag="h2" key={post.slug} />
            ))}
          </div>
        )}

        <div className="blog__cta">
          <a href="/" className="btn btn-outline">Back to Home</a>
        </div>
      </div>
    </section>
  );
}
