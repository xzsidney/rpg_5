// routes/userRoutes.js
const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const { isAuthenticated } = require('../middlewares/authMiddleware');

// Página de cadastro
router.get('/register', userController.registerPage);
router.post('/register', userController.registerUser);

// Página de perfil
router.get('/profile', isAuthenticated, userController.profile);

// Atualizar dados do usuário
router.get('/profile/update', isAuthenticated, userController.editPage);
router.post('/profile/update', isAuthenticated, userController.updateProfile);

router.post('/profile/delete', isAuthenticated, userController.deleteAccount);

module.exports = router;
