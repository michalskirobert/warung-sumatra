import { NCommonTypes, NGlobalConfig } from "@namespace/index";

import { MASK_TYPE_MOBILE_PHONE, TRANSLATE } from "@utils/constants";

export const createContactForm = (
  language: NGlobalConfig.TLangCode
): NCommonTypes.TForm[] => [
  {
    id: crypto.randomUUID(),
    row: 3,
    rowType: "md",
    subItems: [
      {
        id: "name",
        label: TRANSLATE[language].name,
        type: "text",
        col: 4,
        colType: "md",
        isRequired: true,
      },
      {
        label: TRANSLATE[language].phone,
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
        label: TRANSLATE[language].email,
        type: "email",
        isRequired: true,
      },
      {
        label: TRANSLATE[language].details,
        type: "textarea",
        col: 12,
        colType: "md",
        id: "content",
      },
    ],
  },
];
