const TrafficReport = require("../models/TrafficReport");

exports.getTrafficReports = async (req, res) => {
  try {
    const reports = await TrafficReport.find({});
    res.status(200).json(reports);
  } catch (error) {
    res.status(500).json({ message: "Error fetching traffic reports", error });
  }
};
