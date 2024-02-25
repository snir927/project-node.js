const express = require("express");
const authService = require("../services/authService");

const router = express.Router();

router.post("/login", async (req, res) => {
  const { username, email } = req.body;
  try {
    const token = await authService.login(username, email);
    res.send({ token: token });
  } catch (error) {
    res.status(500).send(error);
  }
});
module.exports = router;
