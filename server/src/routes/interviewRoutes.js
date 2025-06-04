const express = require("express");
const {
  getAllInterviews,
  getInterviewById,
  getInterviewPartById,
  createInterview,
  updateInterview,
  deleteInterview,
} = require("../controllers/interviewController");
const router = express.Router();

// Create a new interview
// POST /api/interviews
router.post("/", createInterview);

// Get all interviews
// GET /api/interviews
router.get("/", getAllInterviews);

// Get a specific interview by ID
// GET /api/interviews/:id
router.get("/:id", getInterviewById);

// Get a specific part of an interview by interview ID and part ID
// GET /api/interviews/:id/parts/:partId
router.get("/:id/parts/:partId", getInterviewPartById);

// Update a specific interview by ID
// PUT /api/interviews/:id
router.put("/:id", updateInterview);

// Delete a specific interview by ID
// DELETE /api/interviews/:id
router.delete("/:id", deleteInterview);

module.exports = router;
