import { NGlobalConfig } from "..";

export declare namespace NLayout {
  type S = string;
  type B = boolean;
  type N = number;
  type V = void;

  interface IMenuPage {
    label: string;
    path?: string;
    isBlank?: boolean;
    isButton?: boolean;
    action?: TButtonActions;
    isUniqueLink?: boolean;
  }

  type TNavProps = {
    isMobile: B;
    isLinkActive: (path: S) => "" | "active";
    menuContent: IMenuPage[];
    language: NGlobalConfig.TLanguage;
    isAdmin: B;
    buttonsHandler: (action?: "SIGN_OUT") => V;
  };

  type TMobileNavProps = Omit<
    TNavProps,
    "isMobile" | "isAdmin" | "buttonsHandler"
  >;

  type TStandardNav = Omit<
    TNavProps,
    "isMobile" | "isAdmin" | "buttonsHandler"
  >;

  type TTopbar = {
    type: "address" | "div" | "link" | "language";
    icon: JSX.Element;
    label: string;
    mailTo?: `${string}@${string}.${string}`;
    phoneTo?: string;
    path?: TNav["path"];
  };

  type TNav = {
    label: string;
    path: `/${string}` | `https://${string}.${string}`;
    isBookTable?: boolean;
    isBlank?: boolean;
  };

  type THeaderData = {
    topbar: TTopbar[];
    nav: TNav[];
  };
}
