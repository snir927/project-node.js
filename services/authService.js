const jwt = require("jsonwebtoken");
const userWSRepository = require("../repositories/userWSRepositoey");
const login = async (username, email) => {
  const { data: users } = await userWSRepository.getUsers();
  const user = users.find(
    (user) => user.username === username && user.email === email
  );

  if (user) {
    return jwt.sign({ id: user.id }, process.env.SECRET_KEY);
  } else {
    throw { errorMsg: "User not found!" };
  }
};
module.exports = {
  login,
};
