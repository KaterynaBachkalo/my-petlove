import FormLogin from "../components/FormLogin";
import { ToastContainer } from "react-toastify";
import DeskImage1x from "../img/authorization/login/desk/image@1x.png";
import DeskImage2x from "../img/authorization/login/desk/image@2x.png";
import TabImage1x from "../img/authorization/login/tab/image@1x.png";
import TabImage2x from "../img/authorization/login/tab/image@2x.png";
import MobImage1x from "../img/authorization/login/image@1x.png";
import MobImage2x from "../img/authorization/login/image@2x.png";
import Picture from "../components/Picture";

const LoginPage = () => {
  return (
    <>
      <div className="auth-wrapper">
        <Picture
          mob1x={MobImage1x}
          mob2x={MobImage2x}
          tab1x={TabImage1x}
          tab2x={TabImage2x}
          desk1x={DeskImage1x}
          desk2x={DeskImage2x}
          alt="Dog"
          className="registration-img"
        />
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
