import React from 'react';
import Navlink from './Navlink';
import '../css/Navbar.css';
import { links } from '../data/links.js';

function Navbar() {
  return (
    <div className="navbar">
      <div className="container row justify-between center">
        <a className="logo" href='#'>torre</a>
        <div className="navlinks row">
          {links.map(link =>
            <Navlink icon={link.icon} label={link.label} anchor={link.anchor} key={links.indexOf(link)} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;
