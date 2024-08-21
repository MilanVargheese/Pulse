const express = require("express");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
const User = require("../models/User");
const TrafficReport = require("../models/TrafficReport");
const router = express.Router();

router.post("/register", async (req, res) => {
  try {
    const { username, email, password } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ error: "Email is already registered" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const user = new User({ username, email, password: hashedPassword });
    await user.save();
    res.status(201).json({ message: "User registered successfully" });
  } catch (error) {
    console.error("Error during registration:", error);
    res.status(500).json({ error: "Registration failed. Please try again." });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { email, password } = req.body;

    const user = await User.findOne({ email });
    if (!user) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(400).json({ message: "Invalid credentials" });
    }

    const token = jwt.sign({ id: user._id }, process.env.JWT_SECRET, {
      expiresIn: "1h",
    });

    res.json({ token, username: user.username });
  } catch (error) {
    console.error("Error during login:", error);
    res.status(500).json({ message: "Login failed. Please try again." });
  }
});

router.post("/traffic-report", async (req, res) => {
  try {
    const { location, description } = req.body;

    const newReport = new TrafficReport({
      location,
      description,
    });

    await newReport.save();
    res.status(201).json({ message: "Traffic report saved successfully" });
  } catch (error) {
    console.error("Error saving traffic report:", error);
    res.status(500).json({ message: "Failed to save traffic report" });
  }
});

module.exports = router;
