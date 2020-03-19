import React from 'react';
import { connect } from 'react-redux';

/**
 * Component that renders a list of all of a users jobs
 * @param {*} props 
 */
const MyJobs = props => {
  const jobs = props.jobs;

  const listJobs = jobs.map(job => (
    <tr key={job._id}>
      <td>{job.name}</td>
      <td>{job.price}</td>
      <td>{job.postedUser}</td>
      <td><button onClick={() => props.handleDelete(job)}>Delete</button></td>
      <td>
        <button onClick={() => props.handleDetails(job._id)}>Details</button>
      </td>
    </tr>
  ));
  return (
    <div class="myjob-table">
      <table>
        <tbody>
          <tr key="headings">
            <td>Name</td>
            <td>Bid</td>
            <td>Description</td>
          </tr>
          {listJobs}
        </tbody>
      </table>
    </div>
  );
}

const mapsStateToProps = (state) => {
  
};

export default connect(mapsStateToProps)(MyJobs);