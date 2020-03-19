import React from 'react';
import LogOut from '../logout/logout';
import './nav.scss';

/**
 * Component that renders a navigation bar
 * @param {*} props 
 */
const Nav = props => {
  return(
    <div id="nav">
      <ul>
        <li>
          <span onClick={() => props.setScreen('dashboard')}>Dashboard</span>
        </li>
        <li>
          <span onClick={() => props.setScreen('main')}>Main</span>
        </li>
        <li>
          <LogOut />
        </li>
      </ul>
    </div>
  )
};

export default Nav;