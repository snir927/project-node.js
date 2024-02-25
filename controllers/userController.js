const userService = require("../services/userService");
const express = require("express");
const auth = require("../middleware/auth");

const router = express.Router();

router.get("/", auth, async (req, res) => {
  const users = await userService.getAllUesrs();
  res.send(users);
});

router.get("/:id", auth, async (req, res) => {
  const { id } = req.params;
  const user = await userService.getUserById(id);
  res.send(user);
});
router.post("/", auth, async (req, res) => {
  const user = req.body;
  const status = await userService.addUser(user);
  res.send({ status });
});

router.post("/:id", auth, async (req, res) => {
  const user = req.body;
  const { id } = req.params;
  const status = await userService.updateUser(id, user);
  res.send({ status });
});
module.exports = router;
