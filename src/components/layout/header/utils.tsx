import { NGlobalConfig } from "@namespace/global-config";

import { CiClock1, CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import { NLayout } from "@namespace/layout";
import { PhoneNumbers } from "@utils/enums";
import { formatPhoneNumber } from "@helpers/useful-functions";
import { CONSTANTS } from "@utils/index";
import { HiLanguage } from "react-icons/hi2";
import { TFunction } from "i18next";

export interface IMenuPage {
  label: string;
  path?: string;
  isBlank?: boolean;
  isButton?: boolean;
  isUniqueLink?: boolean;
}

export const createHeaderData = (
  translate: TFunction<"common", undefined>
): NLayout.THeaderData => ({
  topbar: [
    {
      type: "address",
      icon: <CiLocationOn />,
      label: translate("address"),
    },
    {
      type: "div",
      icon: <CiClock1 />,
      label: translate("restaurantOpenHours"),
    },
    {
      type: "link",
      icon: <CiPhone />,
      label: formatPhoneNumber(PhoneNumbers.Contact) || "",
      phoneTo: `+48${PhoneNumbers.Contact}` || "",
    },
    {
      type: "link",
      icon: <CiMail />,
      label: CONSTANTS.BOOKING_EMAIL,
      mailTo: CONSTANTS.BOOKING_EMAIL,
    },
    { type: "language", icon: <HiLanguage />, label: "Language" },
  ],
  nav: [
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
  ],
});
