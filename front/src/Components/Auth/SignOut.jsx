const SignOut = () => {
  // TODO get auth
  const loggedIn = false;
  return (
    <div>
      {loggedIn && <span>Sign Out</span>}
      {!loggedIn && <span>Sign In</span>}
    </div>
  );
};

export default SignOut;
