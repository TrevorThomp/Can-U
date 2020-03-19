import React from 'react';
import Login from '../login/login';
import './splash.scss';

/**
 * Component that renders a splash page that holds a login form and is shown if a users lands on the page without being logged in
 * @param {*} props 
 */
const Splash = props => {

  return (
    <div className="splashDiv">
      <h1>Welcome to Can-U</h1>
      <p>Description Here</p>
      <Login />
    </div>
  )
}

export default Splash;