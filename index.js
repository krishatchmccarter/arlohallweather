const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("images"));
app.use(express.static(__dirname));

app.set("view engine", "pug");

app.get("/", (req, res) => {
	res.render("weather");
});

app.get("/hello", (req, res) => {
	res.send("<h1>I Love You, You developer you</h1>");
});

app.listen(port, () => {
	console.log(`Tunneling Pi app listening at http://localhost:${port}`);
});
