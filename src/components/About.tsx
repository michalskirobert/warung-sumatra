"use client";

import { useTranslations } from "next-intl";

type Props = { t?: ReturnType<typeof useTranslations> };

export default function About({ t }: Props) {
  const $t = t ?? useTranslations();
  return (
    <div className="grid lg:grid-cols-2 gap-16 items-center">
      <div className="slide-in-left">
        <div className="relative">
          <img
            src="https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?auto=format&fit=crop&w=2070&q=80"
            alt="Indonesian kitchen and spices"
            className="w-full h-96 object-cover rounded-2xl shadow-2xl"
          />
          <div className="image-overlay absolute inset-0 rounded-2xl"></div>
        </div>
      </div>

      <div className="slide-in-right">
        <h3 className="text-3xl font-heading font-bold text-stone-800 mb-6">
          {$t("about-story-title")}
        </h3>
        <p className="text-stone-600 mb-6 leading-relaxed text-lg">
          {$t("about-story-1")}
        </p>
        <p className="text-stone-600 mb-8 leading-relaxed text-lg">
          {$t("about-story-2")}
        </p>

        <div className="grid grid-cols-2 gap-6">
          <div className="text-center p-4 bg-white rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-amber-600 mb-2">15+</div>
            <div className="text-stone-600 font-medium">
              {$t("about-years")}
            </div>
          </div>
          <div className="text-center p-4 bg-white rounded-xl shadow-lg">
            <div className="text-3xl font-bold text-amber-600 mb-2">50+</div>
            <div className="text-stone-600 font-medium">
              {$t("about-dishes")}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
