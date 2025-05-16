const express = require('express');
const router = express.Router();
const { auth } = require('../middleware/auth');
const { checkRole } = require('../middleware/roleMiddleware');
const {
  getAllUsers,
  getProfile,
  updateProfile,
  updateUserRole,
  deleteUser
} = require('../controllers/userController');

// Routes accessible by both users and admins
router.get('/profile', auth, getProfile);
router.put('/profile', auth, updateProfile);

// Admin only routes
router.get('/users', auth, checkRole(['admin']), getAllUsers);
router.put('/users/:id/role', auth, checkRole(['admin']), updateUserRole);
router.delete('/users/:id', auth, checkRole(['admin']), deleteUser);

module.exports = router; 