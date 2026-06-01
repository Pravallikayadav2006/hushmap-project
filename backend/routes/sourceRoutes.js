const express = require("express");
const router = express.Router();
const { addSource, getSources } = require("../controllers/sourceController");

// Add new source
router.post("/add", addSource);

// Get all sources
router.get("/", getSources);

module.exports = router;