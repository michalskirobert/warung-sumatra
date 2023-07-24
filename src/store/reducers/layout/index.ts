import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface ILayout {
  isMenuOpen: boolean;
  topbarHide: "hide" | "";
  activeTopbar: "active" | "";
  isLangOpen: boolean;
}

const initialState: ILayout = {
  isMenuOpen: false,
  topbarHide: "",
  activeTopbar: "",
  isLangOpen: false,
};

export const layoutSlice = createSlice({
  name: "layout",
  initialState,
  reducers: {
    setIsMenuOpen: (state, action: PayloadAction<ILayout["isMenuOpen"]>) => {
      state.isMenuOpen = action.payload;
    },
    setHideTopbar: (state, action: PayloadAction<ILayout["topbarHide"]>) => {
      state.topbarHide = action.payload;
    },
    setActiveTopbar: (
      state,
      action: PayloadAction<ILayout["activeTopbar"]>
    ) => {
      state.activeTopbar = action.payload;
    },
    setIsLangOpen: (state, action: PayloadAction<ILayout["isLangOpen"]>) => {
      state.isLangOpen = action.payload;
    },
  },
});

export const { setIsMenuOpen, setHideTopbar, setActiveTopbar, setIsLangOpen } =
  layoutSlice.actions;

export default layoutSlice.reducer;
