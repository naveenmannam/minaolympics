const express = require('express');
var app = express();
var port = process.env.PORT || 8000;

app.get("/", (req, res) => {
	res.send("This is the home page!!!");
});

app.listen(port, () => {
	console.log(`Server started on http://localhost:${port}`);
});