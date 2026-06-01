const express = require("express");
const router = express.Router();
const { validateNoiseEvents } = require("../controllers/eventController");

router.get("/validate", validateNoiseEvents);

module.exports = router;