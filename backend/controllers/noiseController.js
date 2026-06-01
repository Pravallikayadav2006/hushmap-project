const NoiseReport = require("../models/NoiseReport");

// Save noise report
const createNoiseReport = async (req, res) => {
  try {
    const report = new NoiseReport(req.body);
    await report.save();
    res.status(201).json(report);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

// Get all reports
const getNoiseReports = async (req, res) => {
  try {
    const reports = await NoiseReport.find();
    res.json(reports);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createNoiseReport,
  getNoiseReports
};