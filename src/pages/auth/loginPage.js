import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/button";
//import { useAuth } from "./context";
import { login } from "./service";
import "./loginPage.css";
import { useDispatch, useSelector } from "react-redux";
import { authLoginError, authLoginRequest, authLoginSucces, uiResetError } from "../../store/actions";
import { getUi } from "../../store/selectors";


function LoginPage() {
  const dispatch = useDispatch();
  const {isFetching, error} = useSelector(getUi);
  //const { onLogin } = useAuth();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    session: false,
  });
  //const [error, setError] = useState(null);
  //const [fetch, setFetch] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();


  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      dispatch(authLoginRequest());
      await login(credentials);
      dispatch(authLoginSucces());
      const to = location?.state?.from || "/";
      navigate(to);
    } catch (error) {
      dispatch(authLoginError(error));
    }
  };

  const handleEmailChange = (event) => {
    setCredentials((value) => ({ ...value, email: event.target.value }));
  };

  const handlePasswordChange = (event) => {
    setCredentials((value) => ({ ...value, password: event.target.value }));
  };

  const handleSessionChange = (event) => {
    setCredentials((value) => ({ ...value, session: event.target.checked }));
  };
  const disabled = !(credentials.email && credentials.password) || isFetching;

  const resetError = () => {
    dispatch(uiResetError());
  };

  return (
    <div className="loginPage">
      <h1 className="loginPage-title">Login</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          placeholder="email"
          onChange={handleEmailChange}
          value={credentials.email}
        />
        <input
          type="password"
          name="password"
          placeholder="password"
          onChange={handlePasswordChange}
          value={credentials.password}
        />
        <Button type="submit" $variant="primary" disabled={disabled}>
          {isFetching ? "Loading..." : "Log in"}
        </Button>
        <div className="checkbox">
          <input
            onChange={handleSessionChange}
            type="checkbox"
            id="session"
            name="session"
            checked={credentials.session}
          />
          <label htmlFor="session">Keep me signed</label>
        </div>
      </form>

      {error && (
        <div className="loginPage-error" onClick={resetError}>
          {error.message}
        </div>
      )}
    </div>
  );
}

export default LoginPage;
