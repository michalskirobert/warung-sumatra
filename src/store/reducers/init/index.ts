import { createSlice } from "@reduxjs/toolkit";

import json from "./../../../../package.json";

interface IInitConfig {
  version: string;
}

const initialState: IInitConfig = {
  version: json.version,
};

export const initConfig = createSlice({
  name: "initConfig",
  initialState,
  reducers: {},
});

export const {} = initConfig.actions;

export default initConfig.reducer;
