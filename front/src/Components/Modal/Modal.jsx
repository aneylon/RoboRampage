import "./Modal.css";

const Modal = ({ show }) => {
  const refresh = () => {
    window.location.reload(true);
  };

  return (
    <>
      {show ? (
        <div className="modal">
          <div className="modal-content">
            <h2>Your app is out of date.</h2>
            <h3>Please refresh the page to get the most recent version.</h3>
            <button onClick={refresh}>Refresh</button>
          </div>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Modal;
