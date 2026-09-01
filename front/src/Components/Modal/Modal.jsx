import { useState } from "react";
import "./Modal.css";

const Modal = ({ show, title, content }) => {
  const [showModal, setShowModal] = useState(show);

  const close = () => {
    setShowModal(false);
  };

  return (
    <>
      {showModal ? (
        <div className="modal">
          <div className="modal-content">
            <h2>{title}</h2>
            <h3>{content}</h3>
            <button onClick={close}>close</button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Modal;
