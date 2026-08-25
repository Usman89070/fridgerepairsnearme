import { useEffect } from "react";

export default function NotFoundPage() {
  useEffect(() => {
    document.title = "Page Not Found | Fridge Repairs Near Me";
  }, []);

  return (
    <section className="section blog-post">
      <div className="container blog-post__notfound">
        <h1>Page Not Found</h1>
        <p>The page you're looking for doesn't exist or may have moved.</p>
        <a href="/" className="btn btn-primary">Back to Home</a>
      </div>
    </section>
  );
}
