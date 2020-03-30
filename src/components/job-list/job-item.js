import React, { useState } from 'react';
import { connect } from 'react-redux';
import Modal from '../modal/modal';
import './job-item.scss';

/**
 * Component to render one job item is a list
 * @param {*} props 
 */
const JobItem = props => {
  const job = props.item || {};
  const [bid, setBid] = useState(0);
  const [winningBid, setWinningBid] = useState();
  const [currentBidder, setCurrentBidder] = useState(job.currentBidder)
  /**
   * @function Add Bid
   */
  const addBid = () => {
    bid <= 0 ? alert('Bid must be greater than $0'): props.placeBid(job._id, bid);
    (bid >= job.price && bid > 0)? alert(`Must bid less than current price of ${job.price}`): props.placeBid(job._id, bid);
    if(bid < job.price && bid > 0) {
      setWinningBid('You are now the leading bidder!');
      setCurrentBidder(props.login.user.username);
    }
  }
  return (
    <Modal title="Job" close={props.handleDetails}>
      <div className="modal-container">
        <div id='description-container'>
          <div id='description-1'>
            <span>Job Title: {job.name}</span>
            <span>Description: {job.description}</span>
            <span>Posted by: {job.postedUser}</span>
          </div>
          <div id='description-2'>
            <span>Current Bid: ${job.price}</span>
            <span>Current Bidder: {currentBidder}</span>
          </div>
        </div>
        <label>
          <span>Bid Amount: $</span>
          <input id="bid" onChange={e => setBid(e.target.value)} />
        </label>
        <div id="modal-btn-container">
          <button id="modal-button" onClick={() => {addBid()}}>Place Bid</button>
        </div>
        <p>{winningBid}</p>
      </div>
    </Modal>
  );
}


const mapStateToProps = state => ({
  login: state.login
});

export default connect(
  mapStateToProps,
)(JobItem);
