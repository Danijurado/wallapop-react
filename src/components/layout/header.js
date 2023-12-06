import { ReactComponent as Icon } from "../../assets/w.svg";
import Button from "../button";
import { logout } from "../../pages/auth/service";
import { useAuth } from "../../pages/auth/context";
import { Link, NavLink } from "react-router-dom";

function Header() {
  const { isLogged, onLogout } = useAuth();
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
        <NavLink to="/adverts/new" style={({isActive}) => (isActive ? {color: 'blue'} : null)}>Add adverts</NavLink>
        <NavLink to="/">Latest adverts</NavLink>
        {isLogged ? (
          <Button onClick={handleLogout}>Logout</Button>
        ) : (
          <Button as={Link} to="/login" $variant="primary">Login</Button>
        )}
      </nav>
    </header>
  );
}

export default Header;
