import { useContext, useState } from "react";
import { VersionContext } from "../Context/versionContext";

const appVersion = process.env.REACT_APP_VERSION;
const versionInterval = process.env.REACT_APP_VERSION_INTERVAL;

const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setVersionOutOfDate, lastCheck, setLastCheck } =
    useContext(VersionContext);

  const request = (url) => {
    const currentTime = new Date().getTime();
    if (currentTime - lastCheck > versionInterval) {
      console.log("do the check");
      setLastCheck(currentTime);
    } else {
      console.log("no check");
    }

    fetch("version.json")
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            console.log({ data });
            console.log(data.version, appVersion);
            const outOfDate = data.version !== appVersion;
            console.log(outOfDate);
            if (outOfDate) {
              console.log("out a date");
              setVersionOutOfDate(true);
            } else {
              console.log("do all the things");
            }
          });
        } else {
          const errorMessage = "Cannot get version.json";
          console.error(errorMessage);
          throw new Error(errorMessage);
        }
      })
      .catch((error) => {
        console.error(error);
      });

    setLoading(true);
    fetch(url)
      .then((res) => {
        if (res.ok) {
          res.json().then((data) => {
            setData(data);
            setLoading(false);
            setError(null);
          });
        } else {
          throw new Error(res.status);
        }
      })
      .catch((error) => {
        setData(null);
        setLoading(false);
        setError(error.message);
        console.error("Error :", error);
      });
  };
  return { request, data, loading, error };
};

export default useFetch;
