"use client";

import { useTranslations } from "next-intl";

export default function Footer() {
  const t = useTranslations();
  return (
    <footer className="bg-stone-900 text-stone-300 py-12">
      <div className="container mx-auto px-4 text-center">
        <div className="text-3xl font-heading font-bold text-white mb-4">
          Warung Sumatra
        </div>
        <p className="mb-6 text-lg">{t("footer-tagline")}</p>
        <div className="text-sm text-stone-400">
          © 2025 <a href="https://nurbyte.com">NurByte</a> & Warung Sumatra{" "}
          {t("footer-copyright")}
        </div>
      </div>
    </footer>
  );
}
