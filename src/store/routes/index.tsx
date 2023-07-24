import { ReactNode } from "react";

import { Dashboard } from "@pages/dashboard";
import { Menu } from "@pages/menu";
import { Contact } from "@components/pages/contact";
import { Reservate } from "@components/pages/reservation";
import { PageNotFound } from "@components/pages/not-found";
import { About } from "@components/pages/about";

import * as C from "@utils/constants";

interface TRoutes {
  path: string;
  component: ReactNode;
}

export const ROUTES: readonly TRoutes[] = [
  { path: C.DASHBOARD_ROUTE, component: <Dashboard /> },
  { path: C.MENU_ROUTE, component: <Menu /> },
  { path: C.BOOK_TABLE_ROUTE, component: <Reservate /> },
  { path: C.ABOUT_ROUTE, component: <About /> },
  { path: C.CONTACT_ROUTE, component: <Contact /> },
  { path: "*", component: <PageNotFound /> },
];
