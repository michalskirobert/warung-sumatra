import { useLocation } from "react-router-dom";

import * as C from "@utils/constants";
import { NAV_HELPER } from "./utils";

export const useHeaderService = () => {
  const pathname = useLocation().pathname;

  const isDashboard = pathname === C.DASHBOARD_ROUTE;

  const menuContent = pathname.includes("/admin") ? [] : NAV_HELPER;

  const menuColor = isDashboard ? "transparent" : "dark";

  console.log({ isDashboard, menuContent, menuColor });

  const isLinkActive = (path: string) => path === pathname;

  return { menuColor, isLinkActive, menuContent };
};
