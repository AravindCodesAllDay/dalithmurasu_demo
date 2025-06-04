const express = require("express");
const cors = require("cors");
const dotenv = require("dotenv");
const path = require("path");
const connectDB = require("./config/db");

// Load environment variables from .env file
dotenv.config();

// Connect to MongoDB before starting server
connectDB()
  .then(() => {
    const app = express();

    // Middleware
    app.use(cors());
    app.use(express.json({ extended: true }));
    app.use(express.urlencoded({ extended: true }));

    // Serve uploaded files statically
    app.use("/uploads", express.static(path.join(__dirname, "./uploads")));

    // Import routes
    const recentPostsRoutes = require("./routes/recentPosts");
    const premiumArticlesRoutes = require("./routes/premiumArticleRoutes");
    const interviewRoutes = require("./routes/interviewRoutes");

    // Mount routes
    app.use("/api/recent-posts", recentPostsRoutes);
    app.use("/api/premium-articles", premiumArticlesRoutes);
    app.use("/api/interviews", interviewRoutes);

    app.get("/", (req, res) => {
      res.send("✅ API is running...");
    });

    // Start server
    const PORT = process.env.PORT || 3030;
    app.listen(PORT, () => {
      console.log(`🚀 Server running on port ${PORT}`);
    });
  })
  .catch((error) => {
    console.error("Failed to connect to MongoDB", error);
    process.exit(1);
  });
