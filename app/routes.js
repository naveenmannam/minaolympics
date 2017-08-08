const express = require('express'),
      router = express.Router(),
      mainController = require('./controllers/main.controller.js');

module.exports = router;

router.get("/", mainController.showHome);

router.get("/about", mainController.showAbout);

