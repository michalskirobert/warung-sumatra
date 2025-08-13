"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Gallery() {
  const t = useTranslations();
  return (
    <div className="mb-20 fade-in">
      <h3 className="text-3xl font-heading font-bold text-stone-800 mb-12 text-center">
        {t("gallery-title")}
      </h3>
      <div className="grid md:grid-cols-3 gap-8">
        <div className="slide-in-left">
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?auto=format&fit=crop&w=1000&q=80"
              alt="Restaurant main dining area"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              width={1000}
              height={800}
            />
            <div className="image-overlay absolute inset-0" />
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="text-xl font-semibold">{t("gallery-main")}</h4>
            </div>
          </div>
        </div>

        <div className="fade-in">
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1551632436-cbf8dd35adfa?auto=format&fit=crop&w=1000&q=80"
              alt="Restaurant bar area"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              width={1000}
              height={800}
            />
            <div className="image-overlay absolute inset-0" />
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="text-xl font-semibold">{t("gallery-bar")}</h4>
            </div>
          </div>
        </div>

        <div className="slide-in-right">
          <div className="relative h-80 rounded-2xl overflow-hidden shadow-xl">
            <Image
              src="https://images.unsplash.com/photo-1559329007-40df8a9345d8?auto=format&fit=crop&w=1000&q=80"
              alt="Restaurant private dining"
              className="w-full h-full object-cover hover:scale-105 transition-transform duration-500"
              width={1000}
              height={800}
            />
            <div className="image-overlay absolute inset-0" />
            <div className="absolute bottom-4 left-4 text-white">
              <h4 className="text-xl font-semibold">{t("gallery-private")}</h4>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
