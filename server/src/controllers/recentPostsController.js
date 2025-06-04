const RecentPost = require("../models/RecentPost");
const path = require("path");

exports.createPost = async (req, res) => {
  try {
    const { title, content, image, author, category } = req.body;
    const newPost = new RecentPost({ title, content, image, author, category });
    const saved = await newPost.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(500).json({ error: "Failed to create post", details: err.message });
  }
};



exports.getPosts = async (req, res) => {
  try {
    const posts = await RecentPost.find().sort({ createdAt: -1 });
    res.status(200).json(posts);
  } catch (err) {
    res.status(500).json({ error: "Failed to fetch posts", details: err.message });
  }
};
exports.deletePost = async (req, res) => {
  try {
    await RecentPost.findByIdAndDelete(req.params.id);
    res.status(200).json({ message: "Post deleted" });
  } catch (err) {
    res.status(500).json({ error: "Failed to delete post", details: err.message });
  }
};
