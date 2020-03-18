import React, { useEffect } from 'react';
import cookie from 'react-cookies';
import { connect } from "react-redux";
import './App.css';
import Auth from './components/auth/auth';
import { Else, If, Then, When } from './components/conditionals/conditionals';
import Dashboard from './components/dashboard/dashboard';
import JobForm from './components/form/form';
import JobItem from './components/job-list/job-item';
import JobList from './components/job-list/job-list';
import Splash from './components/splash/splash';
import * as actions from './store/action';




function App(props) {

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

  const _getUsers =() => {
    props.handleGetUsers();
  }

  useEffect(()=> {
    _getJobs();
  })

  return (
    <div className="App">
      <If condition={!props.login.loggedIn}>
        <Then>
          <Splash />
        </Then>
        <Else>
          <button onClick={_getUsers}>GET USERS TEST BUTTON</button> 
          <Auth capability='read'>
            <p>Test for auth</p>
          </Auth>
          <JobForm handleSubmit={_addJob}/>
          <JobList jobs={props.jobs.jobList} handleDetails={_toggleDetails} handleDelete={_deleteItem}/>
          <Dashboard addJob={_addJob} jobs={props.jobs.jobList} handleDetails={_toggleDetails} />
          <When condition={props.jobs.showDetails}>
            <JobItem handleDetails={_toggleDetails} item={props.jobs.details} />
          </When>
        </Else>
      </If>
    </div>  
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

  handleGetUsers: () => dispatch(actions._getUsers())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
