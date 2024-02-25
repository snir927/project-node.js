const Employee = require("../models/employeeModel");


const getEmployees = () => {
    return Employee.find({});
  };
  const getEmployeeById = (id) => {
    return Employee.findById(id);
  };
  const getEmployeeByDepartmentId = (DepartmentId) => {
    return Employee.find({departmentId: DepartmentId });
  };
  const addEmployee = async (employeeToAdd) => {
    employeeToAdd = new Employee(employeeToAdd);
    await employeeToAdd.save();
    return "employee created!";
  };
  const updateEmployee = async (id, employee) => {
    await Employee.findByIdAndUpdate(id, employee);
    return "employee updated!";
  };
  const deleteEmployee=async(id)=>{
    await Employee.findByIdAndDelete(id)
    return "employee deleted!"
  }
  module.exports = {
    getEmployees,
    getEmployeeById,
    addEmployee,
    updateEmployee,
    getEmployeeByDepartmentId,
    deleteEmployee
  };
  