import { InputType } from "reactstrap/types/lib/Input";

export const CONTACT_FORM_HELPER: {
  label: "fullname" | "email" | "phone" | "content";
  type: InputType;
}[] = [
  {
    label: "fullname",
    type: "text",
  },
  {
    label: "email",
    type: "email",
  },
  {
    label: "phone",
    type: "tel",
  },
  {
    label: "content",
    type: "textarea",
  },
];
