const express = require("express");
const router = express.Router();
const auth = require("../middleware/authMiddleware");

router.post("/submit", auth, async (req, res) => {
  try {
    const { fullName, phone, address } = req.body;

    console.log("Body:", req.body);
    console.log("User:", req.user);

    if (!fullName || !phone || !address) {
      return res.status(400).json({ message: "All fields required" });
    }

    res.json({ message: "Form submitted successfully" });
  } catch (error) {
    console.log("SERVER ERROR:", error);
    res.status(500).json({ message: "Server error" });
  }
});

module.exports = router;
