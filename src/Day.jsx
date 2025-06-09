import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./Day.css";

function Day({date, temperature, weather}) {
  return (
       <div className="day-container">
        <p>Date = {date}</p>
        <p className={temperature >= 60 ? "hot" : "cold"}>Temperature = {temperature}</p>
        <p>Weather = {weather}</p>
        </div>
  );
}

Day.PropTypes = {
    date: PropTypes.string.isRequired,
    temperature: PropTypes.string.isRequired,
    weather: PropTypes.string.isRequired
};

export default Day;