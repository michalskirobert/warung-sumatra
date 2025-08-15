import pl from "@i18n/messages/pl.json";

declare interface NavItem {
  href: `/${Locale}` | `/${Locale}/#${string}` | `#${string}`;
  labelKey: TranslationKey;
}

declare global {
  type Locale = "pl" | "en" | "id";
  type Messages = typeof pl;
}

declare module "next-intl" {
  interface IntlMessages extends Messages {}
  function useTranslations(): (key: keyof typeof pl) => string;
}
