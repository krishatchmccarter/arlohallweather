const WeatherUndergroundNode = require("weather-underground-node");
require("dotenv").config();
const myApyKey = process.env.API_KEY;
const wunderground = new WeatherUndergroundNode(myApyKey);

wunderground
	.PWSCurrentConditions("KORPORTL1801")
	.InImperialUnits()
	.request(function (err, response) {
		const weatherData = response.observations[0];
		console.log(weatherData.imperial.temp);
	});
