declare type Locale = "pl" | "en" | "id";

declare interface NavItem {
  href: `/${Locale}` | `/${Locale}/#${string}` | `#${string}`;
  labelKey: TranslationKey;
}
