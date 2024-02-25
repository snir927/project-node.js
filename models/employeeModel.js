const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const employeeSchema = new Schema(
  {
    firstName: String,
    lastName: String,
    startWorkYear: Number,
    departmentId: {
      type: Schema.Types.ObjectId,
      ref: "Department",
    },
  },
  { versionKey: false }
);
module.exports = mongoose.model("Employee", employeeSchema);
