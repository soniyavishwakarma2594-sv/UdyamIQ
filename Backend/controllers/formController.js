const Form = require("../models/Form");

exports.submitForm = async (req, res) => {
  try {
    const { fullName, phone, address } = req.body;

    if (!fullName || !phone || !address) {
      return res.status(400).json({ message: "All fields required" });
    }

    const newForm = new Form({
      userId: req.user.id,
      fullName,
      phone,
      address,
    });

    await newForm.save();

    res.json({ message: "Form submitted successfully" });
  } catch (error) {
    console.log(error);
    res.status(500).json({ message: "Server error" });
  }
};
