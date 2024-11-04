import FormLogin from "../components/FormLogin";
import { ToastContainer } from "react-toastify";

const RegisterPage = () => {
  return (
    <>
      <div>
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

export default RegisterPage;
