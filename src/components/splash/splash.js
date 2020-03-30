import React from 'react';
import Login from '../login/login';
import './splash.scss';
import auction from './assets/001-auction.png';
import bid from './assets/002-bid.png';
import spyglass from './assets/004-spyglass.png';

/**
 * Component that renders a splash page that holds a login form and is shown if a users lands on the page without being logged in
 * @param {*} props 
 */
const Splash = props => {

  return (
    <div className="splashDiv">
      <p id="p">The premiere site for posting jobs you need done, and for finding jobs you would like to work on!</p>
      <ul>
        <li><img src={auction} alt="Small computer screen"/> Create a job, and let people bid to do that job for you!</li>
        <li><img src={bid} alt="Small hand holding object"/>Whoever bids the lowest amount of money to do that job, wins!</li>
        <li><img src={spyglass} alt="Microscope"/>Also look for jobs that you can do!</li>
      </ul>
      <Login />
    </div>
  )
}

export default Splash;