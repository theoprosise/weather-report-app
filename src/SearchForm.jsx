import React from "react";
import ReactDOM from "react-dom";

function SearchForm() {
  return (
        <form id="search-form-bar">
            <input type="search" name="query" placeholder="Location..."></input>
            <button type="submit">Submit</button>
        </form>
  );
}

export default SearchForm;
