import { useEffect, useState } from "react";
import { NavLink, useNavigate } from "react-router";
import useFetch from "../../Hooks/useFetch";
import Spinner from "../Loading/Spinner";

const SignIn = () => {
  const [email, setEmail] = useState(null);
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState(null);
  const [passwordError, setPasswordError] = useState(false);

  const { data, loading, error, request } = useFetch();

  const navigate = useNavigate();

  const signIn = () => {
    request("http://localhost:4200/auth/signin", "POST", {
      email,
      password,
    });
  };

  useEffect(() => {
    // TODO : Navigate only on success
    if (data?.message === "success") navigate("/");
  }, [data, navigate]);

  useEffect(() => {
    // TODO : show correct error if error
    setPasswordError("invalid password");
    setEmailError("this email is already in use");
  }, [error]);

  return (
    <>
      <div>
        {loading && (
          <div>
            <Spinner />
          </div>
        )}
        <div>
          <span>Email : </span>
          <input
            type="email"
            name="email"
            id="email"
            placeholder="user@host.com"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
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
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </div>
        {passwordError && (
          <div>
            <span className="errorText">Password Error Text here</span>
          </div>
        )}
        <button disabled={!email && !password} onClick={signIn}>
          Sign In
        </button>
      </div>
      <div>
        No account? <NavLink to="/signup">Sign Up</NavLink>
      </div>
    </>
  );
};

export default SignIn;
