const employeeService = require('../services/employeeService')
const express = require("express");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", auth, async (req, res) => {
    const employees = await employeeService.getAllEmployees()
    res.send(employees);
  });
  
  router.get("/getByEmployee/:id", auth, async (req, res) => {
    const { id } = req.params;
    const employees = await employeeService.getEmployeeById(id);
    res.send(employees);
  });
  router.get("/getByDepartment/:id", auth, async (req, res) => {
    const { id } = req.params;
    const employees = await employeeService.getEmployeeByDepartmentId(id);
    res.send(employees);
  });

  router.post("/", auth, async (req, res) => {
    const employees = req.body;
    const status = await employeeService.addEmployee(employees);
    res.send({ status });
  });
  
  router.post("/:id", auth, async (req, res) => {
    const employees = req.body;
    const { id } = req.params;
    const status = await employeeService.updateEmployee(id,employees);
    res.send({ status });
  });
  router.post("/delete/:id", auth, async (req, res) => {
    const { id } = req.params;
    const employees = await employeeService.deleteEmployee(id);
    res.send({employees});
  });

  module.exports = router;
  