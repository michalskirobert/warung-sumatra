import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import reportWebVitals from "./reportWebVitals";

import App from "./App";

import { store } from "@store/config";

import "./assets/style/index.scss";
import { ToastContainer } from "react-toastify";

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
