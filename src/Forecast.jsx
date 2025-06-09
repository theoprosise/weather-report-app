import React from "react";
import ReactDOM from "react-dom";
import Day from "./Day";
import { parseForecastData } from "./utils/utils";
import PropTypes from "prop-types";

function Forecast({data}) {

  let parsedData = parseForecastData(data);
  return (
        <div
            style = {{
                display: "flex",
                justifyContent: "space-around",
                flexWrap:"wrap",
            }}
            >
        {parsedData.map(day => (
            //console.log(day),
            <div className="date-forecast-key" key={day.date}>
            <Day date={day.date} temperature={day.temperature} weather={day.weather} icon={day.icon}/>
            </div>
        ))}
        
            </div>
  );
}

Forecast.PropTypes = {
    data: PropTypes.object,
}

export default Forecast;