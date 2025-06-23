// app.js ou server.js 
const express = require("express");
const bodyParser = require("body-parser");  
const indexRoutes = require("./routes/index");
const app = express();
const methodOverride = require('method-override');
const session = require('express-session');
 


require('dotenv').config();

// Middleware para ler dados de formulários
app.use(express.urlencoded({ extended: true }));

// Middleware para suportar PUT e DELETE via query (_method)
app.use(methodOverride('_method'));

app.set("view engine", "ejs");
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.static("public"));

 
//API
require('dotenv').config();
const { OpenAI } = require('openai');

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});



app.use(session({
  secret: process.env.SESSION_SECRET || 'defaultsecretEusouMaisEu',
  resave: false,
  saveUninitialized: false,
  cookie: { secure: false } // true apenas com HTTPS
}));


// Router
app.use("/", indexRoutes);
 


// Iniciar o servidor
const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Servidor rodando em http://localhost:${PORT}`);
});
 
 
 