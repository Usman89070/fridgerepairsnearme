import { Routes, Route, useLocation } from "react-router-dom";

import "./styles/header-hero.css";
import "./styles/sections.css";
import "./styles/blog-pages.css";
import "./styles/admin.css";

import useScrollReveal from "./hooks/useScrollReveal";
import useHashScroll from "./hooks/useHashScroll";
import Header from "./components/Header";
import Footer from "./components/Footer";
import MobileStickyCTA from "./components/MobileStickyCTA";
import HomePage from "./pages/HomePage";
import BlogIndexPage from "./pages/BlogIndexPage";
import BlogPostPage from "./pages/BlogPostPage";
import NotFoundPage from "./pages/NotFoundPage";
import AdminLoginPage from "./pages/admin/AdminLoginPage";
import AdminDashboardPage from "./pages/admin/AdminDashboardPage";
import AdminPostFormPage from "./pages/admin/AdminPostFormPage";

export default function App() {
  const location = useLocation();
  const isAdminRoute = location.pathname.startsWith("/admin");
  useScrollReveal(location.pathname);
  useHashScroll(location.pathname, location.hash);

  return (
    <>
      {!isAdminRoute && <Header />}
      <main>
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
      </main>
      {!isAdminRoute && <Footer />}
      {!isAdminRoute && <MobileStickyCTA />}
    </>
  );
}
