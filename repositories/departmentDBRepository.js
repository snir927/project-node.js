const Department = require("../models/departmentModel");

const getDepartments = () => {
  return Department.find({});
};

const addDepartment = async (departmentToAdd) => {
  departmentToAdd = new Department(departmentToAdd);
  await departmentToAdd.save();
  return "department created!";
};

const updateDepartment = async (employeeId, department) => {
  await Department.findByIdAndUpdate(employeeId, department);
  return "department updated!";
};
module.exports = {
    getDepartments,
    addDepartment,
    updateDepartment
};
