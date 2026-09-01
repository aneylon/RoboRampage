import { useContext, useState } from "react";
import { VersionContext } from "../Context/versionContext";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const { setVersionOutOfDate } = useContext(VersionContext);

  const request = (url) => {
    // TODO : Check version at some interval
    // Testings
    // setVersionOutOfDate(true);

    setLoading(true);
    fetch(url)
      .then((res) => {
        console.log(res);
        if (res.ok) {
          res.json().then((data) => {
            console.log(data);
            setData(data);
            setLoading(false);
            setError(null);
          });
        } else {
          throw new Error(res.status);
        }
      })
      .catch((error) => {
        console.error("error");
        setData(null);
        setLoading(false);
        setError(error.message);
        console.error(error);
      });
  };
  return { request, data, loading, error };
};

export default useFetch;
