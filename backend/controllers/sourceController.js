const Source = require("../models/source");

// Add a new source
exports.addSource = async (req, res) => {
    try {
        const source = new Source(req.body);
        await source.save();
        res.status(201).json({ message: "Source added successfully!", source });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};

// Get all sources
exports.getSources = async (req, res) => {
    try {
        const sources = await Source.find();
        res.status(200).json(sources);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};