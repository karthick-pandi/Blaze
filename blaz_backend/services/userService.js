const User = require('../model/User');

const createUser = async (userData) => {
  try {
    const user = new User(userData);
    await user.save();
    return user;
  } catch (error) {
    throw new Error('Error creating user: ' + error.message);
  }
};

const getAllUsers = async () => {
  try {
    return await User.find();
  } catch (error) {
    throw new Error('Error fetching users: ' + error.message);
  }
};

module.exports = {
  createUser,
  getAllUsers,
};
