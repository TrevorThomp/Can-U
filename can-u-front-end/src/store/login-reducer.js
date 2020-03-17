import cookie from "react-cookies";

const cookieToken = cookie.load("auth");
const token = cookieToken || null;

const initialState = {
  token: token,
  loggedIn: !!token
};

export default (state = initialState, action) => {
  let { type, payload } = action;

  switch (type) {
    case "LOGIN":
      return {
        token: payload.data,
        loggedIn: payload.loggedIn,
      }
    default:
      return state;
  }
};
