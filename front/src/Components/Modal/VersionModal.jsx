import { useContext } from "react";
import "./Modal.css";
import { VersionContext } from "../../Context/versionContext";

const VersionModal = () => {
  const { versionOutOfDate } = useContext(VersionContext);

  const refresh = () => {
    window.location.reload(true);
  };

  return (
    <>
      {versionOutOfDate ? (
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

export default VersionModal;
