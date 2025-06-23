// routes/adminRoutes.js
const express = require('express');
const router = express.Router();
const adminController = require('../controllers/adminController');
const { isAdmin } = require('../middlewares/authMiddleware');
router.get('/admin/dashboard', isAdmin,  adminController.dashboard);
router.get('/admin/users',  isAdmin ,  adminController.listUsers);
router.get('/admin/users/:id', isAdmin , adminController.userDetails);


/*
router.get('/admin/dashboard', isAdmin, adminController.dashboard);
router.get('/admin/users', isAdmin, adminController.listUsers);
router.get('/admin/users/:id', isAdmin, adminController.userDetails);
*/
module.exports = router;
