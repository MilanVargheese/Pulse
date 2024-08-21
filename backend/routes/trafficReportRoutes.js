const express = require("express");
const router = express.Router();
const TrafficReport = require("../models/TrafficReport");

router.post("/reports", async (req, res) => {
  try {
    const { vehicleNumber, description, location } = req.body;

    const newReport = new TrafficReport({
      vehicleNumber,
      description,
      location,
    });

    await newReport.save();

    res.status(201).json({ message: "Traffic report submitted successfully" });
  } catch (error) {
    console.error("Error submitting traffic report:", error);
    res.status(500).json({ error: "Failed to submit traffic report" });
  }
});

module.exports = router;
