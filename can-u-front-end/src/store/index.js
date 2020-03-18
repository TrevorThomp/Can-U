import { applyMiddleware, combineReducers, createStore } from "redux";
import { composeWithDevTools } from "redux-devtools-extension";
import { reducer as formReducer } from "redux-form";
import thunk from "redux-thunk";
import jobsReducer from "./job-reducer";
import loginReducer from './login-reducer';

let reducers = combineReducers({
  jobs: jobsReducer,
  form: formReducer,
  login: loginReducer
});

const store = () =>
  createStore(reducers, composeWithDevTools(applyMiddleware(thunk)));

export default store;
