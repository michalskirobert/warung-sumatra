"use client";

import dynamic from "next/dynamic";
import Skeleton from "./Loading";

const NavWrapper = dynamic(() => import("./index"), {
  ssr: false,
  loading: () => <Skeleton />,
});

export default NavWrapper;
