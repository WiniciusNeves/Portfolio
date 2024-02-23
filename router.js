const path = require('path');
const express = require('express');
const router = express.Router();
const server = require('./app');
const bodyparser = require('body-parser')

router.get('/', (req, res) => {
  const htmlPath = path.resolve("./views/index.html");
  res.sendFile(htmlPath);
});

router.get('/curriculum', (req, res) => {
  const htmlPath = path.resolve("./views/curriculum.html");
  res.sendFile(htmlPath);
})

router.get('/Projects', (req, res) => {
  const htmlPath = path.resolve("./views/projects.html");
  res.sendFile(htmlPath);
})
router.get('/GitHub', (req, res) => {
  const htmlPath = path.resolve("./views/github.html");
  res.sendFile(htmlPath);
})
router.get('/Contact', (req, res) => {
  const htmlPath = path.resolve("./views/contact.html");
  res.sendFile(htmlPath);
})

module.exports = router;