import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/button";
import { useAuth } from "./context";
import { login } from "./service";
import './loginPage.css';
function LoginPage() {
  const { onLogin } = useAuth();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    session: false,
  });
  const [error, setError] = useState(null);
  const [fetch, setFetch] = useState(false);

  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    try {
      setFetch(true);
      await login(credentials);
      setFetch(false);
      onLogin();
      const to = location?.state?.from || "/";
      navigate(to);
    } catch (error) {
      setFetch(false);
      setError(error);
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
  const disabled = !(credentials.email && credentials.password) || fetch;

  const resetError = () => {
    setError(null);
  };

  return (
    <div className="loginPage">
      <h1 className="loginPage-title">Log in to Wallapop</h1>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          name="email"
          onChange={handleEmailChange}
          value={credentials.email}
        />
        <input
          type="password"
          name="password"
          onChange={handlePasswordChange}
          value={credentials.password}
        />
        <Button type="submit" $variant="primary" disabled={disabled}>
          {fetch ? "Loading..." : "Log in"}
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
