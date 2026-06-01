const mongoose = require("mongoose");

const NoiseReportSchema = new mongoose.Schema({
  latitude: Number,
  longitude: Number,
  decibel: Number,
  location: String,
  createdAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("NoiseReport", NoiseReportSchema);