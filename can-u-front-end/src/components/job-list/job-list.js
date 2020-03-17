import React from 'react';

function jobList(props){
  
  const jobs = props.jobs;
  console.log(jobs[0]);
  const listJobs = jobs.map(job => 
    <tr>
      <td>{job.name}</td>
      <td>{job.currentBid}</td>
      <td>{job.createdBy}</td>
      <td><button>Details</button></td>
    </tr>
  );
  return (
    <table>
      <tbody>
        <tr>
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