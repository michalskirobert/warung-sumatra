import { NCommonTypes } from "@namespace/commonTypes";
import { NGlobalConfig } from "@namespace/global-config";

import * as C from "@utils/constants";

const TEMP_OPTIONS: NCommonTypes.TOptions[] = [
  { label: "Poznań", value: "Poznań" },
  { label: "Warszawa", value: "Warsaw" },
];

export const createReservationForm = (
  language: NGlobalConfig.TLangCode
): NCommonTypes.TForm[] => [
  {
    id: crypto.randomUUID(),
    row: 2,
    rowType: "md",
    subItems: [
      {
        id: "name",
        col: 4,
        colType: "md",
        label: C.TRANSLATE[language].name,
        type: "text",
        isRequired: true,
      },
      {
        id: "phone",
        col: 4,
        colType: "md",
        label: C.TRANSLATE[language].phone,
        type: "mask",
        mask: C.MASK_TYPE_MOBILE_PHONE,
        maskChar: null,
        isRequired: true,
      },
      {
        id: "email",
        col: 4,
        colType: "md",
        label: C.TRANSLATE[language].email,
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
        label: C.TRANSLATE[language].restaurant,
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
        label: C.TRANSLATE[language].date,
        type: "date",
        isRequired: true,
      },
      {
        id: "timeFrom",
        col: 4,
        colType: "md",
        label: C.TRANSLATE[language].timeFrom,
        type: "time",
        isRequired: true,
      },
      {
        id: "timeTo",
        col: 4,
        colType: "md",
        label: C.TRANSLATE[language].timeTo,
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
        label: C.TRANSLATE[language].details,
        type: "textarea",
      },
    ],
  },
];
