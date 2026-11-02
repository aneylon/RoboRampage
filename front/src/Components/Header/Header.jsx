import { NavLink } from "react-router";
import SignOut from "../Auth/SignOut";
import ThemeToggle from "../Buttons/ThemeToggle";
import Title from "../Title/Title";
import ShowOnlineStatus from "../Utilities/ShowOnlineStatus";
import { useContext } from "react";
import { AuthContext } from "../../Context/authContext";

const Header = () => {
  const { user } = useContext(AuthContext);

  return (
    <div>
      <Title text={"Robo Rampage"} />
      <NavLink to="/" end>
        Home
      </NavLink>
      {!user ? (
        <NavLink to="/signin" end>
          Sign In
        </NavLink>
      ) : (
        <SignOut />
      )}
      <ThemeToggle />
      <ShowOnlineStatus />
    </div>
  );
};

export default Header;
