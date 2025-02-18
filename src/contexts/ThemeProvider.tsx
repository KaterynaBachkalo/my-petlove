import React, { ReactNode, useState } from "react";
import { ThemeContext } from "../main";

interface IProps {
  children: ReactNode;
}

const ThemeProvider: React.FC<IProps> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">("light");

  const tongleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";

      document.body.classList.remove(prev);
      document.body.classList.add(newTheme);

      return newTheme;
    });
  };

  return (
    <ThemeContext.Provider value={{ theme, tongleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export default ThemeProvider;
