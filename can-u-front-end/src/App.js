import React, {useEffect} from 'react';
import JobForm from './components/form/form'
import * as actions from './store/action'
import { connect } from "react-redux";
import {When} from './components/conditionals/conditionals';
import './App.css';
import Login from './components/login/login';
import JobList from './components/job-list/job-list';
import JobItem from './components/job-list/job-item';
import Dashboard from './components/dashboard/dashboard';
import cookie from 'react-cookies'




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
    <>
    <div className="App">   
    <button onClick={_getUsers}>GET USERS TEST BUTTON</button> 
      <JobForm handleSubmit={_addJob}/>
      <Login/>
      <JobList jobs={props.jobs.jobList} handleDetails={_toggleDetails} handleDelete={_deleteItem}/>
      <Dashboard addJob={_addJob} jobs={props.jobs.jobList} handleDetails={_toggleDetails} />
      <When condition={props.jobs.showDetails}>
        <JobItem handleDetails={_toggleDetails} item={props.jobs.details} />
      </When>
    </div>  
   
    </>  
  );
}

const mapStateToProps = state => ({
  jobs: state.jobs
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
