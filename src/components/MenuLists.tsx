"use client";

import { useTranslations } from "next-intl";
import { useEffect } from "react";

type MenuItem = { title: string; price: string; desc: string };
type Props = { t?: ReturnType<typeof useTranslations> };

function MenuBlock({ title, items }: { title: string; items: MenuItem[] }) {
  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl border border-stone-200">
      <h3 className="text-3xl font-heading font-bold text-stone-800 mb-8 text-center">
        {title}
      </h3>
      <div className="space-y-6">
        {items.map((it, idx) => (
          <div
            key={it.title}
            className={`menu-item ${
              idx < items.length - 1 ? "border-b border-stone-200 pb-6" : ""
            }`}
            style={{ transitionDelay: `${idx * 0.1}s` }}
          >
            {it.title}
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-xl font-semibold text-stone-800">
                {it.title}
              </h4>
              <span className="text-xl font-bold text-amber-600">
                {it.price}
              </span>
            </div>
            <p className="text-stone-600">{it.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
}

export default function MenuLists({ t }: Props) {
  const $t = t ?? useTranslations();

  const main: MenuItem[] = [
    {
      title: $t("menu-nasi-ayam"),
      price: "28 zł",
      desc: $t("menu-nasi-ayam-desc"),
    },
    {
      title: $t("menu-rendang"),
      price: "35 zł",
      desc: $t("menu-rendang-desc"),
    },
    {
      title: $t("menu-ayam-bakar"),
      price: "32 zł",
      desc: $t("menu-ayam-bakar-desc"),
    },
    {
      title: $t("menu-mie-goreng"),
      price: "26 zł",
      desc: $t("menu-mie-goreng-desc"),
    },
  ];

  const appetizers: MenuItem[] = [
    {
      title: $t("menu-gado-gado"),
      price: "22 zł",
      desc: $t("menu-gado-gado-desc"),
    },
    { title: $t("menu-satay"), price: "24 zł", desc: $t("menu-satay-desc") },
  ];

  const desserts: MenuItem[] = [
    {
      title: $t("menu-es-cendol"),
      price: "18 zł",
      desc: $t("menu-es-cendol-desc"),
    },
    {
      title: $t("menu-pisang-goreng"),
      price: "16 zł",
      desc: $t("menu-pisang-goreng-desc"),
    },
  ];

  useEffect(() => {
    if (typeof document !== "undefined") {
      const items = document.querySelectorAll<HTMLElement>(".menu-item");
      items.forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.1}s`;
      });
    }
  }, []);

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      <div className="slide-in-left">
        <MenuBlock title={$t("menu-main-title")} items={main} />
      </div>

      <div className="slide-in-right space-y-8">
        <MenuBlock title={$t("menu-appetizers-title")} items={appetizers} />
        <MenuBlock title={$t("menu-desserts-title")} items={desserts} />
      </div>
    </div>
  );
}
