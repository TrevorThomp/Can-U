import React, {useState} from 'react';
import Modal from '../modal/modal';
import './job-item.scss'

/**
 * Component to render one job item is a list
 * @param {*} props 
 */
const JobItem = props => {
  const job = props.item || {};
  const [bid, setBid] = useState(0);

  const addBid = () => {
    bid >= job.price? alert(`Must bid less than current price of ${job.price}`): props.placeBid(job._id, bid);
  }

  return (
    <Modal title="Job" close={props.handleDetails}>
      <div className="modal-container">
        <span>Name: {job.name}</span>
        <span>Description: {job.description}</span>
        <span>Price: ${job.price}</span>
        <span>Posted by: {job.postedUser}</span>
        <label>
          <span>Bid Amount:</span>
          <input id="bid" onChange={e => setBid(e.target.value)} />
        </label>
        <button onClick={() => {addBid(); props.handleDetails()}}>Place Bid</button>
      </div>
    </Modal>
  );
}

export default JobItem;