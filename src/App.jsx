import { useState, useEffect } from "react";
import "./App.css";
import SearchForm from "./SearchForm.jsx";
import Forecast from "./Forecast.jsx";
import data from "./data/data.js";

function App() {
  let [city, setCity] = useState("Austin");
  let [weatherData, setWeatherData] = useState({});

  const fetchData = async () => {
    const apiKey = import.meta.env.VITE_APP_API_KEY;
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`
    );
    const data = await response.json();
    console.log(data)
    setWeatherData(data);
  };

  useEffect(() => {
    if (city) {
      fetchData();
    }
  }, [city]);

  return (
    <div className="header">
      <header>Weather Report</header>
      <SearchForm onCityChange={handleCityChange} />
      <Forecast city={city} data={weatherData} />
    </div>
  );

  function handleCityChange(newCity) {
    setCity(newCity);
  }
}

export default App;
