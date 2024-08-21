const mongoose = require("mongoose");

const trafficReportSchema = new mongoose.Schema(
  {
    vehicleNumber: { type: String, required: true },
    description: { type: String, required: true },
    location: { type: String, required: true },
    createdAt: { type: Date, default: Date.now },
  },
  { collection: "TrafficInfo" }
);
mongoose.model("TrafficInfo", trafficReportSchema);
