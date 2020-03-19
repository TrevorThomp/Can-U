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
      <p>Do you need help moving? mowing your lawn? setting up ikea furniture? There are not a lot of options to find handy help. Search for handy people across the nation!</p>
      <Login />
    </div>
  )
}

export default Splash;