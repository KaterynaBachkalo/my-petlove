import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setToken } from "../../redux/auth/authSlice";
import { refreshUserThunk } from "../../redux/auth/operations";
import { AppDispatch } from "../../redux/store";

const AuthRoute = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams] = useSearchParams();
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = searchParams.get("accessToken");
    const refreshToken = searchParams.get("refreshToken");

    if (accessToken && refreshToken) {
      dispatch(setToken({ accessToken, refreshToken }));
      dispatch(refreshUserThunk()).finally(() => {
        navigate("/");
      });
    } else {
      navigate("/");
    }
  }, [dispatch, navigate, searchParams]);

  return null;
};

export default AuthRoute;
