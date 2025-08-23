"use client";

import dynamic from "next/dynamic";
import { MenuSkeleton } from "./Skeleton";

const MenuPage = dynamic(() => import("./Menu"), {
  ssr: false,
  loading: MenuSkeleton,
});

export default MenuPage;
