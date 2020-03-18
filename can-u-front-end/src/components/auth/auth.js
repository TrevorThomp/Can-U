import jwt from 'jsonwebtoken';
import React from 'react';
import { connect } from 'react-redux';
import { If, Then } from '../conditionals/conditionals';

const Auth = props => {

    let okToRender = false;
    let user = {};

    try {      

      user = props.login.token
        ? jwt.verify(props.login.token, `sauce`)
        : {};

      okToRender =
        props.login.loggedIn &&
        (props.capability
          ? user.capabilities.includes(props.capability)
          : true);

    } catch (e) {}
    return (
      <If condition={okToRender}>
        <Then>
          <div>{props.children}</div>
        </Then>
      </If>
    );
}

const mapStateToProps = state => ({
  login: state.login
});

export default connect(
  mapStateToProps,
)(Auth);
