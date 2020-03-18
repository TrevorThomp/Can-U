import React from 'react';

const Nav = props => {
  return(
    <div>
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