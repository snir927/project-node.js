const Shift = require("../models/shiftModel");

const getShifts = () => {
  return Shift.find({});
};
const getShiftById = (id) => {
  return Shift.findById(id);
};
const addShift = async (shiftToAdd) => {
  shiftToAdd = new Shift(shiftToAdd);
  await shiftToAdd.save();
  return "shift created!";
};
const updateShift = async (id, shift) => {
  await Shift.findByIdAndUpdate(id, shift);
  return "shift updated!";
};
module.exports = {
  getShifts,
  getShiftById,
  addShift,
  updateShift,
};
