import FormLogin from "../components/FormLogin";
import { ToastContainer } from "react-toastify";

const RegisterPage = () => {
  return (
    <>
      <div>
        <img
          srcSet="../img/authorization/registration/image@1x.png, ../img/authorization/registration/image@2x.png"
          src="../img/authorization/registration/image@1x.png"
          alt="cat"
          className="registration-img"
          width="335"
          height="280"
        />
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
