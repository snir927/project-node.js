require("dotenv").config();
const jwt = require("jsonwebtoken");
const auth = (req, res, next) => {
  // const token = req.headers['x-access-token'];
  //
  // // if (!token) {
  // //     res.status(401).send('No token provided');
  // // }
  //
  // jwt.verify(token, process.env.SECRET_KEY, (err,data) => {
  //     if (err) {
  //         res.status(500).send('Failed to authenticate token');
  //     }
  next();
  //})
};

module.exports = auth;
