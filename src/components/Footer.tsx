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
        <div className="flex justify-center space-x-6 mb-6">
          <a
            href="https://wa.me/48123456789"
            className="hover:text-amber-400 transition-colors"
            aria-label="WhatsApp"
          >
            🟢
          </a>
          <a
            href="https://instagram.com/warungsumatra"
            className="hover:text-amber-400 transition-colors"
            aria-label="Instagram"
          >
            📸
          </a>
          <a
            href="https://facebook.com/warungsumatra"
            className="hover:text-amber-400 transition-colors"
            aria-label="Facebook"
          >
            📘
          </a>
        </div>
        <p className="text-sm text-stone-400">
          © 2024 Warung Sumatra. {t("footer-copyright")}
        </p>
      </div>
    </footer>
  );
}
