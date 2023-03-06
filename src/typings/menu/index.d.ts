import { Menu } from "@store/reducers/actionTypes";
import { NCommonTypes } from "..";

export declare namespace NMenu {
  type S = string;
  type B = boolean;
  type N = number;
  type V = void;

  type TMenuReducer = TReducer;

  type TMenu = {
    category: NCommonTypes.TOptions;
    name: S;
    description: S;
    image: S;
    price: S;
  };

  type TReducer = {
    menu: TMenu[];
    isMenuLoading: boolean;
  };

  type TSetIsLoading = {
    type: Menu.SetIsMenuLoadingLoading;
    payload: TReducer["isLoading"];
  };

  type TSetMenu = {
    type: Menu.SetMenu;
    payload: TReducer["menu"];
  };

  type TAction = TSetIsLoading | TSetMenu;
}
