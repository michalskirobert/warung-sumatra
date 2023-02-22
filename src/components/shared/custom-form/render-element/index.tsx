import { FormFeedback, FormGroup } from "reactstrap";
import { RenderChildren } from "./render-children";

import { LabelForm } from "./label";

import { NShared } from "@namespace/shared";

export const RenderElement = ({
  values,
  setFieldValue,
  handleChange,
  errors,
  label,
  type,
  id,
  options,
  mask,
  maskChar,
  isRequired,
}: NShared.TRenderElement) => (
  <FormGroup {...{ check: type === "checkbox", inline: type === "checkbox" }}>
    <LabelForm {...{ id, name: id, isRequired, label }} />
    <RenderChildren
      {...{
        id,
        options,
        values,
        setFieldValue,
        handleChange,
        errors,
        label,
        type,
        mask,
        maskChar,
      }}
    />
    <FormFeedback>{errors[id]}</FormFeedback>
  </FormGroup>
);
