const userDBRepository = require("../repositories/userDBrepository");
const getAllUesrs = () => {
  return userDBRepository.getUsers();
};

const getUserById = (id) => {
  return userDBRepository.getUserById(id);
};
const addUser = (user) => {
  return userDBRepository.addUser(user);
};
const updateUser = (id, user) => {
  return userDBRepository.updateUser(id, user);
};

module.exports = {
  getAllUesrs,
  getUserById,
  addUser,
  updateUser,
};
