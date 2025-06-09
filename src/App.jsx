import { useState } from 'react'
import './App.css'
import SearchForm from './SearchForm.jsx'
import Forecast from './Forecast.jsx'
import data from "./data/data.js"

function App() {

  return (
    <div className='header'>  
    <header>Weather Report</header>
    <SearchForm/>
    <Forecast data={data}/>
    </div>
  )
}

export default App
