import FormLogin from "../components/FormLogin";
import { ToastContainer } from "react-toastify";

const LoginPage = () => {
  return (
    <>
      <div>
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet="src/img/authorization/login/desk/image@1x.png 1x, src/img/authorization/registration/desk/image@2x.png 2x"
            type="image/png"
            width={592}
          />
          <source
            media="(min-width: 768px)"
            srcSet="src/img/authorization/login/tab/image@1x.png 1x, src/img/authorization/registration/tab/image@2x.png 2x"
            type="image/png"
            width={704}
          />
          <source
            media="(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)"
            srcSet="src/img/authorization/login/image@1x.png 1x, src/img/authorization/registration/image@2x.png 2x"
            type="image/png"
          />
          <img
            src="src/img/authorization/login/image@1x.png"
            alt="dog"
            className="registration-img"
            width="335"
            height="280"
          />
        </picture>
        <div className="login-wrap">
          <h2 className="login-title">Log in</h2>
          <h3 className="login-subtitle">
            Welcome! Please enter your credentials to login to the platform:{" "}
          </h3>
          <FormLogin
            formText="Don’t have an account?"
            link="/register"
            textLink="Register"
            buttonText="Log in"
            isInput={false}
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

export default LoginPage;
