const mongoose = require("mongoose");

const employeeShiftSchema = new mongoose.Schema(
  {
    employeeId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Employee",
    },
    shiftId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "Shift",
    },
  },
  { versionKey: false }
);

module.exports = mongoose.model("EmployeeShift", employeeShiftSchema);
