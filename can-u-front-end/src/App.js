import React from 'react';
import './App.css';
import Login from './components/login/login';
import JobList from './components/job-list/job-list';


function App() {
  return (
    <div className="App">   
      
      <Login/>
      <JobList/>
    </div>    
  );
}

export default App;
