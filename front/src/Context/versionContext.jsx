import { createContext, useState } from "react";

export const VersionContext = createContext();

const VersionContextProvider = (props) => {
  const [versionOutOfDate, setVersionOutOfDate] = useState(false);

  return (
    <VersionContext.Provider value={{ versionOutOfDate, setVersionOutOfDate }}>
      {props.children}
    </VersionContext.Provider>
  );
};

export default VersionContextProvider;
