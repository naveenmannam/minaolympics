//////////////////////////////
// Getting the dependencies //
//////////////////////////////
const express = require('express'),
      router = express.Router(),
      mainController = require('./controllers/main.controller.js'),
      eventsController = require('./controllers/events.controller');

// Exporting the router //
module.exports = router;


///////////////////
// Define routes //
///////////////////

// Main Route

router.get("/", mainController.showHome);


// Events Route

router.get("/events", eventsController.showEvents);
router.get("/events/:slug", eventsController.showSingle);

