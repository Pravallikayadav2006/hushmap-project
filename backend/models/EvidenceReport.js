const mongoose = require("mongoose");

const evidenceReportSchema = new mongoose.Schema({
    noiseReport: { type: mongoose.Schema.Types.ObjectId, ref: "NoiseReport", required: true },
    validatedEvent: { type: mongoose.Schema.Types.ObjectId, ref: "ValidatedEvent" },
    file_url: { type: String, required: true },
    file_type: { type: String },
    uploaded_by: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
    timestamp: { type: Date, default: Date.now }
});

module.exports = mongoose.model("EvidenceReport", evidenceReportSchema);