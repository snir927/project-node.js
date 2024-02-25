const shiftRepository = require('../repositories/shiftDBRepository')

const getAllShifts = () => {
    return shiftRepository.getShifts();
  };
  
  const getshiftById = (id) => {
    return shiftRepository.getShiftById(id);
  };
  const addShift = (shift) => {
    return shiftRepository.addShift(shift);
  };
  const updateShift = (id, shift) => {
    return shiftRepository.updateShift(id, shift);
  };
  
  module.exports = {
    getAllShifts,
    getshiftById,
    addShift,
    updateShift
  };
  