const express = require("express");
const router = express.Router();
const { uploadEvidence, getEvidenceByReport } = require("../controllers/evidenceController");

// Upload evidence
router.post("/upload", uploadEvidence);

// Get all evidence for a noise report
router.get("/report/:reportId", getEvidenceByReport);

module.exports = router;