// routes/homeRoutes.js
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => {
  res.render('home/index', {
    title: 'Bem-vindo ao SaberQuest',
    user: req.session.user || null  
  });
});

router.get('/dashboardUser', (req, res) => {
  res.render('home/indexUser', {
    title: 'Bem-vindo ao SaberQuest',
    user: req.session.user || null  
  });
});

router.get('/dashboardTeacher', (req, res) => {
  res.render('home/indexTeacher', {
    title: 'Bem-vindo ao SaberQuest',
    user: req.session.user || null  
  });
});


router.get('/play', (req, res) => {
  res.render('game/play', {
    title: 'Bem-vindo ao SaberQuest',
    user: req.session.user || null  
  });
});

module.exports = router;
