import { Navigate, Route, Routes } from "react-router-dom";
import { SharedLayout } from "./components/SharedLayout";
// import { lazy } from "react";

import RestrictedRoute from "./components/RestrictedRoute";
// import PrivateRoute from "./components/PrivateRoute";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";
import HomePage from "./pages/HomePage";

// const AllProductsPage = lazy(() => import("./pages/AllProductsPage"));
// const DashboardPage = lazy(() => import("./pages/DashboardPage/DashboardPage"));
// const AllOrdersPage = lazy(() => import("./pages/AllOrdersPage"));
// const AllSuppliersPage = lazy(() => import("./pages/AllSuppliersPage"));
// const CustomersDataPage = lazy(() => import("./pages/CustomersDataPage"));

function App() {
  return (
    <>
      <Routes>
        <Route index element={<Navigate to="/home" />}></Route>
        <Route
          path="home"
          element={
            <RestrictedRoute component={HomePage} redirectTo="/register" />
          }
        />

        <Route path="/" element={<SharedLayout />}>
          <Route
            path="register"
            element={
              <RestrictedRoute component={RegisterPage} redirectTo="/login" />
            }
          ></Route>

          <Route
            path="login"
            element={
              <RestrictedRoute component={LoginPage} redirectTo="/home" />
            }
          ></Route>

          <Route path="*" element={<Navigate to="home" />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
