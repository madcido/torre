import React from 'react';
import '../css/BurgerMenu.css';
import Navlink from './Navlink';

class BurgerMenu extends React.Component {
  componentDidMount() {
    document.addEventListener('click', this.toggleMenu);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.toggleMenu);
  }

  toggleMenu(event) {
    if (event.target.classList.contains('burger-menu')) {
      document.querySelector('.burger-menu').classList.toggle('open');
      document.querySelector('.menu').classList.toggle('show');
    } else {
      document.querySelector('.burger-menu').classList.remove('open');
      document.querySelector('.menu').classList.remove('show');
    }
  }

  render() {
    return (
      <div className='burger-menu'>
        <span></span>
        <span></span>
        <span></span>
        <div className="menu col center">
          {this.props.links.map(link =>
            <Navlink icon={link.icon} label={link.label} anchor={link.anchor} key={this.props.links.indexOf(link)} />
          )}
        </div>
      </div>
    );
  }
}

export default BurgerMenu;
