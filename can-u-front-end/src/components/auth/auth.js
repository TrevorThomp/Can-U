import React from 'react';
import jwt from 'jsonwebtoken';
import {connect} from 'react-redux';

const If = props => {
  return !!props.condition ? props.children : null;
};

class Auth extends React.Component {
  static contextType = LoginContext;

  render() {
    let okToRender = false;
    let user = {};

    try {
      user = this.context.token
        ? jwt.verify(this.context.token, `supersecret`)
        : {};

      okToRender =
        props.auth.loggedIn &&
        (this.props.capability
          ? user.capabilities.includes(this.props.capability)
          : true);
    } catch (e) {}

    return (
      <If condition={okToRender}>
        <div>{this.props.children}</div>
      </If>
    );
  }
}

const mapStateToProps = state => {
  auth: state.auth
}

export default connect(Auth, mapStateToProps);
