import React, { useState } from 'react';
import { Else, If, Then } from '../conditionals/conditionals';
import SignIn from '../signIn/signIn';
import SignUp from '../signUp/signUp';

const Login = props => {
  const [loginType, setLoginType] = useState('signin');

  const switchLogin = (type) => {
    setLoginType(type);
  }

  return (
    <div>
      <If condition={loginType === 'signup'}>
        <Then>
          <SignUp switchLogin={switchLogin} />
        </Then>
        <Else>
          <SignIn switchLogin={switchLogin} />
        </Else>
      </If>
    </div>
  )
}

export default Login;