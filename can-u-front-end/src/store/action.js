import { callAPI, callAPIBasic } from "../lib/api";

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

export const signIn = payload => dispatch => {
  console.log(todoAPI);
  return callAPIBasic(`${todoAPI}/signin`, payload)
    .then(results => dispatch(login(results)));
}

export const login = payload => {
  console.log(payload);
  return {
    type: "LOGIN",
    payload: payload
  };
};

export const signUpFetch = (payload) => dispatch => {
  return callAPI(`${todoAPI}/signup`, 'POST', payload).then(result => dispatch(signUp(result)));
};

export const signUp = payload => {
  return {
    type: "SIGN_UP",
    payload: payload
  };
};

