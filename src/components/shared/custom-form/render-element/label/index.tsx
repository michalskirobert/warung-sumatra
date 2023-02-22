import { Label } from "reactstrap";
import { RequiredMark } from "./styles";

interface ILabel {
  id: string;
  label?: string;
  isRequired?: boolean;
}

export const LabelForm = ({ id, isRequired, label }: ILabel) => (
  <Label {...{ isRequired, name: id, id }}>
    {label} <RequiredMark {...{ isRequired }} />
  </Label>
);
