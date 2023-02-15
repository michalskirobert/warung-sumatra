import { GlobalConfig } from "@store/reducers/actionTypes";

export declare namespace NGlobalConfig {
  type S = string;
  type B = boolean;
  type N = number;
  type V = void;

  type TGlobalConfig = TReducer;

  type TLangCode = "pl" | "eng" | "bh";

  type TLanguageLabels = "Polski" | "English" | "Bahasa";

  type TLanguage = {
    label: TLanguageLabels;
    value: TLangCode;
  };

  type TReducer = {
    isLoading: B;
    language: TLanguage;
  };

  type TSetIsLoading = {
    type: GlobalConfig.SetIsLoading;
    payload: TReducer["isLoading"];
  };

  type TSetLanguage = {
    type: GlobalConfig.SetLanguage;
    payload: TReducer["language"];
  };

  type TAction = TSetIsLoading | TSetLanguage;
}
