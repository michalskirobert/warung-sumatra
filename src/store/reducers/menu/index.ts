import { NMenu } from "@namespace/menu";
import { Menu } from "../actionTypes";

const initialValues: NMenu.TMenuReducer = {
  menu: [],
  isMenuLoading: false,
};

export const menu = (init = initialValues, action: NMenu.TAction) => {
  switch (action.type) {
    case Menu.SetIsMenuLoadingLoading:
      return {
        ...init,
        isLoading: action.payload,
      };
    case Menu.SetMenu:
      return {
        ...init,
        menu: action.payload,
        isMenuLoading: false,
      };

    default:
      return init;
  }
};
