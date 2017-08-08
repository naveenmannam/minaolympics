const express = require('express');
var app = express();
var port = process.env.PORT || 8000;


app.use(require('./app/routes'));

app.listen(port, () => {
	console.log(`Server started on http://localhost:${port}`);
});