import FormLogin from "../components/FormLogin";
import { ToastContainer } from "react-toastify";

const LoginPage = () => {
  return (
    <>
      <div>
        <header>
          <nav></nav>
        </header>
        <div>
          <FormLogin />
        </div>
      </div>

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={true}
      />
    </>
  );
};

export default LoginPage;
