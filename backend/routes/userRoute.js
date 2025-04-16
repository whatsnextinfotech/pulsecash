import express from 'express';
import {
  createUser,
  getAllUsers,
  getUserById,
  updateUser,
  deleteUser
} from '../controller/userController.js';

const router = express.Router();

// POST: Create user
router.post('/users', createUser);

// GET: Get all users
router.get('/users', getAllUsers);

// GET: Get user by ID
router.get('/users/:id', getUserById);

// PUT: Update user
router.put('/users/:id', updateUser);

// DELETE: Delete user
router.delete('/users/:id', deleteUser);

export default router;
