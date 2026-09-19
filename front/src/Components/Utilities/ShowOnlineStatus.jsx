import useOnlineStatus from "../../Hooks/useOnlineStatus";

const ShowOnlineStatus = () => {
  const isOnline = useOnlineStatus();
  console.log(isOnline);
  return <div>Is this thing on? :{isOnline ? <>online</> : <>offline</>}</div>;
};

export default ShowOnlineStatus;
