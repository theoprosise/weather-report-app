import { useState } from 'react'
import './App.css'
import SearchForm from './SearchForm.jsx'
import Forecast from './Forecast.jsx'
import data from "./data/data.js"

function App() {
  let [city, setCity] = useState("Austin");
  let [weatherData, setWeather] = useState({});

  return (
    <div className='header'>  
    <header>Weather Report</header>
    <SearchForm onCityChange={handleCityChange}/>
    <Forecast data={data}/>
    </div>
  )
}

function handleCityChange(newCity){
  setCity(newCity);
}

export default App
