const express = require("express");
const multer = require("multer");
const path = require("path");
const router = express.Router();
const RecentPost = require("../models/RecentPost");

// Upload folder setup
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, "uploads/"); // make sure this folder exists
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + "-" + Math.round(Math.random() * 1e9);
    cb(null, uniqueSuffix + path.extname(file.originalname));
  },
});

const upload = multer({ storage });

// Create post with image upload
router.post("/", upload.single("image"), async (req, res) => {
  try {
    const { title, content, author, category } = req.body;
    const image = req.file ? req.file.filename : "";

    const newPost = new RecentPost({
      title,
      content,
      author,
      category,
      image,
    });

    await newPost.save();
    res.status(201).json(newPost);
  } catch (err) {
    console.error("Error creating recent post:", err);
    res.status(500).json({ error: "Failed to create post" });
  }
});

// Get all recent posts
router.get("/", async (req, res) => {
  try {
    const posts = await RecentPost.find().sort({ createdAt: -1 });
    res.json(posts);
  } catch (err) {
    console.error("Error fetching posts:", err);
    res.status(500).json({ error: "Failed to fetch posts" });
  }
});

// Delete a post
router.delete("/:id", async (req, res) => {
  try {
    await RecentPost.findByIdAndDelete(req.params.id);
    res.json({ message: "Post deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete post" });
  }
});

module.exports = router;
