import { NCommonTypes } from "@namespace/commonTypes";

import * as C from "@utils/constants";

const TEMP_OPTIONS: NCommonTypes.TOptions[] = [
  { label: "Poznań", value: "Poznań" },
  { label: "Warszawa", value: "Warsaw" },
];

export const FORM_HELPER: NCommonTypes.TForm[] = [
  {
    id: crypto.randomUUID(),
    row: 2,
    rowType: "md",
    subItems: [
      {
        id: "name",
        col: 4,
        colType: "md",
        label: "Imię",
        type: "text",
        isRequired: true,
      },
      {
        id: "phone",
        col: 4,
        colType: "md",
        label: "Telefon",
        type: "mask",
        mask: C.MASK_TYPE_MOBILE_PHONE,
        maskChar: null,
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
    ],
  },
  {
    id: crypto.randomUUID(),
    row: 1,
    rowType: "md",
    subItems: [
      {
        id: "restaurant",
        col: 12,
        colType: "md",
        label: "Restauracja",
        type: "select",
        options: TEMP_OPTIONS,
        isRequired: true,
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    row: 3,
    rowType: "md",
    subItems: [
      {
        id: "date",
        col: 4,
        colType: "md",
        label: "Data",
        type: "date",
        isRequired: true,
      },
      {
        id: "timeFrom",
        col: 4,
        colType: "md",
        label: "Od godziny",
        type: "time",
        isRequired: true,
      },
      {
        id: "timeTo",
        col: 4,
        colType: "md",
        label: "Do godziny",
        type: "time",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    row: 1,
    rowType: "md",
    subItems: [
      {
        id: "content",
        col: 12,
        colType: "md",
        label: "Szczegóły",
        type: "textarea",
      },
    ],
  },
];
