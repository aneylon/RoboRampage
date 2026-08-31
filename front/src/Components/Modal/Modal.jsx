import "./Modal.css";

const Modal = ({ show }) => {
  const refresh = () => {
    console.log("So fresh and so clean.");
    window.location.reload(true);
  };

  return (
    <>
      {show ? (
        <div className="modal">
          <div className="modal-content">
            <h2>
              Your app is out of date. Please refresh the page to get the most
              recent version.
            </h2>
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
