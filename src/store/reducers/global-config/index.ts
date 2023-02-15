import { NGlobalConfig } from "src/typings/global-config";
import { GlobalConfig } from "../actionTypes";

const initialValues: NGlobalConfig.TReducer = {
  isLoading: false,
  language: { label: "Polski", value: "pl" },
};

export const globalConfig = (
  init = initialValues,
  action: NGlobalConfig.TAction
) => {
  switch (action.type) {
    case GlobalConfig.SetIsLoading:
      return {
        ...init,
        isLoading: action.payload,
      };
    case GlobalConfig.SetLanguage:
      return {
        ...init,
        language: action.payload,
      };

    default:
      return init;
  }
};
