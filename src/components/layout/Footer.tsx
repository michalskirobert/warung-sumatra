"use client";

import { NURBYTE_WEBPAGE } from "@utils/constants";
import { useTranslations } from "next-intl";

import nurByteLogo from "@public/nurbyte_logo.png";

import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  const t = useTranslations();
  return (
    <footer className="bg-stone-900 text-stone-300 py-12 bg-[url('/batik/padang_red.pngya')]">
      <div className="container mx-auto px-4 text-center">
        <div className="text-3xl font-heading font-bold text-white mb-4 font-marker text-shadow-lg">
          Warung Sumatra
        </div>
        <p className="mb-6 text-lg text-shadow-lg">{t("footer-tagline")}</p>
        <div className="text-sm text-stone-300 text-shadow-lg">
          © 2025 Warung Sumatra. {t("footer-copyright")}
        </div>
        <div className="flex gap-1 text-xs justify-center mt-5">
          <Link
            href={NURBYTE_WEBPAGE}
            target="_blank"
            className="bg-amber-50/95 rounded-2xl p-1 hover:scale-120 transition-transform duration-300"
          >
            <Image
              src={nurByteLogo}
              height={80}
              width={80}
              alt="Robert Michalski NurByte"
            />
          </Link>
        </div>
      </div>
    </footer>
  );
}
