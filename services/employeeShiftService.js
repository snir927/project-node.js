const employeeShiftRepository = require('../repositories/employeeShiftrepository')
const getAllEmployeesShift = () => {
    return employeeShiftRepository.getEmployeeShifts();
  };
  
  const getEmployeeShiftByEmployeeId = (EmployeeId) => {
    return employeeShiftRepository.getShiftByEmployeeId(EmployeeId);
  };
  const getEmployeeShiftByshiftId = (shiftId) => {
    return employeeShiftRepository.getShiftByshiftId(shiftId);
  };

  const addemployeeShift = (employeeShiftToAdd) => {
    return employeeShiftRepository.addemployeeShift(employeeShiftToAdd);
  };
  const updateemployeeShift = (id, employeeShift) => {
    return employeeShiftRepository.updateemployeeShift(id,employeeShift);
  };

  
  module.exports = {
    getAllEmployeesShift,
    getEmployeeShiftByEmployeeId,
    getEmployeeShiftByshiftId,
    addemployeeShift,
    updateemployeeShift
  };