"use client";

import dynamic from "next/dynamic";
import { BestsellerSkeleton } from "./Skeleton";

const BestsellerPage = dynamic(() => import("./Bestseller"), {
  ssr: false,
  loading: BestsellerSkeleton,
});

export default BestsellerPage;
