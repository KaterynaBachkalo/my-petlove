import { Outlet, useLocation } from "react-router-dom";
import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";

import Header from "./Header";
import Loader from "./ComponentsForDesign/Loader/Loader";
import Sidebar from "./Sidebar";

import "react-toastify/dist/ReactToastify.css";
import ScrollToTopButton from "./ComponentsForDesign/ScrollToTopButton/ScrollToTopButton";

export const SharedLayout = () => {
  const [isOpenMenu, setOpenMenu] = useState(false);

  const openSidebar = () => {
    setOpenMenu(true);
  };

  const closeSidebar = () => {
    setOpenMenu(false);
  };

  const location = useLocation();

  return (
    <div
      className={
        location.pathname !== "/"
          ? `container ${location.pathname !== "/home" ? "" : "home"}`
          : ""
      }
    >
      {location.pathname !== "/" && <Header onOpen={openSidebar} />}
      {isOpenMenu && (
        <div onClick={closeSidebar}>
          <Sidebar onClose={closeSidebar} isOpen={isOpenMenu} />
        </div>
      )}
      <ScrollToTopButton />
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
      />
      <main>
        <Suspense
          fallback={
            <div>
              <Loader />
            </div>
          }
        >
          <Outlet />
        </Suspense>
      </main>
    </div>
  );
};
