import { useLocation } from "react-router-dom";
import { useTheme } from "../utils/useTheme";
import Icon from "./ComponentsForDesign/Icon";

const SwitchThemeButtons = () => {
  const location = useLocation();

  const { theme, toggleTheme } = useTheme();

  const myToggleThemeLight = () => {
    if (theme === "dark") toggleTheme();
  };

  const myToggleThemeDark = () => {
    if (theme === "light") toggleTheme();
  };

  return (
    <div className="switch-buttons">
      <button
        type="button"
        onClick={myToggleThemeLight}
        className="switch-button"
      >
        <Icon
          name="icon-sun"
          className={`switch-icon ${theme === "light" ? "white" : "dark"} ${
            location.pathname === "/home" ? "home" : ""
          }`}
        />
      </button>
      <button
        type="button"
        onClick={myToggleThemeDark}
        className="switch-button"
      >
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
