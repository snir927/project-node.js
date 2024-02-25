const employeeRepository = require('../repositories/employeeDBRepository')

const getAllEmployees = () => {
    return employeeRepository.getEmployees();
  };
  
  const getEmployeeById = (id) => {
    return employeeRepository.getEmployeeById(id);
  };
  const getEmployeeByDepartmentId=(departmentId)=>{
    return employeeRepository.getEmployeeByDepartmentId(departmentId)
  };
  const addEmployee = (employeeToAdd) => {
    return employeeRepository.addEmployee(employeeToAdd);
  };
  const updateEmployee = (id, employee) => {
    return employeeRepository.updateEmployee(id,employee);
  };

  const deleteEmployee = (id) => {
    return employeeRepository.deleteEmployee(id);
}
  
  module.exports = {
   getAllEmployees,
   getEmployeeById,
   getEmployeeByDepartmentId,
   addEmployee,
   updateEmployee,
   deleteEmployee
  };
  