import { useState } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const request = (url) => {
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
