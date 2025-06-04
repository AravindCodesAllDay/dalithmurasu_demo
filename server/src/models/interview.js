const mongoose = require("mongoose");

const InterviewPartContentSchema = new mongoose.Schema({
  header: {
    type: String,
    required: true,
  },
  passage: {
    type: String,
    required: true,
  },
}, { _id: false });

const InterviewPartSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: String,
  author: String,
  photo: [String], // Optional array of image URLs
  content: {
    type: [InterviewPartContentSchema],
    required: true,
  },
}, { timestamps: true });

const InterviewSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  date: String,
  category: String,
  photo: String,
  parts: {
    type: [InterviewPartSchema],
    required: true,
  },
}, { timestamps: true });

module.exports = mongoose.model("Interview", InterviewSchema);
