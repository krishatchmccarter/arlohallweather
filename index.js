const express = require("express");
const app = express();
const port = 3000;

app.use(express.static("images"));
app.use(express.static(__dirname));

app.get("/", (req, res) => {
	const WeatherUndergroundNode = require("weather-underground-node");
	require("dotenv").config();
	const myApyKey = process.env.API_KEY;
	const wunderground = new WeatherUndergroundNode(myApyKey);

	wunderground
		.PWSCurrentConditions("KORPORTL1801")
		.InImperialUnits()
		.request(function (err, response) {
			const weatherData = response.observations[0];
			console.log(weatherData);
			res.send(weatherData);
		});
});

app.get("/hello", (req, res) => {
	res.send("<h1>I Love You, You developer you</h1>");
});

app.listen(port, () => {
	console.log(`Tunneling Pi app listening at http://localhost:${port}`);
});
