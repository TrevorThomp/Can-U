import jwt from 'jsonwebtoken';
import React from 'react';
import { connect } from 'react-redux';
import './myJobs.scss';


/**
 * Component that renders a list of all of a users jobs
 * @param {*} props 
 */
const MyJobs = props => {
  
  const username = jwt.verify(props.user.token, 
    'sauce').username;
  const jobs = props.jobs.jobList.filter(job => job.postedUser === username);
  
  
  const listJobs = jobs.map(job => (
    <tr id='jobRow' key={job._id}>
      <td>{job.name}</td>
      <td>${job.price}</td>
      {/* <td>{job.description}</td> */}
      <td>{job.isOpen ? 'Open' : 'Closed'}</td>

      <td className='jobButtons'>
        <button onClick={() => props.handleDelete(job)}>Delete</button>
      </td>
      <td className='jobButtons'>
        <button onClick={() => props.handleDetails(job._id)}>Details</button>
      </td>

      <td className='jobButtons'>
        <button onClick={() => props.handleCloseJob(job._id)}>Close Job</button>
      </td>
    </tr>
  ));
  return (
    <div className="myjob-table">
      <table>
        <tbody>
          <tr id="headings" key="headings">
            <td>Name</td>
            <td>Bid</td>
            {/* <td>Description</td> */}
            <td>Status</td>
          </tr>
          {listJobs}
        </tbody>
      </table>
    </div>
  );
}

const mapStateToProps = (state) => ({
  user: state.login,
  jobs: state.jobs
});

const mapDispatchToProps = (dispatch, getState) => ({});



export default connect(mapStateToProps, mapDispatchToProps)(MyJobs);