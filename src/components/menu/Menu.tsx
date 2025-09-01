"use client";

import { useTranslations } from "next-intl";
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

  return (
    <div className="grid lg:grid-cols-2 gap-12">
      <div className="space-y-8">
        <MenuBlock
          className="slide-in-left "
          title={t("menu-bakmie-title")}
          subtitle={t("menu-bakmie-subtitle")}
          items={bakmie}
          additional={additional}
          shape={1}
        />
        <MenuBlock
          className="slide-in-left"
          title={t("menu-nasi-goreng-title")}
          subtitle={t("menu-nasi-goreng-subtitle")}
          items={nasiGoreng}
          additional={additional}
          shape={2}
        />
        <MenuBlock
          className="slide-in-left"
          title={t("menu-other-dishes-title")}
          items={otherDishes}
          shape={3}
        />
      </div>

      <div className="space-y-8">
        <MenuBlock
          className="slide-in-right"
          title={t("menu-soups-title")}
          items={soups}
          additional={additionalSoup}
          subtitle={t("menu-soups-subtitle")}
          shape={4}
        />
        <MenuBlock
          className="slide-in-right"
          title={t("menu-appetizers-title")}
          items={appetizers}
          shape={5}
        />
        <MenuBlock
          className="slide-in-right"
          title={t("menu-tempura-title")}
          additional={additonalTempura}
          additionalSauces={additionalSauceTempura}
          shape={6}
        />
        <MenuBlock
          className="slide-in-right"
          title={t("menu-drinks-title")}
          items={drinks}
          shape={8}
        />
        <Allergens />
      </div>
    </div>
  );
}
