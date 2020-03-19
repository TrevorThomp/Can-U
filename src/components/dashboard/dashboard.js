import React from 'react';
import Form from '../form/form';
import MyJobs from '../my-jobs/myJobs';

/**
 * Component to render user dashboard
 * @param {*} props 
 */
const DashBoard = props => {
  return (
    <>
      <Form handleSubmit={props.addJob}/>
      <MyJobs jobs={props.jobs} handleDetails={props.handleDetails} handleDelete={props.handleDelete}/>
    </>
  )
}

export default DashBoard;