import { Menu } from "@store/reducers/actionTypes";
import { NCommonTypes } from "..";

export declare namespace NMenu {
  type S = string;
  type B = boolean;
  type N = number;
  type V = void;

  type TMenuReducer = TReducer;

  type TMenu = {
    id: S;
    title: S;
    category: S;
    price: N;
    img: S;
    desc: S;
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

  type TMenuProps = {
    menuItems: TMenu[];
  };

  type TMenuCategoriesProps = {
    filterItems: (category: S) => void;
    categories: S[];
    currentCategory: S;
  };

  type TMenuItemsProps = {
    items: TMenu[];
  };

  type TAction = TSetIsLoading | TSetMenu;
}
