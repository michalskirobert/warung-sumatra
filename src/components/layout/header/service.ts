import { useAppDispatch, useAppSelector } from "@store/config";
import { useLocation, useNavigate } from "react-router-dom";
import { IMenuPage, createLink } from "./utils";

import { signOut } from "@firebase/auth";
import { auth } from "@fire/index";
import { resetUser } from "@store/actions/user";

import * as C from "@utils/constants";

export const useHeaderService = () => {
  const { language } = useAppSelector(({ globalConfig }) => globalConfig);
  const { accessToken } = useAppSelector(({ auth }) => auth.user);

  const dispatch = useAppDispatch();
  const navigator = useNavigate();

  const isLogged = !!accessToken;

  const pathname = useLocation().pathname;
  const isDashboard = pathname === C.DASHBOARD_ROUTE;
  const isAdmin = pathname.includes("/admin");

  const menuContent = createLink(
    language.value,
    pathname.includes("/admin"),
    isLogged
  );

  const menuColor = isDashboard ? "transparent" : "dark";
  const isMenuSticky: { sticky?: "top" } | { fixed?: "top" | "bottom" } =
    isDashboard ? { fixed: "top" } : { sticky: "top" };

  const isLinkActive = (path: string) => (path === pathname ? "active" : "");

  const signOutUser = async () => {
    await signOut(auth);
    navigator("/admin/sign-in");
    window.location.reload();
    dispatch(resetUser());
  };

  const buttonsHandler = (action?: IMenuPage["action"]) => {
    switch (action) {
      case "SIGN_OUT":
        signOutUser();
        break;
    }
  };

  return {
    menuColor,
    isLinkActive,
    menuContent,
    language,
    dispatch,
    isAdmin,
    isMenuSticky,
    isLogged,
    signOutUser,
    buttonsHandler,
  };
};
