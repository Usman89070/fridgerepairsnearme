const mongoose = require("mongoose");

const postSchema = new mongoose.Schema(
  {
    slug: { type: String, required: true, unique: true },
    category: { type: String, required: true },
    title: { type: String, required: true },
    excerpt: { type: String, required: true },
    content: { type: String, required: true },
  },
  {
    timestamps: true,
    toJSON: {
      transform(doc, ret) {
        ret.id = ret._id.toString();
        ret.created_at = ret.createdAt;
        ret.updated_at = ret.updatedAt;
        delete ret._id;
        delete ret.__v;
        delete ret.createdAt;
        delete ret.updatedAt;
      },
    },
  }
);

module.exports = mongoose.model("Post", postSchema);
