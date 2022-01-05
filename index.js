const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("images"));
app.use(express.static(__dirname));

app.get("/", (req, res) => {
	// pre-process weather.js here, then serve the result
	// or specify a route like '/weather.js' and use a callback script from the web page
	res.sendFile("index.html");
});

app.get("/beans", (req, res) => {
	res.send("Hello Bill!");
});

app.listen(port, () => {
	console.log(`Tunneling Pi app listening at http://localhost:${port}`);
});
