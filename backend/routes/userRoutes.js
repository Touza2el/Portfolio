import express from 'express';

import auth from '../middlewares/auth.js';

import {
  registerUser,
  loginUser,
  logoutUser,
} from '../controllers/userController.js';

const router = express.Router();

router.route('/').post(registerUser); // Register Route
router.route('/login').post(loginUser); // Login Route
router.route('/logout').get(auth, logoutUser); // Logout Route

export default router;
