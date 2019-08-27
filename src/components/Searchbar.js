import React from 'react';
import '../css/Searchbar.css';

function Searchbar() {
  return (
    <form className="searchbar row center justify-end">
      <input type="text" name="search-text" placeholder="Search by skills" />
      <input type="radio" name="search-type" value="people" id="radio-people" />
      <label htmlFor="radio-people">People</label>
      <input type="radio" name="search-type" value="work" id="radio-work" />
      <label htmlFor="radio-work">Work</label>
      <input type="submit" value="SEARCH" />
    </form>
  );
}

export default Searchbar;
