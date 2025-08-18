"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

import mainHero from "@public/hero/set_1.jpg";

export default function Hero() {
  const t = useTranslations();
  return (
    <section id="home" className="min-h-screen relative overflow-hidden">
      <div className="absolute inset-0">
        <Image
          className="object-cover w-full h-full"
          src={mainHero}
          height={0}
          width={0}
          alt="restaurant"
          priority
          placeholder="blur"
        />
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(135deg, rgba(30,30,30,.8) 0%, rgba(101,67,33,.7) 100%)",
          }}
        />
      </div>
      <div className="container mx-auto px-4 relative z-10 flex items-center min-h-screen">
        <div className="max-w-3xl fade-in">
          <h1 className="text-5xl md:text-7xl font-heading font-bold text-white mb-6">
            {t("hero-title")}
          </h1>
          <p className="text-xl md:text-2xl text-stone-200 mb-8 leading-relaxed">
            {t("hero-subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a
              href="#menu"
              className="bg-amber-600 hover:bg-amber-700 text-white px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              {t("hero-menu-btn")}
            </a>
            <a
              href="#contact"
              className="border-2 border-white text-white hover:bg-white hover:text-stone-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300"
            >
              {t("hero-reservation-btn")}
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
