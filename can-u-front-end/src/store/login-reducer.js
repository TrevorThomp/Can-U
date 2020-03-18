import cookie from "react-cookies";
import jwt from 'jsonwebtoken';

const cookieToken = cookie.load("auth");
const token = cookieToken || null;


const initialState = {
  token: token,
  loggedIn: !!token,
  signupStatus: null,

  user: '',

};

export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case "LOGIN":
      console.log('reducer payload', payload);

      return {
        token: payload.data,
        loggedIn: payload.loggedIn,
        // user: jwt.verify(payload.data, `sauce`)
      }
    case "SIGN_UP_SUCCESS":
      return {
        token: payload,
        loggedIn: true,

        // user: jwt.verify(payload, `sauce`)

      }
      case "SIGN_UP_FAIL":
        return {
          signupStatus: payload,
        }
    default:
      return state;
  }
};
