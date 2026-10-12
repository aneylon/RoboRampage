import SignOut from "../Auth/SignOut";
import ThemeToggle from "../Buttons/ThemeToggle";
import Title from "../Title/Title";
import ShowOnlineStatus from "../Utilities/ShowOnlineStatus";

const Header = () => {
  return (
    <div>
      <Title text={"Robo Rampage"} />
      <SignOut />
      <ThemeToggle />
      <ShowOnlineStatus />
    </div>
  );
};

export default Header;
