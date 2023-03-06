import { NCommonTypes } from "@namespace/index";

export const LOGIN_FORM: NCommonTypes.TForm[] = [
  {
    id: crypto.randomUUID(),
    row: 2,
    rowType: "md",
    subItems: [
      {
        col: 12,
        colType: "md",
        id: "email",
        type: "email",
        isRequired: true,
        label: "E-mail",
      },
      {
        col: 12,
        colType: "md",
        id: "password",
        type: "password",
        isRequired: true,
        label: "Password",
      },
    ],
  },
];
