const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const noiseRoutes = require("./routes/noiseRoutes");

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api/noise-reports", noiseRoutes);
app.get("/", (req, res) => {
  res.send("Server Running");
});

mongoose.connect("mongodb://127.0.0.1:27017/hushmap")
.then(()=> console.log("MongoDB Connected"))
.catch(err=> console.log(err));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});