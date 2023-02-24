import { ReactNode } from "react";

//Public
import { Dashboard } from "@pages/dashboard";
import { Menu } from "@pages/menu";
import { Contact } from "@components/pages/contact";
import { Reservate } from "@components/pages/reservation";

//Admin
import { AdminDashboard } from "@components/pages/admin/pages/dashboard";
import { MenuSettings } from "@components/pages/admin/pages/menu";

import * as C from "@utils/constants";

interface TRoutes {
  path: string;
  component: ReactNode;
}

export const ROUTES: readonly TRoutes[] = [
  { path: C.DASHBOARD_ROUTE, component: <Dashboard /> },
  { path: C.MENU_ROUTE, component: <Menu /> },
  { path: C.RESERVATION_ROUTE, component: <Reservate /> },
  { path: C.ABOUT_ROUTE, component: null },
  { path: C.CONTACT_ROUTE, component: <Contact /> },
];

export const ADMIN_ROUTES: readonly TRoutes[] = [
  { path: C.ADMIN_ROUTE, component: <AdminDashboard /> },
  { path: C.ADMIN_MENU_PAGE_SETTINGS_ROUTE, component: <MenuSettings /> },
];
