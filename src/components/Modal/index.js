import React from "react";

import './Modal.scss'

function Modal({ handleModalClose, children }) {
  return (
    <div className="modal">
      <button onClick={handleModalClose}>Minimizar</button>
      <div className="container">{children}</div>
    </div>
  );
}

export default Modal;
