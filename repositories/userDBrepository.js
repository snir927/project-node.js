const User = require("../models/userModel");

const getUsers = () => {
  return User.find({});
};
const getUserById = (id) => {
  return User.findById(id);
};
const addUser = async (userToAdd) => {
  userToAdd = new User(userToAdd);
  await userToAdd.save();
  return "user created!";
};
const updateUser = async (id, user) => {
  await User.findByIdAndUpdate(id, user);
  return "user updated!";
};
module.exports = {
  getUsers,
  getUserById,
  addUser,
  updateUser,
};
