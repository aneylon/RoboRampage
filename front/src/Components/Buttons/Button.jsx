const defaultAction = () => console.log("please pass an action.");

const Button = ({
  text = "Please enter some text.",
  action = defaultAction,
}) => {
  return <button onClick={action}>{text}</button>;
};

export default Button;
