
import React, { useEffect, useState } from 'react';
import cookie from 'react-cookies';
import { connect } from "react-redux";
import './App.css';
import { When } from './components/conditionals/conditionals';
import Dashboard from './components/dashboard/dashboard';
import JobItem from './components/job-list/job-item';
import JobList from './components/job-list/job-list';
import Login from './components/login/login';
import Nav from './components/nav/nav';

import Login from './components/login/login'
import JobList from './components/job-list/job-list'
import JobItem from './components/job-list/job-item'
import Footer from './components/footer/footer';

import * as actions from './store/action';





function App(props) {

  const [screen, setScreen] = useState('dashboard')
 

  const _addJob = data => {
    const authCookie = cookie.load('auth')
    data.token = authCookie;
    data.complete = false;
    props.handlePost(data);
  };

  const _deleteItem = data => {
    const authCookie = cookie.load('auth')
    data.token = authCookie;
    props.handleDelete(data);
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

  const placeBid = () => {
    console.log(props.jobs.jobList[0]._id)
    const authCookie = cookie.load('auth');
    let id = props.jobs.jobList[0]._id;
    let body = {price: 10};
    props.handlePlaceBid({id: id, body: body, token: authCookie})
  }

  useEffect(()=> {
    _getJobs();
    console.log()
  })

  return (
    <>
      <div className="App">
        <Nav setScreen={setScreen} />


        <When condition={!props.login.loggedIn}>
          <Login />
        </When>

        <button onClick={_getUsers}>GET USERS TEST</button>
        <button onClick={placeBid}>PLACE BID TEST</button>


        <When condition={screen === 'main'}>
          <JobList
            jobs={props.jobs.jobList}
            handleDetails={_toggleDetails}
            handleDelete={_deleteItem}
          />
        </When>

        <When condition={screen === 'dashboard'}>
          <Auth capability
            <Dashboard
              addJob={_addJob}
              jobs={props.jobs.jobList}
              handleDetails={_toggleDetails}
              handleDelete={_deleteItem}
            />
          
        </When>
        <When condition={props.jobs.showDetails}>
          <JobItem handleDetails={_toggleDetails} item={props.jobs.details} />
        </When>
        <Footer />
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
  handleDelete: data => dispatch(actions.destroyData(data)),
  handlePlaceBid: data => dispatch(actions.placeBid(data)),
  handleGetUsers: data => dispatch(actions._getUsers(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
