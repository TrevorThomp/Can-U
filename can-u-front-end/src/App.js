import React from 'react';
import JobForm from './components/form/form'
import * as actions from './store/action'
import { connect } from "react-redux";
import './App.css';
import Login from './components/login/login';
import JobList from './components/job-list/job-list';


function App(props) {

  const _addJob = data => {
    console.log(data)
    data.complete = false;
    props.handlePost(data);
  };

  // const _deleteItem = id => {
  //   props.handleDelete(id);
  // };

  // const _toggleComplete = id => {
  //   props.handleToggle(id);
  // };

  // const _toggleDetails = id => {
  //   props.handleDetails(id);
  // };

  const _getJobs = () => {
    props.handleGetJobs();
  };
  return (
    <div className="App">   
      <button onClick={_getJobs}>GET JOB RESULTS TEST</button>
      <JobForm handleSubmit={_addJob}/>
      <Login/>
      <JobList/>
    </div>    
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
  handleDelete: id => dispatch(actions.destroy(id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
