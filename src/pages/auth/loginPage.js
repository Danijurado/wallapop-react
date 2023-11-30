import Button from "../../components/button";
import { login } from "./service";

function LoginPage({ onLogin }) {
  const handleSubmit = async (event) => {
    event.preventDefault();
    await login({
      email: event.target.email.value,
      password: event.target.password.value,
    });
    onLogin();
  };

  return (
    <div>
      <h1>Log in to Wallapop</h1>
      <form onSubmit={handleSubmit}>
        <input type="email" name="email" />
        <input type="password" name="password" />
        <Button type="submit" $variant="primary">
          Log in
        </Button>
      </form>
    </div>
  );
}

export default LoginPage;
