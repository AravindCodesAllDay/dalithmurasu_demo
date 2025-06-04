const mongoose = require("mongoose");

const RecentPostSchema = new mongoose.Schema(
  {
    title: { type: String, required: true },
    content: String,
    image: String,
    author: { type: String, default: "Admin" },   
    category: { type: String, default: "General" }, 
  },
  { timestamps: true }
);

module.exports = mongoose.model("RecentPost", RecentPostSchema);
