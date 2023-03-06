import { GroupBase, StylesConfig } from "react-select";
import { NGlobalConfig } from "@namespace/global-config";
import { NCommonTypes } from "@namespace/commonTypes";

import * as C from "@utils/constants";

export const createLink = (
  language: NGlobalConfig.TLangCode,
  isAdmin?: boolean
): {
  label: string;
  path: string;
  isBlank?: boolean;
}[] =>
  !!isAdmin
    ? [
        { label: "Dashboard", path: C.ADMIN_ROUTE },
        { label: "Edit menu", path: C.ADMIN_MENU_PAGE_SETTINGS_ROUTE },
        { label: "Edit about", path: "/admin/settings/about" },
        { label: "Edit contact", path: "/admin/settings/contact" },
        { label: "Back to restaurant", path: "/", isBlank: true },
      ]
    : [
        {
          label: C.DASHBOARD_LABEL[language],
          path: C.DASHBOARD_ROUTE,
        },
        {
          label: C.MENU_LABEL[language],
          path: C.MENU_ROUTE,
        },
        {
          label: C.RESERVATE_LABEL[language],
          path: C.RESERVATION_ROUTE,
        },
        {
          label: C.ABOUT_LABEL[language],
          path: C.ABOUT_ROUTE,
        },
        {
          label: C.CONTACT_LABEL[language],
          path: C.CONTACT_ROUTE,
        },
      ];

export const LANGUAGE_HELPER: NGlobalConfig.TLanguage[] = [
  { label: "Polski", value: "pl" },
  { label: "English", value: "eng" },
  { label: "Bahasa", value: "bh" },
];

export const STYLED_SELECT:
  | StylesConfig<
      NGlobalConfig.TLanguage,
      false,
      GroupBase<NGlobalConfig.TLanguage>
    >
  | undefined = {
  control: (prov) => ({
    ...prov,
    background: "black",
    border: "none",
    opacity: "0.7",
  }),
  placeholder: (prov) => ({
    ...prov,
    color: "whitesmoke",
  }),
  valueContainer: (prov) => ({
    ...prov,
    color: "whitesmoke",
  }),
  singleValue: (prov) => ({
    ...prov,
    color: "whitesmoke",
  }),
};
