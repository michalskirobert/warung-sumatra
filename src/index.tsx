import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import reportWebVitals from "./reportWebVitals";

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import App from "./App";

import { store } from "@store/config";
import { ToastContainer } from "react-toastify";

import "./assets/style/index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider {...{ store }}>
      <App />
      <ToastContainer {...{ theme: "colored", icon: true }} />
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
