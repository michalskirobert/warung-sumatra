import { formatPhoneNumber } from "@helpers/useful-functions";
import { RESTAURANT_SOCIAL_MEDIA_URLS } from "@utils/constants";
import { PhoneNumbers } from "@utils/enums";
import { CONSTANTS } from "@utils/index";
import { TFunction } from "i18next";

export const createFooterData = (
  translate: TFunction<"common", undefined>
): {
  type: "link" | "text";
  content: string;
  url?: string;
}[] => [
  {
    type: "text",
    content: translate("address"),
  },
  {
    type: "link",
    url: `mailto:${CONSTANTS.INFO_EMAIL}`,
    content: CONSTANTS.INFO_EMAIL,
  },
  {
    type: "link",
    url: `tel:${formatPhoneNumber(PhoneNumbers.Contact)}`,
    content: `${translate("navigation.bookTable")}: ${formatPhoneNumber(
      PhoneNumbers.Contact
    )}`,
  },
  {
    type: "text",
    content: translate("restaurantOpenHours"),
  },
];

export const SOCIAL_MEDIA_HELPER: { content: string; url: string }[] = [
  { content: "Facebook", url: RESTAURANT_SOCIAL_MEDIA_URLS.FACEBOOK },
  {
    content: "Instagram",
    url: RESTAURANT_SOCIAL_MEDIA_URLS.INSTAGRAM,
  },
];
