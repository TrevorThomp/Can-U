import { callAPI, callAPIBasic, callAPISignUp } from "../lib/api";

let todoAPI = "https://dry-shore-68165.herokuapp.com";

/**
 * action to place bid
 * @param {*} payload 
 */
export const placeBid = payload => dispatch => {
  return callAPI(`${todoAPI}/jobs/bid/${payload.id}`, "PUT", payload.body, payload.token)
    .then(record => console.log(record));
}

/**
 * action to close job
 * @param {*} payload 
 */
export const closeJobs = payload => dispatch => {
  return callAPI(`${todoAPI}/jobs/close/${payload.id}`, "PUT", undefined, payload.token)
    .then(record => console.log(record));
}

/**
 * action to get all jobs
 * @param {*} payload 
 */
export const _getJobs = () => dispatch => {
  return callAPI(`${todoAPI}/jobs`, "GET")
    .then(items => dispatch(get(items.results)))
    .catch(console.error);
};

/**
 * action to get all users
 * @param {*} payload 
 */
export const _getUsers = payload => dispatch => {
  return callAPI(`${todoAPI}/users`, "GET", '', payload.token)
    .then(items => console.log(items))
}

/**
 * action to get
 * @param {*} payload 
 */
export const get = payload => {
  return {
    type: "GET",
    payload: payload
  };
};

/**
 * action to toggle job
 * @param {*} payload 
 */
export const toggle = payload => {
  return {
    type: "TOGGLE",
    payload: payload
  };
};

/**
 * action to get job details
 * @param {*} payload 
 */
export const details = payload => {
  return {
    type: "DETAILS",
    payload: payload
  };
};

/**
 * action to post job
 * @param {*} payload 
 */
export const postData = payload => dispatch => {
  return callAPI(`${todoAPI}/jobs`, "POST", payload, payload.token)
    .then(result => dispatch(post(result)))
    .catch(console.error);
};

/**
 * action to post
 * @param {*} payload 
 */
export const post = payload => {
  return {
    type: "POST",
    payload: payload
  };
};

/**
 * action to delete job
 * @param {*} payload 
 */
export const destroyData = payload => dispatch => {
  return callAPI(`${todoAPI}/jobs/${payload._id}`, "DELETE", '', payload.token)
    .then(() => dispatch(destroy(payload.id)))
    .catch(err => console.log(err));
};

/**
 * action to destroy
 * @param {*} payload 
 */
export const destroy = payload => {
  return {
    type: "DELETE",
    payload: payload
  };
};

/**
 * action to fetch signin
 * @param {*} payload 
 */
export const signInFetch = payload => dispatch => {
  return callAPIBasic(`${todoAPI}/signin`, payload)
    .then(results => dispatch(signIn(results)));
}

/**
 * action to signin
 * @param {*} payload 
 */
export const signIn = payload => {
  return {
    type: "LOGIN",
    payload: payload
  };
};

/**
 * action to fetch signup
 * @param {*} payload 
 */
export const signUpFetch = (payload) => dispatch => {
  return callAPISignUp(`${todoAPI}/signup`, payload).then(result => {
    (result === 'username taken') ? dispatch(signUpFail(result)): dispatch(signUpSuccess(result));
  });
};

/**
 * action for signup success
 * @param {*} payload 
 */
export const signUpSuccess = payload => {
  return {
    type: "SIGN_UP_SUCCESS",
    payload: payload
  };
};

/**
 * action for signup fail
 * @param {*} payload 
 */
export const signUpFail = payload => {
  return {
    type: "SIGN_UP_FAIL",
    payload: payload
  };
};

/**
 * action to logout
 * @param {*} payload 
 */
export const logout = payload => {
  return {
    type: "LOGOUT",
    payload: payload
  };
};