import { NCommonTypes } from "@namespace/commonTypes";

// Public routes
export const DASHBOARD_ROUTE = "/";
export const MENU_ROUTE = "/menu";
export const BOOK_TABLE_ROUTE = "/book-table";
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

//Contact details
export const BOOKING_EMAIL = "booking@warungsumatra.pl";
export const INFO_EMAIL = "info@warungsumatra.pl";

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

export const BOOK_TABLE_LABEL: NCommonTypes.TTranslateProps = {
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

export const BASE_COLOUR = "#FDFB10";
export const BLACK_COLOUR = "#333113";
export const LIGHT_COLOUR = "#FDFAE6";
export const SECONDARY_COLOUR = "#979265";

export const WEBSITE_BASE_COLOURS = {
  BASE_COLOUR,
  BLACK_COLOUR,
  LIGHT_COLOUR,
  SECONDARY_COLOUR,
};

export const VALIDATIONS = {
  eng: {
    required: "Required*",
    email: "E-mail is incorrect",
    contentMin: "Content must be more than 3 characters",
    contentMax: "Content cannot be more than 250 characters",
    name: "Name needs more than 1 character",
    timeFrom: "Time from cannot be lower than time to",
    phone: "Incorrect phone format",
  },
  pl: {
    required: "Wymagane*",
    email: "Podany email jest nieprawidłowy",
    contentMin: "Treść musi zawierać przynajmniej 3 znaki",
    contentMax: "Treść nie może być większa od 250 znaków",
    name: "Imię musi składać się przynajmniej z 2 znaków",
    timeFrom: "Czas od nie może być mniejsze od czasu do",
    phone: "Nieprawidłowy format telefonu",
  },
  bh: {
    required: "Diperlukan*",
    email: "Email salah",
    contentMin: "Konten harus lebih dari 3 karakter",
    contentMax: "Konten tidak boleh lebih dari 250 karakter",
    name: "Nama membutuhkan lebih dari 1 karakter",
    timeFrom: "Waktu dari tidak boleh lebih rendah dari waktu ke",
    phone: "Format telepon salah",
  },
};

export const RESTAURANT_SOCIAL_MEDIA_URLS = {
  INSTAGRAM: "https://www.instagram.com/warung_sumatra_from_2014_/",
  FACEBOOK: "WarungSumatraPoznan",
};
