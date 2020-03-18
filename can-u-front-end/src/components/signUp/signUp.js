import React, { useState } from 'react';
import { connect } from 'react-redux';
import * as actions from '../../store/action';

const SignUp = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [email, setEmail] = useState('');


  const handleInputChange = (e) => {
    switch(e.target.name){
      case 'username':
        setUsername(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
      case 'email':
        setEmail(e.target.value);
        break;
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('signup', username, email, password);
    const body = {
      username: username,
      password: password,
      email: email,
    }
    props.handleSignUp(body);
  }

  const handleLoginSwitch = () => {
    props.switchLogin('signin')
  }
  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <label>
          <input
            placeholder="email"
            name="email"
            onChange={handleInputChange}
          />
        </label>
        <label>
          <input
            placeholder="username"
            name="username"
            onChange={handleInputChange}
          />
        </label>
        <label>
          <input
            placeholder="password"
            name="password"
            onChange={handleInputChange}
          />
        </label>
        <input type="submit" value="Sign Up" />
      </form>
      <p>{props.login.signupStatus}</p>
      <p onClick={handleLoginSwitch} style={{ cursor:"pointer" }}>Already a member?.. click to login</p>
    </div>
  )
}

const mapStateToProps = state => ({
  login: state.login
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleSignUp: data => dispatch(actions.signUpFetch(data)),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignUp);
