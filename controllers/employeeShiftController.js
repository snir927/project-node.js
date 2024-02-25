const employeeShiftSrvice = require('../services/shiftService')
const express = require("express");
const auth = require("../middleware/auth");

const router = express.Router();
router.get("/", auth, async (req, res) => {
    const employeeShift = await employeeShiftSrvice.getAllEmployees()
    res.send(employees);
  });
  
  router.get("/:id", auth, async (req, res) => {
    const { id } = req.params;
    const employee = await employeeShiftSrvice.getEmployeeById(id);
    res.send(employee);
  });
  router.get("/getBydepartment/:id", auth, async (req, res) => {
    const { id: departmentId } = req.params;
    const employee = await employeeShiftSrvice.getEmployeeByDepartmentId(departmentId);
    res.send(employee);
  });
  router.post("/", auth, async (req, res) => {
    const employee = req.body;
    const status = await employeeShiftSrvice.addEmployee(employee);
    res.send({ status });
  });
  
  router.post("/:id", auth, async (req, res) => {
    const employee = req.body;
    const { id } = req.params;
    const status = await employeeShiftSrvice.updateEmployee(id,employee);
    res.send({ status });
  });
  router.delete('/:id', async (req, res) => {
    const {id} = req.params;
    const status = await employeeService.deleteEmployee(id);
    res.send({status});
})
  module.exports = router;
  
