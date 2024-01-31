import { ReactComponent as Icon } from "../../assets/w.svg";
import Button from "../button";
import { logout } from "../../pages/auth/service";
//import { useAuth } from "../../pages/auth/context";
import { Link, NavLink } from "react-router-dom";
import "./header.css";
import { useDispatch } from "react-redux";
import { authLogout } from "../../store/actions";
import { useSelector } from "react-redux";

function Header() {
  const dispatch = useDispatch()
  
  //const handleLogout = () => {
    //logout();
   // onLogout();
  //};
  const isLogged  = useSelector(state => state.auth);

  const onLogout = () => {dispatch(authLogout())};

  const handleLogout = async() => {
    await logout();
    onLogout();
  }
  return (
    <header className="header">
      <div className="header-logo">
        <Icon width={40} height={40} />
      </div>

      <nav className="header-nav">
        <div className="header-link">
          <NavLink
            to="/adverts/new"
            style={({ isActive }) => (isActive ? { color: "blue" } : null)}
          >
            Add adverts
          </NavLink>
        </div>
        <div className="header-link">
          <NavLink
            to="/"
            style={({ isActive }) => (isActive ? { color: "blue" } : null)}
          >
            Latest adverts
          </NavLink>
        </div>
        {isLogged ? (
          <Button onClick={handleLogout} className="button">
            Logout
          </Button>
        ) : (
          <Button as={Link} to="/login" $variant="primary">
            Login
          </Button>
        )}
      </nav>
    </header>
  );
}

export default Header;
