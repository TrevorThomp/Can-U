import React, { useState } from 'react';


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
      <button onSubmit={handleOauth} >Login with Google</button>
      <button onSubmit={handleOauth} >Login with GitHub</button>
    </div>
  )
}

export default SignIn;