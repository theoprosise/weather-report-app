import { useState } from 'react'
import reactLogo from './assets/react.svg'
import './App.css'
import SearchForm from './SearchForm'
import Forecast from './Forecast'


function App() {

  return (
    <div className='header'>  
    <header>Weather Report</header>
    <SearchForm/>
    <Forecast/>
    </div>
  )
}

export default App
