import { useState } from "react";
import Button from "../../components/button";
import { login } from "./service";

function LoginPage({ onLogin }) {
  
  const [credentials, setCredentials] = useState({
    email: '', 
    password: '',
  })
  const handleSubmit = async (event) => {
    event.preventDefault();
    await login(credentials);
    onLogin();
  };

  const handleEmailChange = (event) => {
    setCredentials({email: event.target.value, password: credentials.password,});
  };

  const handlePasswordChange = (event) => {
    setCredentials({email: credentials.email, password: event.target.value});
  };

  const disabled = !(credentials.email && credentials.password);

  return (
    <div>
      <h1>Log in to Wallapop</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" onChange={handleEmailChange} value={credentials.email} />
        <input
          type="password"
          name="password"
          onChange={handlePasswordChange}
          value={credentials.password}
        />
        <Button type="submit" $variant="primary" disabled={disabled}>
          Log in
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;
