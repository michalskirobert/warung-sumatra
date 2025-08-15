import { useTranslations } from "next-intl";
import { MenuItemProps } from "../MenuBlock";

export const useDrinks = () => {
  const t = useTranslations();

  const drinks: MenuItemProps[] = [
    {
      title: t("menu-drinks-water-title"),
      desc: t("menu-drinks-water-desc"),
      price: "5 zł",
    },
    {
      title: t("menu-drinks-pepsi-title"),
      desc: t("menu-drinks-pepsi-desc"),
      price: "7 zł",
    },
    {
      title: t("menu-drinks-juice-title"),
      desc: t("menu-drinks-juice-desc"),
      price: "7 zł",
    },
    {
      title: t("menu-drinks-lemonade-title"),
      desc: t("menu-drinks-lemonade-desc"),
      price: "5 zł",
    },
    {
      title: t("menu-drinks-tea-title"),
      desc: t("menu-drinks-tea-desc"),
      price: "10 zł",
    },
    {
      title: t("menu-drinks-coffee-title"),
      desc: t("menu-drinks-coffee-desc"),
      price: "10 zł",
    },
    {
      title: t("menu-drinks-beer-title"),
      desc: t("menu-drinks-beer-desc"),
      price: "14 zł",
    },
  ];

  return drinks;
};
