// Load env varoables
require('dotenv').config();
// Get the dependencies

const express = require('express'),
	  app = express(),
	  path = require('path'),
	  mongoose = require('mongoose'),
	  port = process.env.PORT || 4200,
	  expressLayouts = require('express-ejs-layouts');


//Look for static assets
app.use(express.static(path.join(__dirname, '/public')));

// Set ejs as ejs engine
app.set("view engine", "ejs");
app.use(expressLayouts);

//COnnect to mongodb
mongodb://sadmin:Munnabhai1$@ds151431.mlab.com:51431/olympic-events



// Routes
app.use(require('./app/routes'));

//////////////////////
// Start the server //
//////////////////////
app.listen(port, () => {
	console.log(`Server started on http://localhost:${port}`);
});