import { NCommonTypes } from "@namespace/commonTypes";

// Public routes
export const DASHBOARD_ROUTE = "/";
export const MENU_ROUTE = "/menu";
export const RESERVATION_ROUTE = "/reservate";
export const ABOUT_ROUTE = "/about";
export const CONTACT_ROUTE = "/contact";

//Admin routes
export const ADMIN_ROUTE = "/admin";
export const ADMIN_MENU_PAGE_SETTINGS_ROUTE = `${ADMIN_ROUTE}${MENU_ROUTE}/settings`;
export const LOGIN_PAGE_ROUTE = `${ADMIN_ROUTE}/sign-in`;

//Menu
export const DASHBORAD = "Home";
export const MENU = "Menu";
export const RESERVATE = "Reservate";
export const ABOUT = "About";
export const CONTACT = "Contact";

export const DASHBOARD_LABEL: NCommonTypes.TTranslateProps = {
  pl: "Strona głowna",
  eng: "Home",
  bh: "Beranda",
};

export const MENU_LABEL: NCommonTypes.TTranslateProps = {
  pl: "Menu",
  bh: "Menu",
  eng: "Menu",
};

export const RESERVATE_LABEL: NCommonTypes.TTranslateProps = {
  pl: "Zarezerwuj stolik",
  bh: "Memesan meja",
  eng: "Book a table",
};

export const ABOUT_LABEL: NCommonTypes.TTranslateProps = {
  pl: "O nas",
  bh: "Tentang kami",
  eng: "About us",
};

export const CONTACT_LABEL: NCommonTypes.TTranslateProps = {
  pl: "Kontakt",
  bh: "Kontak",
  eng: "Contact",
};

//Common
export const RESTAURANT_NAME = "Warung Sumatra";
export const WELCOME = `Welcome to ${RESTAURANT_NAME}`;
export const ADMIN_PAGE = "Admin page";

//Masks
export const MASK_TYPE_PHONE = "+4\\8 99 999 99 99 99 99 99 99";
export const MASK_TYPE_MOBILE_PHONE = "+4\\8 999 999 999";
export const MASK_PESEL = "99999999999";
export const MASK_NIP = "9999999999";
export const MASK_REGON = "99999999999999";
export const MASK_POSTAL_CODE = "99-999";
export const MASK_OFFICE_CODE = "9999999";

//API
export const REST_ERROR_DETAILS_STRING_FRAGMENT = "Szczegóły:";
export const TOAST_ERROR = "Wystąpił błąd.";

//Colours
export const LIGHT_YELLOW = "#FFD60A";
export const CONTRAST_YELLOW = "#FFC300";
export const BLUE = "#003566";
export const DARK_BLUE = "#001D3D";
export const BLACK = "#000814";
export const PURPULE = "#A020F0";

export const WEBSITE_BASE_COLOURS = {
  LIGHT_YELLOW,
  CONTRAST_YELLOW,
  BLUE,
  DARK_BLUE,
  BLACK,
  PURPULE,
};
