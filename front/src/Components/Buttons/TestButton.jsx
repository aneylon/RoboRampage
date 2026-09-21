import useFetch from "../../Hooks/useFetch";

const TestButton = () => {
  const { request, data, loading, error } = useFetch();

  const testIt = () => {
    console.log("test it");
    request("https://jsonplaceholder.typicode.com/todos/1");
  };
  return (
    <div>
      <button onClick={testIt}>Test Button</button>
      {loading && <div>...loading...</div>}
      {error && <div>{error.message}</div>}
      {data && <div>{data.id}</div>}
    </div>
  );
};

export default TestButton;
