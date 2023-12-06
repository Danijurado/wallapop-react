import { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Button from "../../components/button";
import { useAuth } from "./context";
import { login } from "./service";

function LoginPage() {
  const { onLogin } = useAuth();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
    session: false,
  });

  const location = useLocation();
  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();
    await login(credentials);
    onLogin();

    const to = location?.state?.from || "/";
    navigate(to);
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
  const disabled = !(credentials.email && credentials.password);

  return (
    <div>
      <h1>Log in to Wallapop</h1>
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
          Log in
        </Button>
        <input
          onChange={handleSessionChange}
          type="checkbox"
          id="session"
          name="session"
          checked={credentials.session}
        />
        <label htmlFor="session">Keep me signed</label>
      </form>
    </div>
  );
}

export default LoginPage;
