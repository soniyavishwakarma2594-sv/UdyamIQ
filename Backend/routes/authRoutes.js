const express = require("express");
const router = express.Router();
const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "soniivishh@gmail.com",
    pass: "lghlhbdqintbacpt",
  },
});

router.post("/send-otp", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ message: "Email is required" });
  }

  const otp = Math.floor(100000 + Math.random() * 900000);

  try {
    await transporter.sendMail({
      from: "soniivishh@gmail.com",
      to: email,
      subject: "Your OTP Code",
      text: `Your OTP is ${otp}`,
    });

    console.log("Generated OTP:", otp);

    res.json({ message: "OTP sent successfully" });
  } catch (error) {
    console.log("Email Error:", error);
    res.status(500).json({ message: "Failed to send OTP" });
  }
});

router.post("/login", (req, res) => {
  console.log("Login route hit ✅");
  res.json({ message: "Login successful ✅" });
});

router.post("/verify-otp", async (req, res) => {
  const { email, otp } = req.body;

  if (!email || !otp) {
    return res.status(400).json({ message: "Email and OTP required" });
  }

  res.json({ message: "OTP Verified Successfully ✅" });
});

module.exports = router;
