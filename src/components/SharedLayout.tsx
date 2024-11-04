import { Outlet } from "react-router-dom";
import { Suspense, useState } from "react";
import { ToastContainer } from "react-toastify";

import Header from "./Header";
import Loader from "./Loader/Loader";
import Sidebar from "./Sidebar";

import "react-toastify/dist/ReactToastify.css";
import ScrollToTopButton from "./ScrollToTopButton/ScrollToTopButton";

export const SharedLayout = () => {
  const [isOpenMenu, setOpenMenu] = useState(false);

  return (
    <div>
      <Header onOpen={setOpenMenu} />
      <Sidebar onClose={() => setOpenMenu(false)} isOpen={isOpenMenu} />
      {isOpenMenu && (
        <div onClick={() => setOpenMenu(false)}>
          <Sidebar onClose={() => setOpenMenu(false)} isOpen={isOpenMenu} />
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
