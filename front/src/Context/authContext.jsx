import { createContext, useEffect, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);

  const SignInUser = (user) => {
    setUser(user);
    sessionStorage.setItem("RoboUser", user);
  };

  const SignOutUser = () => {
    setUser(null);
    sessionStorage.removeItem("RoboUser");
  };

  useEffect(() => {
    let storedUser = sessionStorage.getItem("RoboUser");

    if (storedUser) setUser(storedUser);
  }, []);

  return (
    <AuthContext.Provider value={{ user, SignOutUser, SignInUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
