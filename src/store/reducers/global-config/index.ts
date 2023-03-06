import { NGlobalConfig } from "src/typings/global-config";
import { GlobalConfig } from "../actionTypes";
import {
  getFromLocalStorage,
  saveToLocalStorage,
} from "@helpers/useful-functions";

const initialValues: NGlobalConfig.TReducer = {
  isLoading: false,
  language: getFromLocalStorage("language"),
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
      saveToLocalStorage({
        collectionName: "language",
        value: JSON.stringify(action.payload),
      }); //save current language in storage

      return {
        ...init,
        language: action.payload,
      };

    default:
      return init;
  }
};
