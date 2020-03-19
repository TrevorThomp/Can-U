import React from 'react';
import Login from '../login/login';

/**
 * Component that renders a splash page that holds a login form and is shown if a users lands on the page without being logged in
 * @param {*} props 
 */
const Splash = props => {

  return (
    <div>
      <h1>Welcome to Can-U</h1>
      <p>This is some information describing our app blah blah blah blahblah blah blahblah blahblahblahblahblahblahblahblah blah</p>
      <Login />
    </div>
  )
}

export default Splash;