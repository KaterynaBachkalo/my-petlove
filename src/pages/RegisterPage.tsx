import FormLogin from "../components/FormLogin";
import { ToastContainer } from "react-toastify";
import DeskImage1x from "../img/authorization/registration/desk/image@1x.png";
import DeskImage2x from "../img/authorization/registration/desk/image@2x.png";
import TabImage1x from "../img/authorization/registration/tab/image@1x.png";
import TabImage2x from "../img/authorization/registration/tab/image@2x.png";
import MobImage1x from "../img/authorization/registration/image@1x.png";
import MobImage2x from "../img/authorization/registration/image@2x.png";
import Picture from "../components/Picture";
import { useTheme } from "../utils/useTheme";

const RegisterPage = () => {
  const { theme } = useTheme();

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
          alt="Cat"
          className="registration-img"
        />

        <div className={`registration-wrap ${theme === "light" ? "" : "dark"}`}>
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
