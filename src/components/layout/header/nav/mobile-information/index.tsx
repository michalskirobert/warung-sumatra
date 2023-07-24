import { formatPhoneNumber } from "@helpers/useful-functions";
import { NGlobalConfig } from "@namespace/global-config";
import { PhoneNumbers } from "@utils/enums";
import { CONSTANTS } from "@utils/index";

interface IMobileInformations {
  language: NGlobalConfig.TLangCode;
}

export const MobileInformations = ({ language }: IMobileInformations) => {
  return (
    <div className="text-center">
      <p className="headline-1 navbar-title">
        {CONSTANTS.TRANSLATE[language].findUs}
      </p>

      <address className="body-4">
        {CONSTANTS.TRANSLATE[language].address}
      </address>

      <p className="body-4 navbar-text">
        {CONSTANTS.TRANSLATE[language].restaurantOpenHours}
      </p>

      <a href="mailto:booking@grilli.com" className="body-4 sidebar-link">
        {CONSTANTS.BOOKING_EMAIL}
      </a>

      <div className="separator"></div>

      <p className="contact-label">{CONSTANTS.BOOK_TABLE_LABEL[language]}</p>

      <a
        href={`tel:${formatPhoneNumber(PhoneNumbers.Contact)}`}
        className="body-1 contact-number hover-underline"
      >
        {formatPhoneNumber(PhoneNumbers.Contact)}
      </a>
    </div>
  );
};
