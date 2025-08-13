import type { AbstractIntlMessages } from "next-intl";
import { notFound } from "next/navigation";
import { locales } from "./routing";

const messagesMap: Record<Locale, () => Promise<AbstractIntlMessages>> = {
  pl: () => import("./messages/pl.json").then((m) => m.default),
  en: () => import("./messages/en.json").then((m) => m.default),
  id: () => import("./messages/id.json").then((m) => m.default),
};

export async function getMessages(
  locale: Locale
): Promise<AbstractIntlMessages> {
  if (!locales.includes(locale)) {
    return notFound();
  }

  return messagesMap[locale]();
}
