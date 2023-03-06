import { NMenu } from "@namespace/menu";
import { Menu } from "@store/reducers/actionTypes";

export const setMenu = (
  payload: NMenu.TSetMenu["payload"]
): NMenu.TSetMenu => ({ type: Menu.SetMenu, payload });

export const setIsMenuLoading = (
  payload: NMenu.TSetIsLoading["payload"]
): NMenu.TSetIsLoading => ({ type: Menu.SetIsMenuLoadingLoading, payload });
