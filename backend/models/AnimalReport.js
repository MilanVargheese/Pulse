const mongoose = require("mongoose");

const animalReportSchema = new mongoose.Schema({
  animalType: {
    type: String,
    required: true,
  },
  location: {
    type: String,
    required: true,
  },
  description: {
    type: String,
    required: true,
  },
  size: {
    type: String,
  },
  behavior: {
    type: String,
  },
  animalInfo: {
    type: String,
  },
  image: {
    type: String,
  },
  userLocation: {
    type: {
      latitude: Number,
      longitude: Number,
    },
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  },
});

module.exports = mongoose.model("AnimalReport", animalReportSchema);
