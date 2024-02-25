const mongoose = require("mongoose");

const Schema = mongoose.Schema;
const departmentSchema = new Schema(
  {
    name: String,
    manager: {
      type: Schema.Types.ObjectId,
      ref: 'Employee'
  }
},
{versionKey: false}
);

module.exports = mongoose.model("Department", departmentSchema);
