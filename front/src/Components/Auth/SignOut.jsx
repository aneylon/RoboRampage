import { useContext } from "react";
import { AuthContext } from "../../Context/authContext";

const SignOut = () => {
  const { SignOutUser } = useContext(AuthContext);

  return <span onClick={SignOutUser}>Sign Out</span>;
};

export default SignOut;
