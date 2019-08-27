import React from 'react';
import '../css/Header.css';
import Searchbar from './Searchbar';

function Header() {
  return (
    <div className="header">
      <div className="container">
        <div className="header-card">
          <h1>A new professional network that is fun, and useful.</h1>
          <p>With automagical AI-powered to search, filter, rank, and process jobs, gigs, and internships.</p>
          <Searchbar />
        </div>
      </div>
    </div>
  );
}

export default Header;
