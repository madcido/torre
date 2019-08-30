import React from 'react';
import '../css/Navbar.css';
import Navlink from './Navlink';
import BurgerMenu from './BurgerMenu';
import { links } from '../data/links.js';

function Navbar() {
  return (
    <div className="navbar">
      <div className="container row justify-between center">
        <a className="logo" href='https://www.torre.co/home'>torre</a>
        <div className="navlinks row">
          {links.map(link =>
            <Navlink icon={link.icon} label={link.label} anchor={link.anchor} key={links.indexOf(link)} />
          )}
        </div>
        <BurgerMenu links={links} />
      </div>
    </div>
  );
}

export default Navbar;
