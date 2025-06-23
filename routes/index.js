const express = require('express');
const router = express.Router();
const homeRoutes = require('./homeRoutes');  
const adminRoutes = require('./adminRoutes'); 
const userRoutes = require('./userRoutes'); 
const authRoutes = require('./authRoutes'); 
 
 

router.use('/', homeRoutes);
router.use('/', adminRoutes);
router.use('/', userRoutes);
router.use('/', authRoutes);
 

 



module.exports = router;