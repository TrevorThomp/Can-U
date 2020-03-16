import React from 'react';
import { Else, If, Then } from '../conditionals/conditionals';


const Login = props => {

  return (
    <View>
      <If condition={props.signUp === true}>
        <Then>
          <SignUp />
        </Then>
        <Else>
          <SignIn />
        </Else>
      </If>
    </View>
  )
}

export default Login;