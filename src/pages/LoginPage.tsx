import FormLogin from "../components/FormLogin";
import { ToastContainer } from "react-toastify";
import DeskImage1x from "../img/authorization/login/desk/image@1x.png";
import DeskImage2x from "../img/authorization/login/desk/image@2x.png";
import TabImage1x from "../img/authorization/login/tab/image@1x.png";
import TabImage2x from "../img/authorization/login/tab/image@2x.png";
import MobImage1x from "../img/authorization/login/image@1x.png";
import MobImage2x from "../img/authorization/login/image@2x.png";

const LoginPage = () => {
  return (
    <>
      <div>
        <picture>
          <source
            media="(min-width: 1280px)"
            srcSet={`${DeskImage1x} 1x, ${DeskImage2x} 2x`}
            type="image/png"
            width={592}
          />
          <source
            media="(min-width: 768px)"
            srcSet={`${TabImage1x} 1x, ${TabImage2x} 2x`}
            type="image/png"
            width={704}
          />
          <source
            media="(-webkit-min-device-pixel-ratio: 2), (min-resolution: 192dpi)"
            srcSet={`${MobImage1x} 1x, ${MobImage2x} 2x`}
            type="image/png"
          />
          <img
            src={MobImage1x}
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
