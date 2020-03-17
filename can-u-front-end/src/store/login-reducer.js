import cookie from "react-cookies";

const cookieToken = cookie.load("auth");
const token = cookieToken || null;

const initialState = {
  token: token,
  loggedIn: !!token,
  signupStatus: null
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "LOGIN":
      return {
        token: payload.data,
        loggedIn: payload.loggedIn,
      }
    case "SIGN_UP_SUCCESS":
      return {
        token: payload,
        loggedIn: true,
      }
      case "SIGN_UP_FAIL":
        return {
          signupStatus: payload,
        }
    default:
      return state;
  }
};
