import { defineRouting } from "next-intl/routing";

export const routing = defineRouting({
  locales: ["en", "pl", "id"],
  defaultLocale: "pl",
});

export const locales = routing.locales;
export const defaultLocale = routing.defaultLocale;

export const localeCookieName = "warung-sumatra-locale";
