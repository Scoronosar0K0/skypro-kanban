import { Navigate } from "react-router-dom";
import { AppRoutes } from "../Pages/appRoutes";
import { UserHook } from "../../hooks/useUserHook";
import { Layout } from "../Layout/Layout";

function PrivateRoute() {
  const { user } = UserHook();
  return user ? <Layout /> : <Navigate to={AppRoutes.SIGNIN} />;
}

export default PrivateRoute;
