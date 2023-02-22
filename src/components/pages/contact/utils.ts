import { NCommonTypes } from "@namespace/index";

import { MASK_TYPE_MOBILE_PHONE } from "@utils/constants";

export const CONTACT_FORM_HELPER: NCommonTypes.TForm[] = [
  {
    id: crypto.randomUUID(),
    row: 3,
    rowType: "md",
    subItems: [
      {
        id: "name",
        label: "Imię",
        type: "text",
        col: 4,
        colType: "md",
        isRequired: true,
      },
      {
        label: "Telefon",
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
        label: "E-mail",
        type: "email",
        isRequired: true,
      },
      {
        label: "Szczegóły",
        type: "textarea",
        col: 12,
        colType: "md",
        id: "content",
      },
    ],
  },
];
