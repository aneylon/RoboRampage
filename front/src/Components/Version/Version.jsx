const Version = () => {
  const appVersion = process.env.REACT_APP_VERSION;
  return (
    <div>
      <h3>Version : {appVersion}</h3>
    </div>
  );
};

export default Version;
