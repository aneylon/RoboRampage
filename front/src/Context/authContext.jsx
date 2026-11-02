import { createContext, useState } from "react";

export const AuthContext = createContext();

const AuthContextProvider = (props) => {
  const [user, setUser] = useState(null);

  const SignOutUser = () => {
    setUser(null);
  };

  return (
    <AuthContext.Provider value={{ user, setUser, SignOutUser }}>
      {props.children}
    </AuthContext.Provider>
  );
};

export default AuthContextProvider;
