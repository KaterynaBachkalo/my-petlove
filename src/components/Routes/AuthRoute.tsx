import { useNavigate, useSearchParams } from "react-router-dom";
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import { setToken } from "../../redux/auth/authSlice";
import { refreshUserThunk } from "../../redux/auth/operations";
import { AppDispatch } from "../../redux/store";

const AuthRoute = () => {
  const dispatch = useDispatch<AppDispatch>();
  const [searchParams] = useSearchParams();
  console.log(searchParams);
  const navigate = useNavigate();

  useEffect(() => {
    const accessToken = searchParams.get("accessToken");
    const refreshToken = searchParams.get("refreshToken");

    console.log("accessToken", accessToken);
    console.log("refreshToken", refreshToken);

    if (accessToken && refreshToken) {
      dispatch(setToken({ accessToken, refreshToken }));
      dispatch(refreshUserThunk()).finally(() => {
        navigate("/");
      });
    } else {
      navigate("/");
    }
  }, [dispatch, navigate, searchParams]);

  console.log(window.location.href);

  return null;
};

export default AuthRoute;
