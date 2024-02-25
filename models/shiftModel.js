const mongoose = require("mongoose");
const shiftSchema = new mongoose.Schema(
  {
    date: Date,
    startingHour: Number,
    endingHour: Number,
  },
  { versionKey: false }
);
module.exports = mongoose.model("Shift", shiftSchema);
