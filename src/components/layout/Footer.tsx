"use client";

import { NURBYTE_WEBPAGE } from "@utils/constants";
import { useTranslations } from "next-intl";

import Link from "next/link";

export default function Footer() {
  const t = useTranslations();
  return (
    <footer className="bg-stone-900 text-stone-300 py-12 bg-[url('/batik/padang_red.png')]">
      <div className="container mx-auto px-4 text-center">
        <div className="text-3xl font-heading font-bold text-white mb-4">
          Warung Sumatra
        </div>
        <p className="mb-6 text-lg">{t("footer-tagline")}</p>
        <div className="text-sm text-stone-300">
          © 2025 Warung Sumatra. {t("footer-copyright")}
        </div>
        <div className="flex gap-1 text-xs justify-center mt-5">
          {t("footer-created-by")}
          <Link
            href={NURBYTE_WEBPAGE}
            className="font-bold text-amber-100 underline hover:text-amber-300 transition-colors"
            target="_blank"
          >
            NurByte
          </Link>
        </div>
      </div>
    </footer>
  );
}
