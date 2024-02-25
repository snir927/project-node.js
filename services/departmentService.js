const departmentRepository=require('../repositories/departmentDBRepository')
const getAllDepartments = () => {
    return departmentRepository.getDepartments();
  };
  
  const addDepartment = (departmentToAdd) => {
    return departmentRepository.addDepartment(departmentToAdd);
  };
  const updateDepartment = (employeeId, department) => {
    return departmentRepository.updateDepartment(employeeId,department);
  };
  
  module.exports = {
   getAllDepartments,
   addDepartment,
   updateDepartment
  };
  