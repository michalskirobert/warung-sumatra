"use client";

import { useTranslations } from "next-intl";
import { SocialMedia } from "./SocialMedia";
import {
  RESTAURANT_ADDRESS,
  RESTAURANT_MAP_LINK,
  RESTAURANT_PHONE,
} from "@src/utils/constants";

import map from "@public/map.jpg";
import Image from "next/image";
import { ContactForm } from "./form";

export default function Contact() {
  const t = useTranslations();
  return (
    <div className="grid lg:grid-cols-2 gap-12">
      <div className="slide-in-left">
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <h3 className="text-2xl font-heading font-bold text-stone-800 mb-6">
            {t("contact-info-title")}
          </h3>

          <div className="space-y-6 mb-8">
            <div className="flex items-start space-x-4">
              <span className="text-amber-600 text-xl mt-1">📍</span>
              <div>
                <p className="font-semibold text-stone-800 mb-1">
                  {t("contact-address-label")}
                </p>
                <Image
                  src={map}
                  alt="Map"
                  className="rounded-lg w-[300px] h-[130px] object-cover mb-2"
                  height={0}
                  width={0}
                />
                <a
                  href={RESTAURANT_MAP_LINK}
                  target="_blank"
                  className="text-amber-600 hover:text-amber-700 transition-colors cursor-pointer"
                >
                  {RESTAURANT_ADDRESS}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="text-amber-600 text-xl mt-1">📞</span>
              <div>
                <p className="font-semibold text-stone-800 mb-1">
                  {t("contact-phone-label")}
                </p>
                <a
                  href={`tel:${RESTAURANT_PHONE}`}
                  className="text-amber-600 hover:text-amber-700 transition-colors"
                >
                  {RESTAURANT_PHONE}
                </a>
              </div>
            </div>

            <div className="flex items-start space-x-4">
              <span className="text-amber-600 text-xl mt-1">🕒</span>
              <div>
                <p className="font-semibold text-stone-800 mb-1">
                  {t("contact-hours-label")}
                </p>
                <p className="text-stone-600">{t("contact-hours")}</p>
              </div>
            </div>
          </div>

          <div className="border-t border-stone-200 pt-6">
            <h4 className="text-lg font-semibold text-stone-800 mb-4">
              {t("contact-social-title")}
            </h4>
            <div className="flex space-x-2 flex-wrap">
              <SocialMedia />
            </div>
          </div>
        </div>
      </div>

      <div className="slide-in-right">
        <div className="bg-white rounded-2xl p-8 shadow-2xl">
          <h3 className="text-2xl font-heading font-bold text-stone-800 mb-6">
            {t("contact-form-title")}
          </h3>
          <ContactForm />
        </div>
      </div>
    </div>
  );
}
