const departmentSrvice = require('../services/departmentService')
const express = require("express");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", auth,async (req, res) => {
    const departments = await departmentSrvice.getAllDepartments();
    res.send(departments);
  });
  

  router.post("/", auth, async (req, res) => {
    const department = req.body;
    const status = await departmentSrvice.addDepartment(department);
    res.send({ status });
  });
  
  router.post("/:employeeId", auth, async (req, res) => {
    const department = req.body;
    const { employeeId } = req.params;
    const status = await departmentSrvice.updateDepartment(employeeId,department);
    res.send({ status });
  });
  module.exports = router;
  