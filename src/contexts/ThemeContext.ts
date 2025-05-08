import { createContext } from "react";
import { IContextTheme } from "../types";

export const ThemeContext = createContext<IContextTheme | undefined>(undefined);
