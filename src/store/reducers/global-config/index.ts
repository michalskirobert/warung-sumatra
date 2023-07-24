import { getFromLocalStorage } from "@helpers/useful-functions";
import { NGlobalConfig } from "@namespace/global-config";
import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface IGlobalConfig {
  isLoading: boolean;
  language: NGlobalConfig.TLanguage;
}

const initialState: IGlobalConfig = {
  isLoading: false,
  language: getFromLocalStorage("language") || { label: "Polski", value: "pl" },
};

export const globalConfig = createSlice({
  name: "globalConfig",
  initialState,
  reducers: {
    setIsLoading: (
      state,
      action: PayloadAction<IGlobalConfig["isLoading"]>
    ) => {
      state.isLoading = action.payload;
    },
    setLanguage: (state, action: PayloadAction<IGlobalConfig["language"]>) => {
      state.language = action.payload;
    },
  },
});

export const { setIsLoading, setLanguage } = globalConfig.actions;

export default globalConfig.reducer;
