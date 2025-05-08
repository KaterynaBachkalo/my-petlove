import React, { ReactNode, useMemo, useState } from "react";

import { ThemeProvider, createTheme, CssBaseline } from "@mui/material";
import { mytheme as baseTheme } from "../utils/theme";
import { ThemeContext } from "./ThemeContext";

interface IProps {
  children: ReactNode;
}

const MyThemeProvider: React.FC<IProps> = ({ children }) => {
  const [theme, setTheme] = useState<"light" | "dark">(
    (localStorage.getItem("app-theme") as "light" | "dark") || "light"
  );

  const toggleTheme = () => {
    setTheme((prev) => {
      const newTheme = prev === "light" ? "dark" : "light";
      localStorage.setItem("app-theme", newTheme);

      document.body.classList.remove(prev);

      document.body.classList.add(newTheme);

      return newTheme;
    });
  };

  const mergedTheme = useMemo(
    () =>
      createTheme({
        ...baseTheme,
        palette: {
          mode: theme,
          ...(theme === "light"
            ? {
                background: {
                  default: "#fff",
                  paper: "#fff",
                },
              }
            : {
                background: {
                  default: "#121212",
                  paper: "#1e1e1e",
                },
              }),
        },
      }),
    [theme]
  );

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      <ThemeProvider theme={mergedTheme}>
        <CssBaseline />
        {children}
      </ThemeProvider>
    </ThemeContext.Provider>
  );
};

export default MyThemeProvider;
