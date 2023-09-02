import { NLayout } from "@namespace/layout";
import { CONSTANTS } from "@utils/index";
import { TFunction } from "i18next";

export const createNav = (
  translate: TFunction<"common", undefined>
): NLayout.TNav[] => [
  {
    label: translate("navigation.dashboard"),
    path: CONSTANTS.DASHBOARD_ROUTE,
  },
  {
    label: translate("navigation.menu"),
    path: CONSTANTS.MENU_ROUTE,
  },
  {
    label: translate("navigation.aboutUs"),
    path: CONSTANTS.ABOUT_ROUTE,
  },
  {
    label: translate("navigation.contact"),
    path: CONSTANTS.CONTACT_ROUTE,
  },
];
