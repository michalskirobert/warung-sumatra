import { NShared } from "@namespace/shared";
import { InputProps } from "reactstrap";
import { InputType } from "reactstrap/types/lib/Input";

export declare namespace NCommonTypes {
  type S = string;
  type N = number;
  type U = undefined;
  type V = void;
  type JSX = JSX.Element;

  type TLayoutType = "sm" | "md" | "xl" | "xxl";

  type TOptions = { label: string; value: unknown };

  type TForm = {
    id: S;
    row: N;
    rowType: TLayoutType;
    subItems: {
      id: S;
      col: N;
      colType: TLayoutType;
      label?: NShared.TRenderChildren["label"];
      options?: TOptions[];
      type: NShared.TRenderChildren["type"];
      mask?: NShared.TRenderChildren["mask"];
      maskChar?: NShared.TRenderChildren["maskChar"];
      isRequired?: B;
    }[];
  };
}
