const WeatherUndergroundNode = require("weather-underground-node");
require("dotenv").config();
const myApyKey = process.env.API_KEY;
const wunderground = new WeatherUndergroundNode(myApyKey);

// wunderground
// 	.PWSCurrentConditions("KORPORTL1801")
// 	.InImperialUnits()
// 	.request(function (err, response) {
// 		const weatherData = response.observations[0];
// 		console.log(weatherData);
// 	});

(async function () {
	const result = await wunderground
		.PWSCurrentConditions("KORPORTL1801")
		.InImperialUnits()
		.requestSync();
	console.log(result.observations[0].imperial);
})();
