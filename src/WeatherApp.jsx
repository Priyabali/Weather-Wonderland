

import React, { useState } from "react";
import SearchBox from "./SearchBox";
import InfoBox from "./InfoBox";
import "./Weather.css";

export default function WeatherApp() {
  const [weatherData, setWeatherData] = useState({
    city: "Pune",
    temp: 25.05,
    tempMin: 25.05,
    tempMax: 25.05,
    feelslike: 24.84,
    humidity: 47,
    weather: "Haze",
  });

  const updateInfo = (newInfo) => {
    if (newInfo) setWeatherData(newInfo);
  };

  return (
    <div className="weather-container">
      <h1 className="weather-heading">Weather Wonderland</h1>
      <SearchBox updateInfo={updateInfo} />
      <InfoBox info={weatherData} />
    </div>
  );
}
