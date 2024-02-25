const mongoose = require("mongoose");
require("dotenv").config();

const connectDB = () => {
  console.log("hi");
  mongoose
    .connect("mongodb://localhost:27017/factoryDB")
    .then(() => console.log("Connected to factoryDB"))
    .catch((e) => console.log(e.message));
};

module.exports = connectDB;
