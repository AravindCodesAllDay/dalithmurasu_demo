const PremiumArticle = require("../models/PremiumArticle");

const createPremiumArticle = async (req, res) => {
  try {
    const { title, content } = req.body;

    // Check mandatory image
    if (!req.files || !req.files.mainImage) {
      return res.status(400).json({ message: "mainImage is required" });
    }

    const mainImagePath = req.files.mainImage[0].filename;
    const image1Path = req.files.image1 ? req.files.image1[0].filename : null;
    const image2Path = req.files.image2 ? req.files.image2[0].filename : null;

    const newArticle = new PremiumArticle({
      title,
      content,
      mainImage: mainImagePath,
      image1: image1Path,
      image2: image2Path,
    });

    const savedArticle = await newArticle.save();
    res.status(201).json(savedArticle);
  } catch (error) {
    console.error("Error creating premium article:", error);
    res.status(500).json({ message: "Error creating premium article" });
  }
};

const getPremiumArticles = async (req, res) => {
  try {
    const articles = await PremiumArticle.find().sort({ createdAt: -1 });
    res.json(articles);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error fetching articles" });
  }
};

const updatePremiumArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const updateData = req.body;

    const updatedArticle = await PremiumArticle.findByIdAndUpdate(id, updateData, { new: true });
    if (!updatedArticle) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.json(updatedArticle);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error updating article" });
  }
};

const deletePremiumArticle = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedArticle = await PremiumArticle.findByIdAndDelete(id);
    if (!deletedArticle) {
      return res.status(404).json({ message: "Article not found" });
    }

    res.json({ message: "Article deleted successfully" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Error deleting article" });
  }
};

module.exports = {
  createPremiumArticle,
  getPremiumArticles,
  updatePremiumArticle,
  deletePremiumArticle,
};
