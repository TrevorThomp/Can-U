import React from 'react';
import { connect } from 'react-redux';


/**
 * Component that renders a list of all of a users jobs
 * @param {*} props 
 */
const MyJobs = props => {
  const jobs = props.jobs.filter(job => job.postedBy === props.user);

  console.log([props.user])
  const listJobs = jobs.map(job => (
    <tr key={job._id}>
      <td>{job.name}</td>
      <td>{job.price}</td>
      <td>{job.description}</td>
      <td><button onClick={() => props.handleDelete(job)}>Delete</button></td>
      <td>
        <button onClick={() => props.handleDetails(job._id)}>Details</button>
      </td>
    </tr>
  ));
  return (
    <div className="myjob-table">
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

const mapStateToProps = (state) => ({
  user: state.login.user,
});

const mapDispatchToProps = (dispatch, getState) => ({});



export default connect(mapStateToProps, mapDispatchToProps)(MyJobs);