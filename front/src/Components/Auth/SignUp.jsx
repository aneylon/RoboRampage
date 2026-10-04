const SignUp = () => {
  const emailError = true;
  const passwordError = true;

  const signUp = () => {
    console.log("Sign Up!");
    // call api
    // if successful set user
    // navigate to main page

    // if error display error
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
      {emailError && (
        <div>
          <span className="errorText">Email Error Text here</span>
        </div>
      )}
      <div>
        <span>Password : </span>
        <input
          type="password"
          name="password"
          id="password"
          placeholder="Strong!23"
        />
      </div>
      {emailError && (
        <div>
          <span className="errorText">Email Error Text here</span>
        </div>
      )}
      <button onClick={signUp}>Sign Up</button>
    </div>
  );
};

export default SignUp;
