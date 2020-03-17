import React from 'react';

function jobList(props){
  
  const jobs = props.jobs;
  console.log(jobs[0]);
  const listJobs = jobs.map(job => 
    <tr key={job._id}>
      <td>{job.name}</td>
      <td>{job.price}</td>
      <td>{job.postedBy}</td>
      <td><button onClick={() => props.handleDetails(job._id)}>Details</button></td>
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