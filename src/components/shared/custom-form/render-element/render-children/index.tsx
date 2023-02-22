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
  console.log({ errors });
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
      return (
        <Select
          {...{
            options,
            className: `${!!errors[id] ? "is-invalid form-control" : null}`,
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
            onChange: handleChange,
          }}
        />
      );
  }
};
