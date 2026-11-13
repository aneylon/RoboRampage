import { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import useFetch from "../../Hooks/useFetch";
import Spinner from "../Loading/Spinner";

const SignUp = () => {
  const [email, setEmail] = useState(null);
  const [emailError, setEmailError] = useState(false);
  const [password, setPassword] = useState(null);
  const [passwordError, setPasswordError] = useState(false);

  const { data, loading, error, request } = useFetch();

  const navigate = useNavigate();

  const signUp = () => {
    request("http://localhost:4200/auth/signup", "POST", {
      email,
      password,
    });
  };

  useEffect(() => {
    // TODO : navigate only on successful
    if (data?.message === "success") navigate("/");
  }, [data, navigate]);

  useEffect(() => {
    // TODO : show correct error if error

    setPasswordError("invalid password");
    setEmailError("this email is already in use");
  }, [error]);

  return (
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
          onChange={(e) => setEmail(e.target.value)}
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
      <button disabled={!email && !password} onClick={signUp}>
        Sign Up
      </button>
    </div>
  );
};

export default SignUp;
