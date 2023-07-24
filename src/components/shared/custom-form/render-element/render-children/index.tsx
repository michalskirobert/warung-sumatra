import { NShared } from "@namespace/shared";
import { Input } from "reactstrap";

import Select, { SingleValue } from "react-select";

import InputMask from "react-input-mask";
import { NCommonTypes } from "@namespace/commonTypes";

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
            className: `input-field ${
              !!errors[id] ? "is-invalid" : null
            } form-control`,
            mask,
            maskChar,
            onChange: handleChange,
          }}
        />
      );
    case "select":
      return (
        <Select
          {...{
            options,
            className: `input-field ${!!errors[id] ? "is-invalid" : null}`,
            styles: {
              container: (prov) => ({
                ...prov,
                border: !!errors[id] ? "1px solid #dc3545" : "unset",
                borderRadius: "0.375rem",
              }),
            },
            value: options?.find(({ value }) => value === values[id]),
            onChange: (e: SingleValue<NCommonTypes.TOptions>) =>
              setFieldValue(id, e?.value),
          }}
        />
      );
    default:
      return (
        <Input
          {...{
            id,
            name: id,
            type,
            value: values[id],
            invalid: !!errors[id],
            className: "input-field",
            onChange: handleChange,
          }}
        />
      );
  }
};
