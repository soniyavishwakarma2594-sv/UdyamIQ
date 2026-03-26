const mongoose = require("mongoose");

const formSchema = new mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    fullName: String,
    phone: String,
    address: String,
  },
  { timestamps: true },
);

module.exports = mongoose.model("Form", formSchema);
