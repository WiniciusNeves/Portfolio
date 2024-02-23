// Importando as bibliotecas 'sequelize' e 'express'
const express = require('express')
const router = require('./router')
const bodyparser = require('body-parser')
const path = require('path');
const publicPath = path.join('./public');

const app = express()
app.use(bodyparser.urlencoded({ extended: true }));
app.use(bodyparser.json())

app.use(express.json());


app.use(router);
app.use(express.static(publicPath));

const port = 3000

app.listen(port, () => {
  console.log(`Rotando na porta ${port} ou aqui esta o server http://localhost:3000`)
})