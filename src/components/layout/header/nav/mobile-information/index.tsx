import { formatPhoneNumber } from "@helpers/useful-functions";

import { PhoneNumbers } from "@utils/enums";
import { CONSTANTS } from "@utils/index";
import { useTranslation } from "react-i18next";

export const MobileInformations = () => {
  const [translate] = useTranslation();
  return (
    <div className="text-center">
      <p className="headline-1 navbar-title">{translate("findUs")}</p>

      <address className="body-4">{translate("address")}</address>

      <p className="body-4 navbar-text">{translate("restaurantOpenHours")}</p>

      <a href="mailto:booking@grilli.com" className="body-4 sidebar-link">
        {CONSTANTS.BOOKING_EMAIL}
      </a>

      <div className="separator"></div>

      <p className="contact-label"> {translate("navigation.bookTable")}</p>

      <a
        href={`tel:${formatPhoneNumber(PhoneNumbers.Contact)}`}
        className="body-1 contact-number hover-underline"
      >
        {formatPhoneNumber(PhoneNumbers.Contact)}
      </a>
    </div>
  );
};
