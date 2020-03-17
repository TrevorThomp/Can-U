import React from 'react';
import { Else, If, Then } from '../conditionals/conditionals';
import SignIn from '../signIn/signIn';
import SignUp from '../signUp/signUp';

const Login = props => {

  return (
    <div>
      <If condition={props.signUp === true}>
        <Then>
          <SignUp />
        </Then>
        <Else>
          <SignIn />
        </Else>
      </If>
    </div>
  )
}

export default Login;