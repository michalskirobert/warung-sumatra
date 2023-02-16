import { InputType } from "reactstrap/types/lib/Input";

export const FORM_HELPER: {
  id: string;
  row: number;
  rowType: "sm" | "md" | "xl" | "xxl";
  subItems: {
    id: string;
    col: number;
    colType: "sm" | "md" | "xl" | "xxl";
    label: "name" | "phone" | "email" | "date" | "time" | "restaurant";
    type: InputType;
  }[];
}[] = [
  {
    id: crypto.randomUUID(),
    row: 2,
    rowType: "md",
    subItems: [
      {
        id: crypto.randomUUID(),
        col: 4,
        colType: "md",
        label: "name",
        type: "text",
      },
      {
        id: crypto.randomUUID(),
        col: 4,
        colType: "md",
        label: "phone",
        type: "tel",
      },
      {
        id: crypto.randomUUID(),
        col: 4,
        colType: "md",
        label: "email",
        type: "email",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    row: 1,
    rowType: "md",
    subItems: [
      {
        id: crypto.randomUUID(),
        col: 12,
        colType: "md",
        label: "restaurant",
        type: "select",
      },
    ],
  },
  {
    id: crypto.randomUUID(),
    row: 2,
    rowType: "md",
    subItems: [
      {
        id: crypto.randomUUID(),
        col: 6,
        colType: "md",
        label: "date",
        type: "date",
      },
      {
        id: crypto.randomUUID(),
        col: 6,
        colType: "md",
        label: "time",
        type: "time",
      },
    ],
  },
];
