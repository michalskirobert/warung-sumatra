import { useLocation } from "react-router-dom";

import * as C from "@utils/constants";
import { NAV_HELPER } from "./utils";
import { useAppDispatch, useAppSelector } from "@store/config";

export const useHeaderService = () => {
  const { language } = useAppSelector(({ globalConfig }) => globalConfig);

  const dispatch = useAppDispatch();

  const pathname = useLocation().pathname;

  const isDashboard = pathname === C.DASHBOARD_ROUTE;

  const menuContent = pathname.includes("/admin") ? [] : NAV_HELPER;

  const menuColor = isDashboard ? "transparent" : "dark";

  const isLinkActive = (path: string) => path === pathname;

  return { menuColor, isLinkActive, menuContent, language, dispatch };
};
