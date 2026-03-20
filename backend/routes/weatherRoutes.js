const express = require("express");
const router = express.Router();
const axios = require("axios");
const API_KEY = "4c501b332f3ec905766bf178f5e13548";

router.get("/:city", async (req, res) => {
  try {
    const city = req.params.city;

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    const response = await axios.get(url);

    res.json({
      city: response.data.name,
      temperature: response.data.main.temp,
      weather: response.data.weather[0].description
    });

  } catch (error) {
    res.status(500).json({ error: "Failed to fetch weather data" });
  }
});

module.exports = router;