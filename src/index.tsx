import React from "react";
import ReactDOM from "react-dom/client";

import { Provider } from "react-redux";

import reportWebVitals from "./reportWebVitals";

import { I18nextProvider } from "react-i18next";
import i18next from "i18next";

import App from "./App";

import { store } from "@store/config";
import { ToastContainer } from "react-toastify";

import common_pl from "./utils/translations/pl/common.json";
import common_en from "./utils/translations/eng/common.json";
import common_bh from "./utils/translations/bh/common.json";

import contact_pl from "./utils/translations/pl/contact.json";
import contact_en from "./utils/translations/eng/contact.json";
import contact_bh from "./utils/translations/bh/contact.json";

import "./assets/style/index.scss";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

i18next.init({
  interpolation: { escapeValue: false },
  lng: "pl",
  resources: {
    eng: {
      common: common_en,
      contact: contact_en,
    },
    pl: {
      common: common_pl,
      contact: contact_pl,
    },
    bh: {
      common: common_bh,
      contact: contact_bh,
    },
  },
});

root.render(
  <React.StrictMode>
    <Provider {...{ store }}>
      <I18nextProvider i18n={i18next}>
        <App />
        <ToastContainer {...{ theme: "colored", icon: true }} />
      </I18nextProvider>
    </Provider>
  </React.StrictMode>
);

reportWebVitals();
