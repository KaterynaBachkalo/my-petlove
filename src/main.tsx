import { createRoot } from "react-dom/client";
import "./scss/index.scss";
import App from "./App.tsx";
import { HashRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store.ts";
import { Provider } from "react-redux";
import MyThemeProvider from "./contexts/ThemeProvider.tsx";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import "dayjs/locale/en";

const rootElement = document.getElementById("root");

const root = createRoot(rootElement!);

root.render(
  <>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <HashRouter>
          <MyThemeProvider>
            <LocalizationProvider dateAdapter={AdapterDayjs} adapterLocale="en">
              <App />
            </LocalizationProvider>
          </MyThemeProvider>
        </HashRouter>
      </PersistGate>
    </Provider>
  </>
);
