import { InputProps } from "reactstrap";
import { NCommonTypes } from "..";
import { InputType } from "reactstrap/types/lib/Input";
import { ChangeEventHandler } from "react";

export declare namespace NShared {
  type S = string;
  type N = number;
  type U = undefined;
  type V = void;
  type JSX = JSX.Element;

  type TCustomForm = {
    form: NCommonTypes.TForm[];
    values: FormikValues | null;
    setFieldValue: (field: S, value: unknown, shouldValidate?: B | U) => V;
    handleChange: ChangeEventHandler<HTMLInputElement>;
    errors: FormikErrors<unknown>;
  };

  type TRenderElement = {
    values: TCustomForm["values"];
    setFieldValue: TCustomForm["setFieldValue"];
    handleChange: TCustomForm["handleChange"];
    errors: TCustomForm["errors"];
    label?: S;
    type: InputType | "mask";
    id: S;
    options?: NCommonTypes.TOptions[];
    mask?: S | (S | RegExp)[];
    maskChar?: S | null;
    isRequired?: B;
    placeholder?: S;
  };

  type TRenderChildren = {
    type: TRenderElement["type"];
    setFieldValue: TRenderElement["setFieldValue"];
    errors: TRenderElement["errors"];
    handleChange: TRenderElement["handleChange"];
    values: TRenderElement["values"];
    id: TRenderElement["id"];
    options: TRenderElement["options"];
    mask: TRenderElement["mask"];
    maskChar: TRenderElement["maskChar"];
    placeholder: TRenderElement["placeholder"];
  };
}
