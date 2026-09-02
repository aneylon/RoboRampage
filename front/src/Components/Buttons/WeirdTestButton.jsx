import useExampleApi from "../../Hooks/useExampleApi";

const WeirdTestButton = () => {
  const { exampleGetCall } = useExampleApi();
  const weirdTest = () => {
    console.log("weird test");
    exampleGetCall("https://jsonplaceholder.typicode.com/todos/1")
      .then((data) => {
        console.log({ data });
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <button onClick={weirdTest}>Weird Test Button</button>
    </div>
  );
};

export default WeirdTestButton;
