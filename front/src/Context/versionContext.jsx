import { createContext, useState } from "react";

export const VersionContext = createContext();

const VersionContextProvider = (props) => {
  const [versionOutOfDate, setVersionOutOfDate] = useState(false);
  const [lastCheck, setLastCheck] = useState(new Date().getTime());

  return (
    <VersionContext.Provider
      value={{ versionOutOfDate, setVersionOutOfDate, lastCheck, setLastCheck }}
    >
      {props.children}
    </VersionContext.Provider>
  );
};

export default VersionContextProvider;
