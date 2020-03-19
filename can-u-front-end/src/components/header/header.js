import React from "react";
import { Link } from "react-router-dom";
import "./header.scss";

/**
 * Component to render header
 * @param {*} props 
 */
const Header = props => {
  return (
    <header>
      <h1>CanU</h1>
      <nav>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/stuff">My Jobs</Link>
          </li>
          <li>
            <Link to="/stuff">Create a job</Link>
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;