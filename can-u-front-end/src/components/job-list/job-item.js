import React from 'react';
import Modal from '../modal/modal';

const JobItem = props => {
  const job = props.job || {};

  return (
    <Modal title="Job" close={props.handleDetails}>
      <div>
        
          <span>Name: {job.name}</span>
          <span>Description: {job.description}</span>
          <span>Price: {job.price}</span>
          <span>Posted by: {job.postedBy}</span>
        
      </div>
    </Modal>
  )
}

export default JobItem;