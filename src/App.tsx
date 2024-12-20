import { Navigate, Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout";
import { lazy } from "react";

import RestrictedRoute from "./components/RestrictedRoute";
import PrivateRoute from "./components/PrivateRoute";

const LoginPage = lazy(() => import("./pages/LoginPage"));
const RegisterPage = lazy(() => import("./pages/RegisterPage"));
const FirstPage = lazy(() => import("./pages/FirstPage"));
const ProfilePage = lazy(() => import("./pages/ProfilePage"));

const HomePage = lazy(() => import("./pages/HomePage"));
const NewsPage = lazy(() => import("./pages/NewsPage"));
const FriendsPage = lazy(() => import("./pages/FriendsPage"));
const NoticesPage = lazy(() => import("./pages/NoticesPage"));

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route path="/" index element={<FirstPage />} />
          <Route
            path="/register"
            element={
              <RestrictedRoute component={RegisterPage} redirectTo="/home" />
            }
          />
          <Route
            path="/login"
            element={
              <RestrictedRoute component={LoginPage} redirectTo="/home" />
            }
          />

          <Route path="home" element={<HomePage />} />
          <Route path="news" element={<NewsPage />} />
          <Route path="friends" element={<FriendsPage />} />
          <Route path="notices" element={<NoticesPage />} />

          <Route path="*" element={<Navigate to="/" />} />
        </Route>
        <Route
          path="/profile"
          element={<PrivateRoute component={ProfilePage} redirectTo="/" />}
        />
      </Routes>
    </>
  );
}

export default App;
