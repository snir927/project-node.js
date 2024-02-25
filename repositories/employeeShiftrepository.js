const employeeShift = require("../models/employeeShiftModel");

const getEmployeeShifts = () => {
    return employeeShift.find({});
  };
  const getShiftByEmployeeId = (EmployeeId) => {
    return employeeShift.find(EmployeeId);
  };
  const getShiftByshiftId = (shiftId) => {
    return employeeShift.find(shiftId);
  };
  const addemployeeShift = async (employeeShiftToAdd) => {
    employeeShiftToAdd = new Shift(employeeShiftToAdd);
    await employeeShiftToAdd.save();
    return "employeeShift created!";
  };
  const updateemployeeShift = async (id, employeeShift) => {
    await Shift.findByIdAndUpdate(id, employeeShift);
    return "employeeShift updated!";
  };
  module.exports = {
  getEmployeeShifts,
  getShiftByEmployeeId,
  getShiftByshiftId,
  addemployeeShift,
  updateemployeeShift
  };
  