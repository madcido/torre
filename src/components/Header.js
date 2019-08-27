import React from 'react';
import '../css/Header.css';

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header-card">
          <h1>A new professional network that is fun, and useful.</h1>
          <p>With automagical AI-powered to search, filter, rank, and process jobs, gigs, and internships.</p>
          <form className="searchbar row center justify-end">
            <input type="text" name="search-text" placeHolder="Search by skills" />
            <input type="radio" name="search-type" value="people" id="radio-people" />
            <label for="radio-people">People</label>
            <input type="radio" name="search-type" value="work" id="radio-work" />
            <label for="radio-work">Work</label>
            <input type="submit" value="SEARCH" />
          </form>
        </div>
      </div>
    </div>
  );
}

export default Header;
