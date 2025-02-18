import { useContext } from "react";
import { ThemeContext } from "../main";

export const useTheme = () => {
  const context = useContext(ThemeContext);

  if (!context) throw new Error("No context");

  return context;
};
