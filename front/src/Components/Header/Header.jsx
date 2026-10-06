import SignOut from "../Auth/SignOut";
import Title from "../Title/Title";

const Header = () => {
  return (
    <div>
      <Title text={"Robo Rampage"} />
      <SignOut />
    </div>
  );
};

export default Header;
