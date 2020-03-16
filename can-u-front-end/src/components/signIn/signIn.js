import React, { useState } from 'react';


const SignIn = props => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  const handleInputChange = (e) => {
    if(e.target.name === 'username') setUsername(e.target.value);
    if(e.target.name === 'password') setPassword(e.target.value);
  }

  const handleFormSubmit = (e) => {

  }

  const handleOauth = () => {

  }

  return (
    <>
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
    </>
  )
}

export default SignIn;