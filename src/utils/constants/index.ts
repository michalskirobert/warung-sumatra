import { NCommonTypes } from "@namespace/commonTypes";

// Routes
export const DASHBOARD_ROUTE = "/";
export const MENU_ROUTE = "/menu";
export const RESERVATION_ROUTE = "/reservate";
export const ABOUT_ROUTE = "/about";
export const CONTACT_ROUTE = "/contact";

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
  pl: "Rezerwacja",
  bh: "Reservasi",
  eng: "Reservation",
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

//Masks
export const MASK_TYPE_PHONE = "+4\\8 99 999 99 99 99 99 99 99";
export const MASK_TYPE_MOBILE_PHONE = "+4\\8 999 999 999";
export const MASK_PESEL = "99999999999";
export const MASK_NIP = "9999999999";
export const MASK_REGON = "99999999999999";
export const MASK_POSTAL_CODE = "99-999";
export const MASK_OFFICE_CODE = "9999999";
