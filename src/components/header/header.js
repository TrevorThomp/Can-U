import React from "react";
import { connect } from 'react-redux';
import "./header.scss";

/**
 * Component to render header
 * @param {*} props 
 */
const Header = props => {
  return (
    <header>
      <h1>CanU</h1>
      {/* <h4>Hello, {props.login.user.username}</h4> */}
    </header>
  );
};

const mapStateToProps = state => ({
  login: state.login
});

export default connect(
  mapStateToProps,
)(Header);
