"use client";

import dynamic from "next/dynamic";
import { AboutSkeleton } from "./Skeleton";

const AboutPage = dynamic(() => import("./About"), {
  ssr: false,
  loading: AboutSkeleton,
});

export default AboutPage;
