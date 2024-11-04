import { createRoot } from 'react-dom/client';
import './scss/index.scss';
import App from './App.tsx';
import { BrowserRouter } from "react-router-dom";
import { PersistGate } from "redux-persist/integration/react";
import { persistor, store } from "./redux/store.ts";
import { Provider } from "react-redux";

createRoot(document.getElementById('root')!).render(
  <>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter basename="/my-petlove">
          <App />
        </BrowserRouter>
      </PersistGate>
    </Provider>
  </>,
)
