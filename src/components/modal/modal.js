import React from "react";
import "./modal.scss";

/**
 * Component that renders a modal to show job details
 * @param {*} props 
 */
const Modal = props => {
  return (
    <div className="modal">
      <div className="modal-window">
        <header>
          <span className="title">{props.title}</span>
          <button onClick={props.close}>X</button>
        </header>
        <div className="modal-interior">{props.children}</div>
      </div>
    </div>
  );
};
export default Modal;
