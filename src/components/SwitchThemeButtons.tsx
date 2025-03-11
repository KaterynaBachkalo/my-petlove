import { useLocation } from "react-router-dom";
import { useTheme } from "../utils/useTheme";
import Icon from "./ComponentsForDesign/Icon";

const SwitchThemeButtons = () => {
  const location = useLocation();

  const { theme, tongleTheme } = useTheme();
  return (
    <div className="switch-buttons">
      <button type="button" onClick={tongleTheme} className="switch-button">
        <Icon
          name="icon-sun"
          className={`switch-icon ${theme === "light" ? "white" : "dark"} ${
            location.pathname === "/home" ? "home" : ""
          }`}
        />
      </button>
      <button type="button" onClick={tongleTheme} className="switch-button">
        <Icon
          name="icon-moon"
          className={`switch-icon ${theme === "light" ? "accent" : "light"} ${
            location.pathname === "/home" ? "home" : ""
          }`}
        />
      </button>
    </div>
  );
};

export default SwitchThemeButtons;

{
  /* <Icon
          name="icon-sun"
          className={`switch-icon ${
            location.pathname !== "/home"
              ? ""
              : theme === "light"
              ? "home white"
              : "home dark"
          }`}
        />
        <Icon
        name="icon-moon"
        className={`switch-icon ${
          location.pathname !== "/home"
            ? ""
            : theme === "light"
            ? "home accent"
            : "home light"
        }`}
      /> */
}
