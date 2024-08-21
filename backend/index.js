require("dotenv").config();
require("./models/TrafficReport");
const express = require("express");
const mongoose = require("mongoose");
const authRoutes = require("./routes/authRoutes");

mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => {
    console.error("Failed to connect to MongoDB:", err);
    process.exit(1);
  });

const app = express();

app.use(express.json());

app.use("/api", authRoutes);

const User = mongoose.model("TrafficInfo");

mongoose
  .connect(process.env.MONGO_URI, {})
  .then(() => console.log("Connected to MongoDB"))
  .catch((err) => console.error("Failed to connect to MongoDB:", err));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

app.get("/getAllUsers", async (req, res) => {
  try {
    const allUsers = await User.find({});
    res.send({ status: "ok", data: allUsers });
  } catch (error) {
    console.log(error);
  }
});
