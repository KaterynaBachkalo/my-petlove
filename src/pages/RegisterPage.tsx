import FormLogin from "../components/FormLogin";
import { ToastContainer } from "react-toastify";

const RegisterPage = () => {
  return (
    <>
      <div>
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet="src/img/authorization/registration/desk/image@1x.png 1x, src/img/authorization/registration/desk/image@2x.png 2x"
            type="image/png"
            width={592}
          />
          <source
            media="(min-width: 768px)"
            srcSet="src/img/authorization/registration/tab/image@1x.png 1x, src/img/authorization/registration/tab/image@2x.png 2x"
            type="image/png"
            width={704}
          />
          <source
            media="(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)"
            srcSet="src/img/authorization/registration/image@1x.png 1x, src/img/authorization/registration/image@2x.png 2x"
            type="image/png"
          />
          <img
            src="src/img/authorization/registration/image@1x.png"
            alt="cat"
            className="registration-img"
            width="335"
            height="280"
          />
        </picture>

        <div className="registration-wrap">
          <h2 className="registration-title">Registration</h2>
          <h3 className="registration-subtitle">
            Thank you for your interest in our platform.
          </h3>
          <FormLogin
            formText="Already have an account?"
            link="/login"
            textLink="Login"
            buttonText="Registration"
            isInput={true}
          />
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
