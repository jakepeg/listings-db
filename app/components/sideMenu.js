import React from "react";
import auth0 from '../services/auth0'
import { stack as Menu } from "react-burger-menu";

var styles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '32px',
    height: '26px',
    right: '26px',
    top: '20px'
  },
  bmBurgerBars: {
    background: '#ffffff'
  },
  bmBurgerBarsHover: {
    background: '#a90000'
  },
  bmCrossButton: {
    height: '24px',
    width: '24px'
  },
  bmCross: {
    background: '#bdc3c7'
  },
  bmMenuWrap: {
    position: 'fixed',
    height: '100%',
    top: '-0px'
  },
  bmMenu: {
    background: '#373a47',
    padding: '2.5em 1.5em 0',
    fontSize: '1.15em'
  },
  bmMorphShape: {
    fill: '#373a47'
  },
  bmItemList: {
    color: '#b8b7ad',
    padding: '0.8em'
  },
  bmItem: {
    display: 'inline-block'
  },
  bmOverlay: {
    background: 'rgba(0, 0, 0, 0)'
  }
}

const SideMenu = () => (

  <Menu className="burger" right styles={ styles }>
        <a className="menu-item" href="/">Home</a>
        <a className="menu-item" href="/create">Add activity</a>
        <a className="menu-item" href="/my-activities">My activities</a>
        <a className="menu-item" onClick={auth0.logout}>Logout</a>
  </Menu>
);

export default SideMenu;