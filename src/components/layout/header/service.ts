import { useAppDispatch, useAppSelector } from "@store/config";
import { useLocation } from "react-router-dom";
import { createLink } from "./utils";

import * as C from "@utils/constants";

export const useHeaderService = () => {
  const { language } = useAppSelector(({ globalConfig }) => globalConfig);

  const dispatch = useAppDispatch();

  const pathname = useLocation().pathname;

  const isDashboard = pathname === C.DASHBOARD_ROUTE;

  const menuContent = pathname.includes("/admin")
    ? []
    : createLink(language.value);

  const menuColor = isDashboard ? "transparent" : "dark";

  const isLinkActive = (path: string) => (path === pathname ? "active" : "");

  return { menuColor, isLinkActive, menuContent, language, dispatch };
};
