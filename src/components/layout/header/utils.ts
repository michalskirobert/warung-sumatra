import { GroupBase, StylesConfig } from "react-select";

import * as C from "@utils/constants";

export const NAV_HELPER: {
  label: string;
  path: string;
  isBlank?: boolean;
}[] = [
  {
    label: C.DASHBORAD,
    path: C.DASHBOARD_ROUTE,
  },
  {
    label: C.MENU,
    path: C.MENU_ROUTE,
  },
  {
    label: C.RESERVATE,
    path: C.RESERVATION_ROUTE,
  },
  {
    label: C.ABOUT,
    path: C.ABOUT_ROUTE,
  },
  {
    label: C.CONTACT,
    path: C.CONTACT_ROUTE,
  },
];

export const LANGUAGE_HELPER: { label: string; value: string }[] = [
  { label: "Polski", value: "pl" },
  { label: "English", value: "eng" },
  { label: "Bahasa", value: "bh" },
];

export const STYLED_SELECT: StylesConfig<
  {
    label: string;
    value: string;
  },
  false,
  GroupBase<{
    label: string;
    value: string;
  }>
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
