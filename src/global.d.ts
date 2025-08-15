import pl from "@i18n/messages/pl.json";

declare type TranslationKey = keyof typeof pl;

declare interface NavItem {
  href: `/${Locale}` | `/${Locale}/#${string}` | `#${string}`;
  labelKey: TranslationKey;
}

declare global {
  type Locale = "pl" | "en" | "id";
  type Messages = typeof pl;
}

declare module "next-intl" {
  function useTranslations(): (key: keyof IntlMessages) => string;
}
