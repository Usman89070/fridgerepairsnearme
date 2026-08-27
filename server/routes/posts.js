const express = require("express");
const Post = require("../models/Post");
const requireAuth = require("../middleware/requireAuth");

const router = express.Router();

function slugify(text) {
  const base = String(text || "")
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/^-+|-+$/g, "");
  return base || "post";
}

async function uniqueSlug(base, excludeId) {
  let slug = base;
  let i = 2;
  while (await Post.exists({ slug, ...(excludeId ? { _id: { $ne: excludeId } } : {}) })) {
    slug = `${base}-${i}`;
    i++;
  }
  return slug;
}

router.get("/", async (req, res) => {
  const posts = await Post.find({}, "slug category title excerpt createdAt updatedAt").sort({ createdAt: -1 });
  res.json(posts);
});

router.get("/:slug", async (req, res) => {
  const post = await Post.findOne({ slug: req.params.slug });
  if (!post) return res.status(404).json({ error: "Not found" });
  res.json(post);
});

router.post("/", requireAuth, async (req, res) => {
  const { title, category, excerpt, content, slug } = req.body || {};
  if (!title || !category || !excerpt || !content || !String(content).trim()) {
    return res.status(400).json({ error: "Title, category, excerpt and content are all required" });
  }

  const base = slugify(slug || title);
  const finalSlug = await uniqueSlug(base);
  const post = await Post.create({ title, category, excerpt, content, slug: finalSlug });
  res.status(201).json({ ok: true, id: post._id.toString(), slug: post.slug });
});

router.put("/:id", requireAuth, async (req, res) => {
  const post = await Post.findById(req.params.id);
  if (!post) return res.status(404).json({ error: "Not found" });

  const { title, category, excerpt, content, slug } = req.body || {};
  if (!title || !category || !excerpt || !content || !String(content).trim()) {
    return res.status(400).json({ error: "Title, category, excerpt and content are all required" });
  }

  const base = slugify(slug || title);
  post.slug = await uniqueSlug(base, post._id);
  post.title = title;
  post.category = category;
  post.excerpt = excerpt;
  post.content = content;
  await post.save();
  res.json({ ok: true, slug: post.slug });
});

router.delete("/:id", requireAuth, async (req, res) => {
  await Post.findByIdAndDelete(req.params.id);
  res.json({ ok: true });
});

module.exports = router;
