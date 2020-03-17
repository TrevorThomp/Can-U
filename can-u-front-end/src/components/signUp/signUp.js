import React, { useState } from 'react';


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
  }

  const handleOauth = () => {

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
        <input type="submit" value="Log In" />
      </form>
      <p onClick={handleLoginSwitch} style={{ cursor:"pointer" }}>Already a member?.. click to login</p>
      <button onSubmit={handleOauth} >Signup with Google</button>
      <button onSubmit={handleOauth} >Signup with GitHub</button>
    </div>
  )
}

export default SignUp;