// controllers/authController.js
const { User } = require('../models');
const bcrypt = require('bcrypt');

const authController = {
  loginPage: (req, res) => {
    res.render('auth/login', { title: 'Login', error: null ,user: null  }); 
  },

  login: async (req, res) => {
    const { username, password } = req.body;

    try {
      const user = await User.findOne({ where: { username } });

      if (!user) {
        return res.render('auth/login', { error: 'Usuário não encontrado', title: 'Login' });
      }

      const match = await bcrypt.compare(password, user.password);
      if (!match) {
        return res.render('auth/login', { error: 'Senha incorreta', title: 'Login' });
      }

      // Armazena dados na sessão
      req.session.userId = user.id;
      req.session.role = user.role;
      req.session.user = {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role
      };

      // Redireciona com base na função
      if (user.role === 'admin') {
        return res.redirect('/admin/dashboard');
      } else if (user.role === 'teacher') {
        return res.redirect('/dashboardTeacher');
      } else {
        return res.redirect('/dashboardUser');
      }

    } catch (error) {
      console.error(error);
      res.status(500).send('Erro ao fazer login');
    }
  },

  logout: (req, res) => {
    req.session.destroy(() => {
      res.redirect('/login');
    });
  }
};

module.exports = authController;
