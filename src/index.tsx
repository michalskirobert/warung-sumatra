import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import reportWebVitals from "./reportWebVitals";

import App from "./App";
import { store } from "@store/config";

import { PersistGate } from "redux-persist/integration/react";
import persistStore from "redux-persist/es/persistStore";

import "./assets/style/index.scss";

let persistor = persistStore(store);

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <Provider {...{ store }}>
      <PersistGate loading={null} persistor={persistor}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
