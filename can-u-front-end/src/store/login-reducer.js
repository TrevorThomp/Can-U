import jwt from 'jsonwebtoken';
import cookie from "react-cookies";

const cookieToken = cookie.load("auth");
const token = cookieToken || null;

const initialState = {
  token: token,
  loggedIn: !!token,
  signupStatus: null,
  loginStatus: null,
  user: (token) ? jwt.verify(token, 'sauce') : null,
};

/**
 * Reducer for login state
 * @param {object} state
 * @param {object} action
 */
export default (state = initialState, action) => {
  let { type, payload } = action;
  switch (type) {
    case "LOGIN":
      let userInfo;
      if(payload.data){
        userInfo = jwt.verify(payload.data, `sauce`);
      }else {
        userInfo = null;
      }
      return {
        token: payload.data,
        loggedIn: payload.loggedIn,
        loginStatus: payload.loginStatus,
        user: userInfo
      }
    case "SIGN_UP_SUCCESS":
      return {
        token: payload,
        loggedIn: true,
        user: jwt.verify(payload, `sauce`) || null

      }
      case "SIGN_UP_FAIL":
        return {
          signupStatus: payload,
        }
      case "LOGOUT":
        cookie.remove('auth');
        return {
          token: null,
          loggedIn: false,
          signupStatus: null,
          loginStatus: null,
          user: '',
        }
    default:
      return state;
  }
};
