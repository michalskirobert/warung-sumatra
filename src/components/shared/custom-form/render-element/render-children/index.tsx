import { NShared } from "@namespace/shared";
import { Input } from "reactstrap";

import Select from "react-select";

import InputMask from "react-input-mask";

export const RenderChildren = ({
  id,
  type,
  setFieldValue,
  errors,
  handleChange,
  values,
  options,
  mask,
  maskChar,
}: NShared.TRenderChildren) => {
  switch (type) {
    case "mask":
      if (!mask) return null;
      return (
        <InputMask
          {...{
            id,
            name: id,
            className: `${!!errors[id] ? "is-invalid" : null} form-control`,
            mask,
            maskChar,
            onChange: handleChange,
          }}
        />
      );
    case "select":
      return <Select {...{ options, onChange: (e) => setFieldValue(id, e) }} />;
    default:
      return (
        <Input
          {...{
            id,
            name: id,
            type,
            value: values[id],
            invalid: !!errors[id],
            onChange: handleChange,
          }}
        />
      );
  }
};
