import { ReactNode } from "react";

import { Dashboard } from "@pages/dashboard";
import { Menu } from "@pages/menu";

import * as C from "@utils/constants";

interface TRoutes {
  path: string;
  component: ReactNode;
}

export const ROUTES: readonly TRoutes[] = [
  { path: C.DASHBOARD_ROUTE, component: <Dashboard /> },
  { path: C.MENU_ROUTE, component: <Menu /> },
  { path: C.RESERVATION_ROUTE, component: null },
  { path: C.ABOUT_ROUTE, component: null },
  { path: C.CONTACT_ROUTE, component: null },
];
