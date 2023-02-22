import { GlobalConfig } from "@store/reducers/actionTypes";
import { NGlobalConfig } from "src/typings/global-config";

export const setIsLoading = (
  payload: NGlobalConfig.TSetIsLoading["payload"]
): NGlobalConfig.TSetIsLoading => ({
  type: GlobalConfig.SetIsLoading,
  payload,
});

export const setLanguage = (
  payload: NGlobalConfig.TSetLanguage["payload"]
): NGlobalConfig.TSetLanguage => ({
  type: GlobalConfig.SetLanguage,
  payload,
});
