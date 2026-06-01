const EvidenceReport = require("../models/EvidenceReport");

exports.uploadEvidence = async (req, res) => {
    try {
        const { noiseReport, validatedEvent, file_url, file_type, uploaded_by } = req.body;

        const newEvidence = new EvidenceReport({
            noiseReport,
            validatedEvent,
            file_url,
            file_type,
            uploaded_by
        });

        await newEvidence.save();
        res.status(201).json({ message: "Evidence uploaded successfully", evidence: newEvidence });
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};

exports.getEvidenceByReport = async (req, res) => {
    try {
        const evidence = await EvidenceReport.find({ noiseReport: req.params.reportId });
        res.status(200).json(evidence);
    } catch (err) {
        console.error(err);
        res.status(500).json({ message: "Server error" });
    }
};