import { callAPI, callAPIBasic, callAPISignUp } from "../lib/api";

let todoAPI = "https://dry-shore-68165.herokuapp.com";

export const _getJobs = () => dispatch => {
  return callAPI(`${todoAPI}/jobs`, "GET")
    .then(items => dispatch(get(items.results)))
    .catch(console.error);
};

export const _getUsers = payload => dispatch => {
  return callAPI(`${todoAPI}/users`, "GET", '', payload)
    .then(items => console.log(items))
}

export const get = payload => {
  return {
    type: "GET",
    payload: payload
  };
};

export const toggle = payload => {
  return {
    type: "TOGGLE",
    payload: payload
  };
};

export const details = payload => {
  return {
    type: "DETAILS",
    payload: payload
  };
};

export const postData = payload => dispatch => {
  return callAPI(`${todoAPI}/jobs`, "POST", payload)
    .then(result => dispatch(post(result)))
    .catch(console.error);
};

export const post = payload => {
  return {
    type: "POST",
    payload: payload
  };
};

export const destroyData = payload => dispatch => {
  return callAPI(`${todoAPI}/${payload.id}`, "DELETE")
    .then(() => dispatch(destroy(payload.id)))
    .catch(console.error);
};

export const destroy = payload => {
  return {
    type: "DELETE",
    payload: payload
  };
};

export const signInFetch = payload => dispatch => {
  console.log(todoAPI);
  return callAPIBasic(`${todoAPI}/signin`, payload)
    .then(results => dispatch(signIn(results)));
}

export const signIn = payload => {
  console.log('login', payload);
  return {
    type: "LOGIN",
    payload: payload
  };
};

export const signUpFetch = (payload) => dispatch => {
  return callAPISignUp(`${todoAPI}/signup`, payload).then(result => {
    console.log('fetch result', result);
    (result === 'username taken') ? dispatch(signUpFail(result)): dispatch(signUpSuccess(result));

    
  });
};

export const signUpSuccess = payload => {
  return {
    type: "SIGN_UP_SUCCESS",
    payload: payload
  };
};

export const signUpFail = payload => {
  return {
    type: "SIGN_UP_FAIL",
    payload: payload
  };
};

