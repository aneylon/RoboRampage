const SignIn = () => {
  const signIn = () => {
    console.log("Sign In!");
  };
  return (
    <div>
      <div>
        <span>Email : </span>
        <input
          type="email"
          name="email"
          id="email"
          placeholder="user@host.com"
        />
      </div>
      <div>
        <span>Password : </span>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Strong!23"
        />
      </div>
      <button onClick={signIn}>Sign In</button>
    </div>
  );
};

export default SignIn;
