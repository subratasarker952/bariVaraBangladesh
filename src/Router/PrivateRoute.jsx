import { Navigate, useLocation } from "react-router-dom";
import useAuth from "../hooks/useAuth";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, userLoading } = useAuth();
  if (userLoading) return <p>Loading...</p>;
  if (user) return children;
  return <Navigate to="/login" state={location} replace></Navigate>;
};

export default PrivateRoute;
