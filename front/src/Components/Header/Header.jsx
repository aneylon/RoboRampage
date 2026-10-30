import { NavLink } from "react-router";
import SignOut from "../Auth/SignOut";
import ThemeToggle from "../Buttons/ThemeToggle";
import Title from "../Title/Title";
import ShowOnlineStatus from "../Utilities/ShowOnlineStatus";

const Header = () => {
  return (
    <div>
      <Title text={"Robo Rampage"} />
      <NavLink to="/" end>
        Home
      </NavLink>
      <NavLink to="/signin" end>
        Sign In
      </NavLink>
      <SignOut />
      <ThemeToggle />
      <ShowOnlineStatus />
    </div>
  );
};

export default Header;
