const WeatherUndergroundNode = require("weather-underground-node");
require("dotenv").config();
const myApyKey = process.env.API_KEY;
const wunderground = new WeatherUndergroundNode(myApyKey);

async function getweather() {
	console.log("weathering");
	return await wunderground
		.PWSCurrentConditions("KORPORTL1801")
		.InImperialUnits()
		.requestSync();
}

module.exports = { getweather };
