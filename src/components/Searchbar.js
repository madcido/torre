import React from 'react';
import '../css/Searchbar.css';

function Searchbar() {
  return (
    <form className="searchbar row center justify-end">
      <input type="text" name="search-text" placeHolder="Search by skills" />
      <input type="radio" name="search-type" value="people" id="radio-people" />
      <label for="radio-people">People</label>
      <input type="radio" name="search-type" value="work" id="radio-work" />
      <label for="radio-work">Work</label>
      <input type="submit" value="SEARCH" />
    </form>
  );
}

export default Searchbar;
