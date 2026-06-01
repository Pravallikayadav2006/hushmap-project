const NoiseReport = require("../models/NoiseReport");
const ValidatedEvent = require("../models/ValidatedEvent");

exports.validateNoiseEvents = async (req, res) => {
  try {

    const reports = await NoiseReport.find();

    if (reports.length < 3) {
      return res.json({
        message: "Not enough reports to create event"
      });
    }

    const avgLat =
      reports.reduce((sum, r) => sum + r.gps_lat, 0) / reports.length;

    const avgLng =
      reports.reduce((sum, r) => sum + r.gps_lng, 0) / reports.length;

    const avgDb =
      reports.reduce((sum, r) => sum + r.db_level, 0) / reports.length;

    const peakDb = Math.max(...reports.map((r) => r.db_level));

    const event = new ValidatedEvent({
      reports_count: reports.length,
      center_lat: avgLat,
      center_lng: avgLng,
      avg_db: avgDb,
      peak_db: peakDb,
      confidence_score: 0.9,
      violation_status: "detected"
    });

    await event.save();

    res.json({
      message: "Validated Event Created",
      event
    });

  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};