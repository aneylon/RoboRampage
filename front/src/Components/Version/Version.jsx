const Version = () => {
  const appVersion = process.env.REACT_APP_VERSION;
  return (
    <div>
      <h3 className="roboto">Version : {appVersion}</h3>
    </div>
  );
};

export default Version;
