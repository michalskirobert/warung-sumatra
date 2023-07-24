import { NGlobalConfig } from "@namespace/global-config";

import { CiClock1, CiLocationOn, CiMail, CiPhone } from "react-icons/ci";
import { NLayout } from "@namespace/layout";
import { PhoneNumbers } from "@utils/enums";
import { formatPhoneNumber } from "@helpers/useful-functions";
import { CONSTANTS } from "@utils/index";
import { HiLanguage } from "react-icons/hi2";

export interface IMenuPage {
  label: string;
  path?: string;
  isBlank?: boolean;
  isButton?: boolean;
  isUniqueLink?: boolean;
}

export const createHeaderData = (
  language: NGlobalConfig.TLangCode
): NLayout.THeaderData => ({
  topbar: [
    {
      type: "address",
      icon: <CiLocationOn />,
      label: CONSTANTS.TRANSLATE[language].address,
    },
    {
      type: "div",
      icon: <CiClock1 />,
      label: CONSTANTS.TRANSLATE[language].restaurantOpenHours,
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
  ],
});
