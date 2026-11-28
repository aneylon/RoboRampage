const Title = ({ text = "Please enter text" }) => {
  return (
    <div>
      <h1 className="roboto">{text}</h1>
    </div>
  );
};

export default Title;
