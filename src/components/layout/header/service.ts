import { useLocation } from "react-router-dom";

import * as C from "@utils/constants";

export const useHeaderService = () => {
  const pathname = useLocation().pathname;

  const isDashboard = pathname === C.DASHBOARD_ROUTE;

  const menuColor = isDashboard ? "transparent" : "dark";

  const isLinkActive = (path: string) => path === pathname;

  return { menuColor, isLinkActive };
};
