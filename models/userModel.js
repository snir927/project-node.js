const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    fullName: String,
    numOfAction: Number,
  },
  { versionKey: false }
);
module.exports = mongoose.model("User", userSchema);
