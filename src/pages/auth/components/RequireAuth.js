import { Navigate, useLocation } from "react-router-dom";
//import { useAuth } from "../context";
import { useSelector } from "react-redux";
import { getIsLogeged } from "../../../store/selectors";

function RequireAuth({ children }) {
  const location = useLocation();
  //const { isLogged } = useAuth();
  const isLogged = useSelector(getIsLogeged);
  return isLogged ? (
    children
  ) : (
    <Navigate to="/login" state={{ from: location }} />
  );
}

export default RequireAuth;
