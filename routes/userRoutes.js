// routes/userRoutes.js
const express = require('express');
const { registerValidation, loginValidation } = require('../middlewares/validationMiddleware');
const { registerUser, loginUser } = require('../controllers/userController');

const router = express.Router();

// Register route
router.post('/register', registerValidation, registerUser);

// Login route
router.post('/login', loginValidation, loginUser);

module.exports = router;
