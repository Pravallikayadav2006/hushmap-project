const ValidatedEvent = require("../models/ValidatedEvent");

exports.getHeatmapData = async (req, res) => {
    try {
        const events = await ValidatedEvent.find({}, {
            center_lat: 1,
            center_lng: 1,
            avg_db: 1,
            peak_db: 1,
            violation_status: 1
        });
        res.status(200).json(events);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};