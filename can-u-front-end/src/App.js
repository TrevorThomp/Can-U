
import React, { useEffect, useState } from 'react';
import cookie from 'react-cookies';
import { connect } from "react-redux";
import { Else, If, Then, When } from './components/conditionals/conditionals';
import Dashboard from './components/dashboard/dashboard';
import Footer from './components/footer/footer';
import Header from './components/header/header';
import JobItem from './components/job-list/job-item';
import JobList from './components/job-list/job-list';
import LogOut from './components/logout/logout';
import Nav from './components/nav/nav';
import Splash from './components/splash/splash';
import * as actions from './store/action';
import './style/App.css';


/**
 * Main App component
 * @param {*} props
 */
function App(props) {

  const [screen, setScreen] = useState('dashboard')

  /**
   * Call add job action
   * @param {*} data 
   */
  const _addJob = data => {
    const authCookie = cookie.load('auth')
    data.token = authCookie;
    data.complete = false;
    props.handlePost(data);
  };
  /**
   * Call destroy item action
   * @param {*} data 
   */
  const _deleteItem = data => {
    const authCookie = cookie.load('auth')
    data.token = authCookie;
    props.handleDelete(data);
  };
  /**
   * Call toggle details action
   * @param {*} id 
   */
  const _toggleDetails = id => {
    props.handleDetails(id);
  };
  /**
   *  Call get jobs action
   */
  const _getJobs = () => {
    props.handleGetJobs();
  };
  /**
   * Call get users action
   * @param {*} data 
   */
  const _getUsers = data => {
    const authCookie = cookie.load('auth')
    data.token = authCookie;
    props.handleGetUsers(data);
  }
  /**
   * Call Place Bid action
   * @param {*} id 
   * @param {*} price 
   */
  const placeBid = (id, price) => {
    console.log(props.jobs.jobList[0]._id)
    const authCookie = cookie.load('auth');
    
    let body = {price: price};
    props.handlePlaceBid({id: id, body: body, token: authCookie})
  }
  /**
   * Call Close job action
   * @param {*} id 
   */
  const closeJob = (id) => {
    const authCookie = cookie.load('auth');
    
    props.handleCloseJob({id: id, token: authCookie})
  }

  

  useEffect(()=> {
    _getJobs();    
  })

  return (
    <>
      <div className="App">
        <Header />
        <If condition={!props.login.loggedIn}>
          <Then>
            <Splash />
          </Then>
          <Else>
            <Nav setScreen={setScreen} />
            <LogOut/>      
            
            <When condition={screen === 'main'}>
              <JobList
                jobs={props.jobs.jobList}
                handleDetails={_toggleDetails}
                handleDelete={_deleteItem}
                handleBid={placeBid}
              />
            </When>
            <When condition={screen === 'dashboard'}>
              
                <Dashboard
                  addJob={_addJob}
                  jobs={props.jobs.jobList}
                  handleDetails={_toggleDetails}
                  handleDelete={_deleteItem}
                  handleCloseJob={closeJob}
                />
            </When>
            <When condition={props.jobs.showDetails}>
              <JobItem handleDetails={_toggleDetails} item={props.jobs.details} placeBid={placeBid}/>
            </When>
            <Footer />
          </Else>
        </If>
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
  handlePlaceBid: (id, price) => dispatch(actions.placeBid(id, price)),
  handleGetUsers: data => dispatch(actions._getUsers(data)),
  handleCloseJob: data => dispatch(actions.closeJobs(data))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
