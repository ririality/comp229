import User from '../models/Users.js';

// get all users
export const getAllUsers = async (req, res) => {
  const users = await User.find();
  res.json(users);
};

// get user by id
export const getUserById = async (req, res) => {
  const user = await User.findById(req.params.id);
  res.json(user);
};

// add new user
export const createUser = async (req, res) => {
  const newUser = new User(req.body);
  await newUser.save();
  res.json(newUser);
};

// update user by id
export const updateUser = async (req, res) => {
  const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, { new: true });
  res.json(updatedUser);
};

// delete user by id
export const deleteUser = async (req, res) => {
  await User.findByIdAndDelete(req.params.id);
  res.json({ message: 'User deleted' });
};

// delete all users
export const deleteAllUsers = async (req, res) => {
  await User.deleteMany();
  res.json({ message: 'All users deleted' });
};