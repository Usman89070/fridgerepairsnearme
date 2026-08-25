import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { blogPosts } from "../data/content";
import { ArticleIcon, ArrowRightIcon } from "../components/Icons";

export default function BlogPostPage() {
  const { slug } = useParams();
  const post = blogPosts.find((p) => p.slug === slug);
  const otherPosts = blogPosts.filter((p) => p.slug !== slug).slice(0, 2);

  useEffect(() => {
    document.title = post
      ? `${post.title} | Fridge Repairs Near Me`
      : "Article Not Found | Fridge Repairs Near Me";
  }, [post]);

  if (!post) {
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

  return (
    <>
      <article className="section blog-post">
        <div className="container blog-post__container">
          <a href="/blog" className="blog-post__back">← Back to Blog</a>

          <span className="pill blog__category">{post.category}</span>
          <h1>{post.title}</h1>
          <p className="blog-post__lede">{post.excerpt}</p>

          <div className="blog-post__body">
            {post.sections.map((block, i) => (
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
                <article className="card blog__card" key={p.slug}>
                  <div className="blog__card-top">
                    <span className="icon-badge"><ArticleIcon /></span>
                  </div>
                  <span className="pill blog__category">{p.category}</span>
                  <h3>{p.title}</h3>
                  <p>{p.excerpt}</p>
                  <a href={`/blog/${p.slug}`} className="blog__read-more">
                    Read Article <ArrowRightIcon />
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
      )}
    </>
  );
}
