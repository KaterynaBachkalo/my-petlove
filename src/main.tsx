import { createRoot } from "react-dom/client";
import "./scss/index.scss";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store.ts";
import { Provider } from "react-redux";
import { createContext } from "react";
import { IContextTheme } from "./types.ts";
import ThemeProvider from "./contexts/ThemeProvider.tsx";

export const ThemeContext = createContext<IContextTheme | undefined>(undefined);

createRoot(document.getElementById("root")!).render(
  <>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter basename="/my-petlove">
          <ThemeProvider>
            <App />
          </ThemeProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </>
);
