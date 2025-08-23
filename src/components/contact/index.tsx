"use client";

import dynamic from "next/dynamic";
import { ContactSkeleton } from "./Skeleton";

const ContactPage = dynamic(() => import("./Contact"), {
  ssr: false,
  loading: ContactSkeleton,
});

export default ContactPage;
