const WeatherUndergroundNode = require("weather-underground-node");
require("dotenv").config();
const myApyKey = process.env.API_KEY;
const wunderground = new WeatherUndergroundNode(myApyKey);

wunderground
	.PWSCurrentConditions("KORPORTL1801")
	.InImperialUnits()
	.request(function (err, response) {
		console.log(response.observations[0].imperial.temp);
	});
