import { NCommonTypes } from "@namespace/commonTypes";

import * as C from "@utils/constants";
import { TFunction } from "i18next";

const TEMP_OPTIONS: NCommonTypes.TOptions[] = [
  { label: "Poznań", value: "Poznań" },
  { label: "Warszawa", value: "Warsaw" },
];

export const createReservationForm = (
  translate: TFunction<"common", undefined>
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
        label: translate("form.name"),
        type: "text",
        isRequired: true,
      },
      {
        id: "phone",
        col: 4,
        colType: "md",
        label: translate("form.phone"),
        type: "mask",
        mask: C.MASK_TYPE_MOBILE_PHONE,
        maskChar: null,
        isRequired: true,
      },
      {
        id: "email",
        col: 4,
        colType: "md",
        label: translate("form.email"),
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
        label: translate("form.restaurant"),
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
        label: translate("form.date"),
        type: "date",
        isRequired: true,
      },
      {
        id: "timeFrom",
        col: 4,
        colType: "md",
        label: translate("form.timeFrom"),
        type: "time",
        isRequired: true,
      },
      {
        id: "timeTo",
        col: 4,
        colType: "md",
        label: translate("form.timeTo"),
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
        label: translate("form.details"),
        type: "textarea",
      },
    ],
  },
];
