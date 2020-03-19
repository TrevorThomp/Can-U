import React from 'react';
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
      </ul>
    </div>
  )
};

export default Nav;