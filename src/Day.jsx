import React from "react";
import ReactDOM from "react-dom";
import PropTypes from "prop-types";
import "./Day.css";

function Day({date, temperature, weather, icon}) {
  return (
       <div className="day-container">
        <h2>{date}</h2>
        <img src={`http://openweathermap.org/img/wn/${icon}.png`}/>
        <p className={temperature >= 60 ? "hot" : "cold"}>{temperature}</p>
        <p>{weather}</p>
        </div>
  );
}

Day.PropTypes = {
    date: PropTypes.string.isRequired,
    temperature: PropTypes.string.isRequired,
    weather: PropTypes.string.isRequired
};

export default Day;