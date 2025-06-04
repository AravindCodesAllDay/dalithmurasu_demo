const mongoose = require("mongoose");

const premiumArticleSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: { type: String, required: true },
    mainImage: { type: String, required: true },
    image1: { type: String },
    image2: { type: String },
  },
  { timestamps: true }
);

const PremiumArticle = mongoose.model("PremiumArticle", premiumArticleSchema);

module.exports = PremiumArticle;
