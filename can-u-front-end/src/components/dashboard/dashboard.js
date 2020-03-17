import React from 'react';
import Form from '../form/form';
import MyJobs from '../my-jobs/myJobs';

const DashBoard = props => {
  return (
    <>
      <Form handleSubmit={props.addJob}/>
      <MyJobs jobs={props.jobs}/>
    </>
  )
}

export default DashBoard;