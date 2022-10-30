const express = require("express");

const app = express();
const port = 3002;

app.use(express.static("images"));
app.use(express.static(__dirname));

app.set("view engine", "pug");

app.get("/", (req, res) => {
	res.render("layout");
});

app.get("/weather", async (req, res) => {
	const weatherRoutes = require("./routes/weather");

	let data = await weatherRoutes.getweather();
	let stationinfo = data.observations[0];
	console.log(stationinfo);

	res.render("weather", stationinfo);
});

app.listen(port, () => {
	console.log(`Tunneling Pi app listening at http://localhost:${port}`);
});
