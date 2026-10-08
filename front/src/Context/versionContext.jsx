import { createContext, useState } from "react";

export const VersionContext = createContext();

const appVersion = process.env.REACT_APP_VERSION;
const versionInterval = process.env.REACT_APP_VERSION_INTERVAL;

const VersionContextProvider = (props) => {
  const [versionOutOfDate, setVersionOutOfDate] = useState(false);
  let lastCheck = new Date().getTime();
  const { fetch: originalFetch } = window;

  window.fetch = async (...args) => {
    let currentTime = new Date().getTime();
    if (currentTime - lastCheck > versionInterval) {
      lastCheck = currentTime;
      let result = await fetch("version.json");
      let json = await result.json();
      if (json.version !== appVersion) setVersionOutOfDate(true);
    }
    let [resource, config] = args;

    const response = await originalFetch(resource, config);
    return response;
  };

  return (
    <VersionContext.Provider
      value={{ versionOutOfDate, setVersionOutOfDate, lastCheck }}
    >
      {props.children}
    </VersionContext.Provider>
  );
};

export default VersionContextProvider;
