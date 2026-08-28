import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { api } from "../lib/api";
import { parsePostContent } from "../lib/postContent";
import BlogCard from "../components/BlogCard";

export default function BlogPostPage() {
  const { slug } = useParams();
  const [post, setPost] = useState(null);
  const [otherPosts, setOtherPosts] = useState([]);
  const [status, setStatus] = useState("loading");

  useEffect(() => {
    let cancelled = false;
    setStatus("loading");
    setPost(null);

    api
      .getPost(slug)
      .then((data) => {
        if (cancelled) return;
        setPost(data);
        setStatus("ready");
      })
      .catch(() => {
        if (!cancelled) setStatus("notfound");
      });

    api
      .listPosts()
      .then((list) => {
        if (!cancelled) setOtherPosts(list.filter((p) => p.slug !== slug).slice(0, 2));
      })
      .catch(() => {});

    return () => {
      cancelled = true;
    };
  }, [slug]);

  useEffect(() => {
    document.title = post
      ? `${post.title} | Fridge Repairs Near Me`
      : "Article Not Found | Fridge Repairs Near Me";
  }, [post]);

  if (status === "loading") {
    return (
      <section className="section blog-post">
        <div className="container blog-post__notfound">
          <p>Loading article…</p>
        </div>
      </section>
    );
  }

  if (status !== "ready" || !post) {
    return (
      <section className="section blog-post">
        <div className="container blog-post__notfound">
          <h1>Article Not Found</h1>
          <p>This article may have been moved or no longer exists.</p>
          <a href="/blog" className="btn btn-primary">Back to Blog</a>
        </div>
      </section>
    );
  }

  const sections = parsePostContent(post.content);

  return (
    <>
      <article className="section blog-post">
        <div className="container blog-post__container">
          <a href="/blog" className="blog-post__back">← Back to Blog</a>

          <span className="pill blog__category">{post.category}</span>
          <h1>{post.title}</h1>

          {post.featured_image && (
            <img src={post.featured_image} alt={post.title} className="blog-post__featured-image" />
          )}

          <p className="blog-post__lede">{post.excerpt}</p>

          <div className="blog-post__body">
            {sections.map((block, i) => (
              <div className="blog-post__block" key={block.heading || i}>
                {block.heading && <h2>{block.heading}</h2>}
                {block.body.map((paragraph, j) => (
                  <p key={j}>{paragraph}</p>
                ))}
              </div>
            ))}
          </div>

          <div className="blog-post__cta">
            <p>Have a fridge question of your own?</p>
            <div className="blog__cta">
              <a href="/#contact-us" className="btn btn-primary">Ask Us a Question</a>
              <a href="/#contact" className="btn btn-outline">Check Availability Near Me</a>
            </div>
          </div>
        </div>
      </article>

      {otherPosts.length > 0 && (
        <section className="section section--alt blog-post__related">
          <div className="container">
            <div className="section-head section-head--center">
              <p className="eyebrow" style={{ justifyContent: "center" }}>Keep Reading</p>
              <h2>More From the Blog</h2>
            </div>
            <div className="grid grid-2 blog__grid">
              {otherPosts.map((p) => (
                <BlogCard post={p} headingTag="h3" key={p.slug} />
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
