"use client";

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
          © 2025{" "}
          <Link
            href="https://nurbyte.com"
            className="text-amber-100 hover:text-amber-300 transition-colors font-medium"
          >
            NurByte
          </Link>{" "}
          & Warung Sumatra {t("footer-copyright")}
        </div>
      </div>
    </footer>
  );
}
