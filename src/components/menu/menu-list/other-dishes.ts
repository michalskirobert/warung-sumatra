import { useTranslations } from "next-intl";
import { MenuItemProps } from "../MenuBlock";

export const useOtherDishes = () => {
  const t = useTranslations();

  const otherDishes: MenuItemProps[] = [
    {
      title: t("menu-other-dishes-dorada-timur-title"),
      desc: t("menu-other-dishes-dorada-timur-desc"),
      price: "46 zł",
    },
    {
      title: t("menu-other-dishes-rendang-title"),
      desc: t("menu-other-dishes-rendang-desc"),
      price: "45 zł",
    },
    {
      title: t("menu-other-dishes-kemangi-title"),
      desc: t("menu-other-dishes-kemangi-desc"),
      price: "42 zł",
    },
    {
      title: t("menu-other-dishes-bakar-babi-title"),
      desc: t("menu-other-dishes-bakar-babi-desc"),
      price: "40 zł",
    },
    {
      title: t("menu-other-dishes-manuk-title"),
      desc: t("menu-other-dishes-manuk-desc"),
      price: "38 zł",
    },
    {
      title: t("menu-other-dishes-iga-kupang-title"),
      desc: t("menu-other-dishes-iga-kupang-desc"),
      price: "38 zł",
    },
    {
      title: t("menu-other-dishes-kurczak-kalasan-title"),
      desc: t("menu-other-dishes-kurczak-kalasan-desc"),
      price: "40 zł",
    },
    {
      title: t("menu-other-dishes-kaczka-gulai-title"),
      desc: t("menu-other-dishes-kaczka-gulai-desc"),
      price: "43 zł",
    },
    {
      title: t("menu-other-dishes-opor-title"),
      desc: t("menu-other-dishes-opor-desc"),
      price: "43 zł",
    },
    {
      title: t("menu-other-dishes-baklazan-rendang-title"),
      desc: t("menu-other-dishes-baklazan-rendang-desc"),
      price: "35 zł",
    },
    {
      title: t("menu-other-dishes-sumatra-wege-title"),
      desc: t("menu-other-dishes-sumatra-wege-desc"),
      price: "35 zł",
    },
    {
      title: t("menu-other-dishes-ketoprak-title"),
      desc: t("menu-other-dishes-ketoprak-desc"),
      price: "35 zł",
    },
    {
      title: t("menu-other-dishes-lalapan-title"),
      desc: t("menu-other-dishes-lalapan-desc"),
      price: "25 zł",
    },
  ];

  return otherDishes;
};
