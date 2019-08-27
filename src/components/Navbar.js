import React from 'react';
import Navlink from './Navlink';
import '../css/Navbar.css';

function Navbar() {
  return (
    <div className="navbar">
      <div className="container row justify-between center">
        <a className="logo" href='#'>torre</a>
        <div className="navlinks row">
          {links.map(link =>
            <Navlink icon={link.icon} label={link.label} anchor={link.anchor} />
          )}
        </div>
      </div>
    </div>
  );
}

export default Navbar;

const links = [
  {
    icon: 'mdiBullhorn',
    label: 'Post a job',
    anchor: '#',
  },
  {
    icon: 'mdiBriefcaseSearch',
    label: 'Get jobs/gigs',
    anchor: '#',
  },
  {
    icon: 'mdiAccount',
    label: 'Your bio',
    anchor: '#',
  },
  {
    icon: 'mdiHumanGreeting',
    label: 'Signals',
    anchor: '#',
  },
  {
    icon: 'mdiForum',
    label: 'Messages',
    anchor: '#',
  },
  {
    icon: 'mdiApps',
    label: 'All tools',
    anchor: '#',
  },
]
