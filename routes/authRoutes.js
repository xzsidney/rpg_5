// routes/authRoutes.js
const express = require('express');
const router = express.Router();
const authController = require('../controllers/authController');

// Exibir página de login
router.get('/login', authController.loginPage);

// Realizar login (POST)
router.post('/login', authController.login);

// Fazer logout
router.get('/logout', authController.logout);

module.exports = router;
