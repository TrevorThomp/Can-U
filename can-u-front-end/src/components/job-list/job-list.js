import React from 'react';
import Auth from '../auth/auth';
import './job-list.scss';

/**
 * Component for the rendering a list of all jobs
 * @param {*} props 
 */
function jobList(props){
  
  const jobs = props.jobs.filter(job => job.isOpen); 

  const listJobs = jobs.map(job => 


        <tr id='jobRow' key={job._id}>
          <td>{job.name}</td>
          <td>{job.price}</td>
          <td>{job.currentBidder}</td>
          <td>{job.postedUser}</td>      
          <td><button onClick={() => props.handleDetails(job._id)}>Details</button></td>
          
          <Auth capability='superuser'><td><button onClick={() => props.handleDelete(job)}>Delete</button></td></Auth>
        </tr>

  );

  return (
    <div className="jobList-table">
    <table>
      <tbody>
        <h2>Job Board</h2>
        <tr id="headings" key="headings">
          <td>Name</td>
          <td>Bid</td>
          <td>Current Bidder</td>
          <td>Owner</td>
        </tr>
        {listJobs}
      </tbody>
    </table>
    </div>
  );
}



export default jobList;