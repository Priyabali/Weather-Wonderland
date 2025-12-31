import React, { useState } from "react";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import "./Weather.css";

export default function SearchBox({ updateInfo }) {
  const [city, setCity] = useState("");

  const API_URL = "https://api.openweathermap.org/data/2.5/weather";
  const API_KEY = "b0429534beae98b964c2293982ad1b29";

  const getWeatherInfo = async () => {
    if (!city) return;

    try {
      const response = await fetch(
        `${API_URL}?q=${city}&appid=${API_KEY}&units=metric`
      );

      if (!response.ok) throw new Error("City not found or API error");

      const data = await response.json();
      const result = {
        city: data.name,
        temp: data.main.temp,
        tempMin: data.main.temp_min,
        tempMax: data.main.temp_max,
        feelslike: data.main.feels_like,
        humidity: data.main.humidity,
        weather: data.weather[0].main,
        description: data.weather[0].description,
      };

      updateInfo(result);
    } catch (error) {
      alert("City not found or API error!");
      updateInfo(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    getWeatherInfo();
    setCity("");
  };

  return (
    <div className="search-box">
      <form onSubmit={handleSubmit}>
        <TextField
          label="Enter City"
          variant="outlined"
          required
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <Button variant="contained" type="submit">
          Search
        </Button>
      </form>
    </div>
  );
}
