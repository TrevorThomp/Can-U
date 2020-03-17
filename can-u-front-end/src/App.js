import React from 'react';
import logo from './logo.svg';
import JobForm from './components/form'
import './App.css';

function App(props) {

  const _addItem = data => {
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

  const _toggleDB = () => {
    props.handleGetJobs();
  };
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <JobForm />
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
