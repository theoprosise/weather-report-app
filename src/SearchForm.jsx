import React from "react";
import ReactDOM from "react-dom";





function SearchForm( {onCityChange}) {

  function handleSubmit(event){
  event.preventDefault();
  let city = event.target.elements.query.value;
  onCityChange(city);
  event.target.reset();
  
}

  return (
        <form id="search-form-bar" onSubmit={handleSubmit}>
            <input type="search" name="query" placeholder="Location..."></input>
            <button type="submit">Submit</button>
        </form>
  );
}



export default SearchForm;
