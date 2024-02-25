const shiftService = require("../services/shiftService");
const express = require("express");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", auth, async (req, res) => {
  const shifts = await shiftService.getAllShifts();
  res.send(shifts);
});

router.get("/:id", auth, async (req, res) => {
  const { id } = req.params;
  const shift = await shiftService.getshiftById(id);
  res.send(shift);
});
router.post("/", auth, async (req, res) => {
  const shift = req.body;
  const status = await shiftService.addShift(shift);
  res.send({ status });
});

router.post("/:id", auth, async (req, res) => {
  const shift = req.body;
  const { id } = req.params;
  const status = await shiftService.updateShift(id, shift);
  res.send({ status });
});
module.exports = router;
