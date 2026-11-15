import { useState } from "react";

const useFetch = () => {
  const [data, setData] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  let headers = {
    "Content-Type": "application/json",
  };

  const request = async (url, method = "GET", body) => {
    setLoading(true);
    /// TODO : Figure out auth headers.
    try {
      const response = await fetch(url, {
        method,
        body: JSON.stringify(body),
        headers,
      });

      if (response.ok) {
        const result = await response.json();
        setData(result);
        setLoading(false);
        setError(null);
        return result;
      } else {
        console.error("error", response);
        setError("ERROR!" + response.message);
        setLoading(false);
        setData(null);
        return null;
      }
    } catch (error) {
      console.error("Error : ", error);
      setError(error.message);
      setLoading(false);
    }
  };
  return { request, data, loading, error };
};

export default useFetch;
