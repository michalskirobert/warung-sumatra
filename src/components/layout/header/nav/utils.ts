import { NGlobalConfig } from "@namespace/global-config";
import { NLayout } from "@namespace/layout";
import { CONSTANTS } from "@utils/index";

export const createNav = (
  language: NGlobalConfig.TLangCode
): NLayout.TNav[] => [
  {
    label: CONSTANTS.DASHBOARD_LABEL[language],
    path: CONSTANTS.DASHBOARD_ROUTE,
  },
  {
    label: CONSTANTS.MENU_LABEL[language],
    path: CONSTANTS.MENU_ROUTE,
  },
  {
    label: CONSTANTS.ABOUT_LABEL[language],
    path: CONSTANTS.ABOUT_ROUTE,
  },
  {
    label: CONSTANTS.CONTACT_LABEL[language],
    path: CONSTANTS.CONTACT_ROUTE,
  },
];
