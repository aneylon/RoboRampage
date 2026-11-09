import { NavLink } from "react-router";

const NotFound = () => {
  return (
    <div>
      <h1>Not Found</h1>
      <p>This route not found.</p>
      <NavLink to="/" end>
        Home
      </NavLink>
    </div>
  );
};

export default NotFound;
