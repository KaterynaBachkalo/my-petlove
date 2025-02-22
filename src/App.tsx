import { Navigate, Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout";
import { lazy, useEffect } from "react";

import RestrictedRoute from "./components/Routes/RestrictedRoute";
import { useDispatch } from "react-redux";
import { AppDispatch } from "./redux/store";
import { refreshUserThunk } from "./redux/auth/operations";

const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const FirstPage = lazy(() => import("./pages/FirstPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));

const HomePage = lazy(() => import("./pages/HomePage"));
const NewsPage = lazy(() => import("./pages/NewsPage"));
const FriendsPage = lazy(() => import("./pages/FriendsPage"));
const NoticesPage = lazy(() => import("./pages/NoticesPage"));

function App() {
  const dispatch = useDispatch<AppDispatch>();

  useEffect(() => {
    dispatch(refreshUserThunk());
  }, [dispatch]);

  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" index element={<FirstPage />} />
          <Route
            path="register"
            element={
              <RestrictedRoute component={RegisterPage} redirectTo="/home" />
            }
          />
          <Route
            path="login"
            element={
              <RestrictedRoute component={LoginPage} redirectTo="/home" />
            }
          />

          <Route path="home" element={<HomePage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="friends" element={<FriendsPage />} />
          <Route path="notices" element={<NoticesPage />} />
          <Route path="profile" element={<ProfilePage />} />
          <Route path="*" element={<Navigate to="/" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
