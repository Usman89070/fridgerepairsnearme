import { ArticleIcon, ArrowRightIcon } from "./Icons";

export default function BlogCard({ post, headingTag = "h2" }) {
  const Heading = headingTag;

  return (
    <article className="card blog__card">
      {post.featured_image ? (
        <img src={post.featured_image} alt={post.title} className="blog__card-image" loading="lazy" />
      ) : null}
      <div className="blog__card-body">
        {!post.featured_image && (
          <div className="blog__card-top">
            <span className="icon-badge"><ArticleIcon /></span>
          </div>
        )}
        <span className="pill blog__category">{post.category}</span>
        <Heading>{post.title}</Heading>
        <p>{post.excerpt}</p>
        <a href={`/blog/${post.slug}`} className="blog__read-more">
          Read Article <ArrowRightIcon />
        </a>
      </div>
    </article>
  );
}
