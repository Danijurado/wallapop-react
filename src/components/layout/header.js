import { ReactComponent as Icon } from "../../assets/w.svg";
import Button from "../button";
import { logout } from "../../pages/auth/service";
import { useContext } from "react";
import { AuthContext } from "../../pages/auth/context";

function Header() {
  const {isLogged, onLogout} = useContext(AuthContext);
  const handleLogout = () => {
    logout();
    onLogout();
  };
  return (
    <header>
      <div>
        <Icon width={40} height={40} />
      </div>
      <nav>
        {isLogged ? (
          <Button onClick={handleLogout}>Logout</Button>
        ) : (
          <Button $variant="primary">Login</Button>
        )}
      </nav>
    </header>
  );
}

export default Header;
