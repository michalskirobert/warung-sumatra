import pl from "./messages/pl.json";
import en from "./messages/en.json";
import id from "./messages/id.json";

import { notFound } from "next/navigation";
import { locales } from "./routing";

const messagesMap: Record<Locale, Messages> = {
  pl,
  en,
  id,
};

export async function getMessages(locale: Locale): Promise<Messages> {
  if (!locales.includes(locale)) {
    notFound();
  }

  return messagesMap[locale];
}
