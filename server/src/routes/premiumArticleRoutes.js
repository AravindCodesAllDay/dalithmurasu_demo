const express = require("express");
const router = express.Router();
const multer = require("multer");
const path = require("path");

// Multer config
const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, path.join(__dirname, "../../uploads")); // make sure this folder exists
  },
  filename: function (req, file, cb) {
    cb(null, Date.now() + "-" + file.originalname);
  },
});

const upload = multer({ storage });

const {
  createPremiumArticle,
  getPremiumArticles,
  updatePremiumArticle,
  deletePremiumArticle,
} = require("../controllers/premiumArticlesController");

router.get("/", getPremiumArticles);

router.post(
  "/",
  upload.fields([
    { name: "mainImage", maxCount: 1 },
    { name: "image1", maxCount: 1 },
    { name: "image2", maxCount: 1 },
  ]),
  createPremiumArticle
);

router.put("/:id", updatePremiumArticle);

router.delete("/:id", deletePremiumArticle);

module.exports = router;
