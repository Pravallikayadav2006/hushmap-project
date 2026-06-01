const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
  device_id: {
    type: String,
    required: true
  },
  username: {
    type: String,
    required: true
  },
  total_reports: {
    type: Number,
    default: 0
  },
  impact_score: {
    type: Number,
    default: 0
  },
  created_at: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model("User", UserSchema);