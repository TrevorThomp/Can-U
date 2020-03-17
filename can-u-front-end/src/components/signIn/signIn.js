import React, { useState } from 'react';
import { connect } from 'react-redux';

const SignIn = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (e) => {
    console.log(e.target.name);
    switch(e.target.name){
      case 'username':
        setUsername(e.target.value);
        break;
      case 'password':
        setPassword(e.target.value);
        break;
    }
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log('signin', username, password);
  }

  const handleOauth = () => {

  }

  const handleLoginSwitch = () => {
    props.switchLogin('signup')
  }

  return (
    <div>
      <form onSubmit={handleFormSubmit}>
        <input
          placeholder="username"
          name="username"
          onChange={handleInputChange}
        />
        <input
          placeholder="password"
          name="password"
          onChange={handleInputChange}
        />
        <input type="submit" value="Log In" />
      </form>
      <p onClick={handleLoginSwitch} style={{ cursor:"pointer" }}>Not a member?.. click to sign up</p>
      <button onSubmit={handleOauth} >Login with Google</button>
      <button onSubmit={handleOauth} >Login with GitHub</button>
    </div>
  )
}

const mapStateToProps = state => ({
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleSignIn: () => dispatch(),
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SignIn);