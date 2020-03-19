import React from 'react';
import {connect} from 'react-redux';

function jobList(props){
  
  const jobs = props.jobs;
  
  const listJobs = jobs.map(job => 
    <tr key={job._id}>
      <td>{job.name}</td>
      <td>{job.price}</td>
      <td>{job.postedUser}</td>      
      <td><button onClick={() => props.handleDetails(job._id)}>Details</button></td>
      <td><button onClick={() => props.handleDelete(job._id)}>DELETE</button></td>
    </tr>
  );
  return (
    <table>
      <tbody>
        <tr key="headings">
          <td>Name</td>
          <td>Bid</td>
          <td>Owner</td>
        </tr>
        {listJobs}
      </tbody>
    </table>
  );
}



export default jobList;