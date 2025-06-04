const Interview = require("../models/interview"); // Use correct casing to avoid import issues

// @desc    Get all interviews
// @route   GET /api/interviews
exports.getAllInterviews = async (req, res) => {
  try {
    const interviews = await Interview.find();
    res.json(interviews);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Get interview by ID
// @route   GET /api/interviews/:id
exports.getInterviewById = async (req, res) => {
  try {
    const interview = await Interview.findById(req.params.id);
    if (!interview)
      return res.status(404).json({ message: "Interview not found" });
    res.json(interview);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Get specific part of an interview
// @route   GET /api/interviews/:id/parts/:partId
exports.getInterviewPartById = async (req, res) => {
  try {
    const interview = await Interview.findById(req.params.id);
    if (!interview)
      return res.status(404).json({ message: "Interview not found" });

    const part = interview.parts.find(
      (p) => p._id.toString() === req.params.partId
    );
    if (!part) return res.status(404).json({ message: "Part not found" });

    res.json(part);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

// @desc    Create a new interview
// @route   POST /api/interviews
exports.createInterview = async (req, res) => {
  try {
    const interview = new Interview(req.body);
    const saved = await interview.save();
    res.status(201).json(saved);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Update an interview by ID
// @route   PUT /api/interviews/:id
exports.updateInterview = async (req, res) => {
  try {
    const updatedInterview = await Interview.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedInterview)
      return res.status(404).json({ message: "Interview not found" });

    res.json(updatedInterview);
  } catch (err) {
    res.status(400).json({ message: err.message });
  }
};

// @desc    Delete an interview by ID
// @route   DELETE /api/interviews/:id
exports.deleteInterview = async (req, res) => {
  try {
    const deletedInterview = await Interview.findByIdAndDelete(req.params.id);

    if (!deletedInterview)
      return res.status(404).json({ message: "Interview not found" });

    res.json({ message: "Interview deleted successfully" });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
