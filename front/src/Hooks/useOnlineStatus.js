import { useEffect, useState } from "react";

const useOnlineStatus = () => {
  const [isOnline, setIsOnline] = useState(true);
  console.log(isOnline);
  useEffect(() => {
    function handleOnline() {
      console.log("online");
      setIsOnline(true);
    }
    function handleOffline() {
      console.log("offline");
      setIsOnline(false);
    }

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);
    return () => {
      window.addEventListener("online", handleOnline);
      window.addEventListener("offline", handleOffline);
    };
  }, []);
  return isOnline;
};

export default useOnlineStatus;
