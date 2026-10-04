import { useContext } from "react";
import { AuthContext } from "../../Context/authContext";

const SignOut = () => {
  // TODO get auth
  const { user, setUser } = useContext(AuthContext);

  const signOut = () => {
    setUser(null);
  };

  const signIn = () => {
    setUser({ id: 123, name: "steve" });
  };

  return (
    <div>
      {user && <span onClick={signOut}>Sign Out</span>}
      {!user && <span onClick={signIn}>Sign In</span>}
    </div>
  );
};

export default SignOut;
