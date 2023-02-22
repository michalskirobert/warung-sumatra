import { GroupBase, StylesConfig } from "react-select";
import { NGlobalConfig } from "@namespace/global-config";
import { NCommonTypes } from "@namespace/commonTypes";

import * as C from "@utils/constants";

export const createLink = (
  language: NGlobalConfig.TLangCode
): {
  label: string;
  path: string;
  isBlank?: boolean;
}[] => [
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

export const STYLED_SELECT: StylesConfig<
  NCommonTypes.TOptions,
  false,
  GroupBase<NCommonTypes.TOptions>
> = {
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
