"use client";

import { useTranslations } from "next-intl";
import { useEffect } from "react";
import { MenuBlock } from "./MenuBlock";
import { useGenerateMenuList } from "./use-generate-menu-list";
import { Allergens } from "./Allergens";

export default function MenuLists() {
  const t = useTranslations();

  const {
    additional,
    additionalSauceTempura,
    additionalSoup,
    additonalTempura,
    appetizers,
    bakmie,
    nasiGoreng,
    soups,
    otherDishes,
    drinks,
  } = useGenerateMenuList();

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
      <div className="slide-in-left space-y-8">
        <MenuBlock
          title={t("menu-bakmie-title")}
          subtitle={t("menu-bakmie-subtitle")}
          items={bakmie}
          additional={additional}
        />
        <MenuBlock
          title={t("menu-nasi-goreng-title")}
          subtitle={t("menu-nasi-goreng-subtitle")}
          items={nasiGoreng}
          additional={additional}
        />
        <MenuBlock title={t("menu-other-dishes-title")} items={otherDishes} />
      </div>

      <div className="slide-in-right space-y-8">
        <MenuBlock
          title={t("menu-soups-title")}
          items={soups}
          additional={additionalSoup}
          subtitle={t("menu-soups-subtitle")}
        />
        <MenuBlock title={t("menu-appetizers-title")} items={appetizers} />
        <MenuBlock
          title={t("menu-tempura-title")}
          additional={additonalTempura}
          additionalSauces={additionalSauceTempura}
        />
        <MenuBlock title={t("menu-drinks-title")} items={drinks} />
        <Allergens />
      </div>
    </div>
  );
}
