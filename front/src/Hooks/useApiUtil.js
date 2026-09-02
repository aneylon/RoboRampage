const useApiUtils = () => {
  function get(url) {
    const requestOptions = {
      method: "GET",
      // headers: auth()
    };
    return fetch(url, requestOptions);
  }

  function post(url, body) {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(body),
    };
    return fetch(url, requestOptions);
  }

  return { get, post };
};

export default useApiUtils;
