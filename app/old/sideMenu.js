import React from "react";
import Link from 'next/link'
import { stack as Menu } from "react-burger-menu";

var styles = {
  bmBurgerButton: {
    position: 'absolute',
    width: '32px',
    height: '26px',
    right: '26px',
    top: '25px'
  },
  bmBurgerBars: {
    background: '#e50273'
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

  <Menu right styles={ styles }>
        <a id="home" className="menu-item" href="/">Home</a>
        <a id="create" className="menu-item" href="/create">Add activity</a>
        <a id="contact" className="menu-item" href="/contact">My activities</a>
        <a id="contact" className="menu-item" href="/contact">Logout</a>

        <Link href="/create">
          <button type="button" className="cta">Add activity</button>
        </Link>

  </Menu>
);

export default SideMenu;