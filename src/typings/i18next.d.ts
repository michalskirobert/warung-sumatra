import "i18next";

import common from "@utils/translations/pl/common.json";
import contact from "@utils/translations/pl/contact.json";

declare module "i18next" {
  interface CustomTypeOptions {
    defaultNS: "common";

    resources: {
      common: typeof common;
      contact: typeof contact;
    };
  }
}
