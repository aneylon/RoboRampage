import { useEffect } from "react";
import useFetch from "../../Hooks/useFetch";

const ToDo = () => {
  const { request, data, loading, error } = useFetch();

  useEffect(() => {
    request("https://jsonplaceholder.typicode.com/todos");
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      <h1>ToDo List</h1>
      {loading && <div>...loading...</div>}
      {error && <div>{error}</div>}
      {data && (
        <ul>
          {data.map((item) => {
            return <li key={item.id}>{item.title}</li>;
          })}
        </ul>
      )}
    </div>
  );
};

export default ToDo;
