import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";
import { getMessages } from "./getMessages";
import { hasLocale } from "next-intl";

const requestConfig = getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;

  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;

  return {
    locale,
    messages: await getMessages(locale as (typeof routing.locales)[number]),
  };
});

export default requestConfig;
