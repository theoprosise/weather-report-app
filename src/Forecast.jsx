import React from "react";
import ReactDOM from "react-dom";
import Day from "./Day";


function Forecast() {
  return (
        <div
            style = {{
                display: "flex",
                justifyContent: "space-around",
                flexWrap:"wrap",
            }}
            >
        <Day date="1-1-1" temperature="40" weather="Sunny" />
        <Day date="1-1-1" temperature="90" weather="Sunny" />
        <Day date="0-1-1" temperature="90" weather="Sunny" />
        <Day date="1-1-1" temperature="25" weather="Sunny" />
        <Day date="1-1-1" temperature="90" weather="Sunny" />
            </div>
  );
}

export default Forecast;