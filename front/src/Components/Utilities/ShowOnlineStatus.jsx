import useOnlineStatus from "../../Hooks/useOnlineStatus";

const ShowOnlineStatus = () => {
  const isOnline = useOnlineStatus();
  console.log(isOnline);
  return (
    <div>
      Is this thing on? :
      {isOnline ? (
        <>
          <span className="material-symbols-outlined">offline_pin</span>
        </>
      ) : (
        <>
          <span className="material-symbols-outlined">offline_pin_off</span>
        </>
      )}
    </div>
  );
};

export default ShowOnlineStatus;
