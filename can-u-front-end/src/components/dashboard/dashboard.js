import React from 'react';
import Form from '../form/form';
import MyJobs from '../my-jobs/myJobs';
import './dashboard.scss';

/**
 * Component to render user dashboard
 * @param {*} props 
 */
const DashBoard = props => {
  return (
    <>
    <div className="dashBoardDiv">
      <Form handleSubmit={props.addJob}/>
      <MyJobs jobs={props.jobs} handleDetails={props.handleDetails} handleDelete={props.handleDelete} handleCloseJob={props.handleCloseJob}/>
    </div>
    </>
  )
}

export default DashBoard;