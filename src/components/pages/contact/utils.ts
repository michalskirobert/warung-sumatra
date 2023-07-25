import { NCommonTypes, NGlobalConfig } from "@namespace/index";

import { MASK_TYPE_MOBILE_PHONE } from "@utils/constants";
import { TFunction } from "i18next";

export const createContactForm = (
  translate: TFunction<["contact", "common"], undefined>
): NCommonTypes.TForm[] => [
  {
    id: crypto.randomUUID(),
    row: 3,
    rowType: "md",
    subItems: [
      {
        id: "name",
        label: translate("common:form.name"),
        type: "text",
        col: 4,
        colType: "md",
        isRequired: true,
      },
      {
        label: translate("common:form.phone"),
        type: "mask",
        mask: MASK_TYPE_MOBILE_PHONE,
        maskChar: null,
        col: 4,
        colType: "md",
        id: "phone",
        isRequired: true,
      },
      {
        id: "email",
        col: 4,
        colType: "md",
        label: translate("common:form.email"),
        type: "email",
        isRequired: true,
      },
      {
        label: translate("common:form.details"),
        type: "textarea",
        col: 12,
        colType: "md",
        id: "content",
      },
    ],
  },
];
