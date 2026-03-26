require("dotenv").config();
const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

const authRoutes = require("./routes/authRoutes");
const formRoutes = require("./routes/formRoutes");

app.use("/api/auth", authRoutes);
app.use("/api/form", formRoutes);

mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Error:", err));

app.listen(5000, () => {
  console.log("Server running on port 5000");
});
