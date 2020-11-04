import asyncHandler from 'express-async-handler';

import User from '../models/userModel.js';

// Register
const registerUser = asyncHandler(async (req, res) => {
  const user = new User(req.body);
  if (user) {
    await user.save();
    const token = await user.generateAuthToken();
    res.status(201).send({
      message: 'User Created',
      user: { _id: user._id, name: user.name, email: user.email },
      token: token,
    });
  } else {
    res.status(400).send(Error);
  }
});

// Login
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  const user = await User.findByCredentials(email, password);
  if (user) {
    const token = await user.generateAuthToken();
    res.send({
      message: 'Logged In',
      user: { _id: user._id, name: user.name, email: user.email },
      token: token,
    });
  } else {
    res.status(401).send(Error);
  }
});

// Logout
const logoutUser = async (req, res) => {
  try {
    req.user.tokens = [];
    await req.user.save();
    res.send('User Logged Out');
  } catch (error) {
    res.status(500).send('Server Error');
  }
};

export { registerUser, loginUser, logoutUser };
