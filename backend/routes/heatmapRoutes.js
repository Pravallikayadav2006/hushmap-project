const express = require("express");
const router = express.Router();
const { getHeatmapData } = require("../controllers/heatmapController");

// GET heatmap data
router.get("/events", getHeatmapData);

module.exports = router;