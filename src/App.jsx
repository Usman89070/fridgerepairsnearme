import { lazy, Suspense } from "react";
import { Routes, Route, useLocation } from "react-router-dom";

import "./styles/header-hero.css";
import "./styles/sections.css";
import "./styles/blog-pages.css";

import useScrollReveal from "./hooks/useScrollReveal";
import useHashScroll from "./hooks/useHashScroll";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileStickyCTA from "./components/MobileStickyCTA";
import HomePage from "./pages/HomePage";
import BlogIndexPage from "./pages/BlogIndexPage";
import BlogPostPage from "./pages/BlogPostPage";
import NotFoundPage from "./pages/NotFoundPage";

// Admin panel is only ever visited by the site owner, never by public
// traffic — code-split it (styles included) so the CSS/JS payload every
// visitor downloads doesn't carry the admin UI.
const AdminLoginPage = lazy(() => import("./pages/admin/AdminLoginPage"));
const AdminDashboardPage = lazy(() => import("./pages/admin/AdminDashboardPage"));
const AdminPostFormPage = lazy(() => import("./pages/admin/AdminPostFormPage"));

export default function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  useScrollReveal(location.pathname);
  useHashScroll(location.pathname, location.hash);

  return (
    <>
      {!isAdminRoute && <Header />}
      <main>
        <Suspense fallback={isAdminRoute ? <div className="admin-shell"><p>Loading…</p></div> : null}>
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/blog" element={<BlogIndexPage />} />
            <Route path="/blog/:slug" element={<BlogPostPage />} />
            <Route path="/admin/login" element={<AdminLoginPage />} />
            <Route path="/admin" element={<AdminDashboardPage />} />
            <Route path="/admin/posts/new" element={<AdminPostFormPage />} />
            <Route path="/admin/posts/:slug/edit" element={<AdminPostFormPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Routes>
        </Suspense>
      </main>
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <MobileStickyCTA />}
    </>
  );
}
