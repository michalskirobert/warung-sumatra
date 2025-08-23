import pl from "./messages/pl.json";
import en from "./messages/en.json";
import id from "./messages/id.json";

const messagesMap: Record<Locale, Messages> = {
  pl,
  en,
  id,
};

export async function getMessages(locale: Locale): Promise<Messages> {
  return messagesMap[locale];
}
