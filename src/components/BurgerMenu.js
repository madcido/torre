import React from 'react';
import '../css/BurgerMenu.css';
import Navlink from './Navlink';

class BurgerMenu extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      openMenu: false,
    }
    this.icon = React.createRef();
    this.toggleMenu = this.toggleMenu.bind(this);
  }
  
  componentDidMount() {
    document.addEventListener('click', this.toggleMenu);
  }

  componentWillUnmount() {
    document.removeEventListener('click', this.toggleMenu);
  }

  toggleMenu(event) {
    if (event.target === this.icon.current) {
      this.setState(prevState => ({
        openMenu: !prevState.openMenu,
      }));
    } else {
      this.setState({
        openMenu: false,
      });
    }
  }

  render() {
    let open = this.state.openMenu;
    return (
      <div className={`burger-menu ${open ? 'open' : null}`} ref={this.icon}>
        <span></span>
        <span></span>
        <span></span>
        <div className={`menu col center ${open ? 'show' : null}`}>
          {this.props.links.map((link, index) =>
            <Navlink icon={link.icon} label={link.label} anchor={link.anchor} key={index} />
          )}
        </div>
      </div>
    );
  }
}

export default BurgerMenu;
