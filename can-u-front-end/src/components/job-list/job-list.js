import React from 'react';
import Auth from '../auth/auth';
import { If, Then } from '../conditionals/conditionals';

function jobList(props){
  
  const jobs = props.jobs.filter(job => job.isOpen);
  // console.log(props.jobs)

  const listJobs = jobs.map(job => 

        <tr key={job._id}>
          <td>{job.name}</td>
          <td>{job.price}</td>
          <td>{job.postedUser}</td>      
          <td><button onClick={() => props.handleDetails(job._id)}>Details</button></td>
          
          <Auth capability='superuser'><td><button onClick={() => props.handleDelete(job)}>Delete</button></td></Auth>
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