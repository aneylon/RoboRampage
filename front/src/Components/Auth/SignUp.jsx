const SignUp = () => {
  const signUp = () => {
    console.log("Sign Up!");
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
      <button onClick={signUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;
