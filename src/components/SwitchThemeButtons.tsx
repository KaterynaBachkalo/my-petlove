import { useTheme } from "../utils/useTheme";
import Icon from "./ComponentsForDesign/Icon";

const SwitchThemeButtons = () => {
  const { theme, tongleTheme } = useTheme();
  return (
    <div className="switch-buttons">
      <button type="button" onClick={tongleTheme} className="switch-button">
        <Icon
          name="icon-sun"
          className={`switch-icon ${theme === "light" ? "dark" : "light"}`}
        />
      </button>
      <button type="button" onClick={tongleTheme} className="switch-button">
        <Icon
          name="icon-moon"
          className={`switch-icon ${theme === "light" ? "light" : "dark"}`}
        />
      </button>
    </div>
  );
};

export default SwitchThemeButtons;
