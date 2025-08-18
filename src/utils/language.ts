import { defaultLocale, localeCookieName, locales } from "@i18n/routing";
import { setCookie } from "./cookies";

const LS_KEY = "lang";

export function isLocale(value: string): value is Locale {
  return (locales as readonly string[]).includes(value);
}

export function getPreferredBrowserLocale(): Locale {
  const navLangs =
    typeof navigator !== "undefined"
      ? navigator.languages ?? [navigator.language]
      : [];
  for (const l of navLangs) {
    const code = l.split("-")[0];
    if (isLocale(code)) return code;
  }
  return defaultLocale;
}

export function getStoredLocale(): Locale | null {
  if (typeof window === "undefined") return null;
  const ls = localStorage.getItem(LS_KEY);
  if (ls && isLocale(ls)) return ls;
  return null;
}

export function storeLocale(locale: Locale): void {
  localStorage.setItem(LS_KEY, locale);
  setCookie(localeCookieName, locale, 365);
}
