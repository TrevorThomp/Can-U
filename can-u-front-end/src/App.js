
import React, {useEffect, useState} from 'react';
import JobForm from './components/form/form'
import * as actions from './store/action'
import { connect } from "react-redux";
import './App.css';
import Auth from './components/auth/auth';
import { Else, If, Then, When } from './components/conditionals/conditionals';
import Dashboard from './components/dashboard/dashboard';
import cookie from 'react-cookies'
import Nav from './components/nav/nav';
import Login from './components/login/login'
import JobList from './components/job-list/job-list'
import JobItem from './components/job-list/job-item'




function App(props) {

  const [screen, setScreen] = useState('dashboard')
 

  const _addJob = data => {
    const authCookie = cookie.load('auth')
    data.token = authCookie;
    data.complete = false;
    props.handlePost(data);
  };

  const _deleteItem = id => {
    props.handleDelete(id);
  };

  // const _toggleComplete = id => {
  //   props.handleToggle(id);
  // };

  const _toggleDetails = id => {
    props.handleDetails(id);
  };

  const _getJobs = () => {
    props.handleGetJobs();
  };

  const _getUsers = data => {
    const authCookie = cookie.load('auth')
    data.token = authCookie;
    props.handleGetUsers(data);
  }

  useEffect(()=> {
    _getJobs();
  })

  return (
    <>
      <div className="App">
        <Nav setScreen={setScreen} />
        
        
        <Login />

        <button onClick={_getUsers}>GET USERS TEST</button>
        <When condition={screen === 'main'}>
          <JobList
            jobs={props.jobs.jobList}
            handleDetails={_toggleDetails}
            handleDelete={_deleteItem}
          />
        </When>

        <When condition={screen === 'dashboard'}>
          <Dashboard
            addJob={_addJob}
            jobs={props.jobs.jobList}
            handleDetails={_toggleDetails}
          />
        </When>
        <When condition={props.jobs.showDetails}>
          <JobItem handleDetails={_toggleDetails} item={props.jobs.details} />
        </When>
      </div>
    </>
  );
}

const mapStateToProps = state => ({
  jobs: state.jobs,
  login: state.login
});

const mapDispatchToProps = (dispatch, getState) => ({
  handleGetJobs: () => dispatch(actions._getJobs()),
  handleDetails: id => dispatch(actions.details(id)),
  handlePost: data => dispatch(actions.postData(data)),
  handleToggle: id => dispatch(actions.toggle(id)),
  handleDelete: id => dispatch(actions.destroy(id)),

  handleGetUsers: data => dispatch(actions._getUsers(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
