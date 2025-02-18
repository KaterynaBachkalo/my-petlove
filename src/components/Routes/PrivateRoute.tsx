import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import {
  selectAuthAccessToken,
  selectAuthIsLoading,
  selectIsAuthenticated,
} from "../../redux/auth/selectors";
import { useEffect } from "react";
import { refreshUserThunk } from "../../redux/auth/operations";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../redux/store";

interface IProps {
  component: React.ComponentType;
  redirectTo?: string;
}

const PrivateRoute: React.FC<IProps> = ({
  component: Component,
  redirectTo = "/login",
}) => {
  const authenticated = useSelector(selectIsAuthenticated);

  const isLoading = useSelector(selectAuthIsLoading);

  const token = useSelector(selectAuthAccessToken);

  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    if (!authenticated && token) dispatch(refreshUserThunk());
  }, [authenticated, token, dispatch]);

  if (isLoading || (token && !authenticated)) {
    return null;
  }

  return authenticated ? <Component /> : <Navigate to={redirectTo} replace />;
};

export default PrivateRoute;
