const mongoose = require("mongoose");

const validatedEventSchema = new mongoose.Schema({
  reports_count: {
    type: Number,
    // removed required
  },

  center_lat: {
    type: Number,
    // removed required
  },

  center_lng: {
    type: Number,
    // removed required
  },

  avg_db: {
    type: Number
  },

  peak_db: {
    type: Number
  },

  start_time: {
    type: Date
  },

  end_time: {
    type: Date
  },

  confidence_score: {
    type: Number
  },

  violation_status: {
    type: String,
    default: "pending"
  }

});

module.exports = mongoose.model("ValidatedEvent", validatedEventSchema);