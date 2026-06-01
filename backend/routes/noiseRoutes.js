console.log("noiseRoutes file is running");
const express = require("express");
const router = express.Router();

const {
  createNoiseReport,
  getNoiseReports
} = require("../controllers/noiseController");
router.get("/test", (req, res) => {
  res.send("Route working");
});

// ✅ POST
router.post("/", createNoiseReport);

// ✅ GET
router.get("/", getNoiseReports);

module.exports = router;