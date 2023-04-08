import { useAppDispatch, useAppSelector } from "@store/config";
import { useLocation, useNavigate } from "react-router-dom";
import { IMenuPage, createLink } from "./utils";

import { checkPathname } from "@helpers/useful-functions/check-pathname";

import { signOut } from "@firebase/auth";
import { auth } from "@fire/index";
import { resetUser } from "@store/actions/user";

import * as C from "@utils/constants";
import { useMediaQuery } from "react-responsive";
import { maxScreenSizes } from "@utils/enums";

export const useHeaderService = () => {
  const { language } = useAppSelector(({ globalConfig }) => globalConfig);
  const { accessToken } = useAppSelector(({ auth }) => auth.user);

  const isMobile = useMediaQuery({
    query: `(max-width: ${maxScreenSizes.mobile}px)`,
  });

  const isStandardSize = useMediaQuery({
    query: `(mim-width: ${maxScreenSizes.tablet}px)`,
  });

  const dispatch = useAppDispatch();
  const navigator = useNavigate();

  const isLogged = !!accessToken;

  const pathname = useLocation().pathname;
  const isAdmin = checkPathname(C.ADMIN_ROUTE);

  const menuContent = createLink(language.value, isAdmin, isLogged);

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
    isLinkActive,
    menuContent,
    language,
    dispatch,
    isAdmin,
    isLogged,
    signOutUser,
    buttonsHandler,
    isMobile,
  };
};
