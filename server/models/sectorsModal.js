const mongoose = require("mongoose");

const sectorsSchema = new mongoose.Schema(
  {
    value: {
      type: Number,
      required: true,
    },
    text: {
      type: String,
      required: true,
    },
  },
  { timestamps: true }
);

module.exports = mongoose.model("Sector", sectorsSchema);
