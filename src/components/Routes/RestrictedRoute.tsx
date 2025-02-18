import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectIsAuthenticated } from "../../redux/auth/selectors";
import { selectIsLoading } from "../../redux/pet/selectors";

interface IProps {
  component: React.ComponentType;
  redirectTo?: string;
}

const RestrictedRoute: React.FC<IProps> = ({
  component: Component,
  redirectTo = "/",
}) => {
  const authenticated = useSelector(selectIsAuthenticated);

  const isloading = useSelector(selectIsLoading);

  if (isloading) return null;

  return authenticated ? <Navigate to={redirectTo} replace /> : <Component />;
};

export default RestrictedRoute;
