import React from 'react';

function jobList(props){
  const jobs = [
    {
      name: 'david',
      currentBid: 200,
      createdBy: 'david'
    },
    {
      name: 'david',
      currentBid: 200,
      createdBy: 'david'
    }
  ];
  const listJobs = jobs.map(job => 
    <tr>
      <td>{job.name}</td>
      <td>{job.currentBid}</td>
      <td>{job.createdBy}</td>
    </tr>
  );
  return (
    <table>
      <th>Name</th>
      <th>Bid</th>
      <th>Owner</th>
      {listJobs}
    </table>
  )
}


export default jobList;