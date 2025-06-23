// middlewares/authMiddleware.js

function isAuthenticated(req, res, next) {
  if (req.session && req.session.userId) {
    return next();
  }
  return res.redirect("/login");
}

function isAdmin(req, res, next) {
  if (req.session && req.session.userId && req.session.role === 'admin') {
    console.log("Admin");
    return next();
  }
  return res.status(403).send("Acesso negado: apenas administradores.");
}

module.exports = { isAuthenticated, isAdmin };
