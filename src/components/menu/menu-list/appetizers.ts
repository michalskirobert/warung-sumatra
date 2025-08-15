import { useTranslations } from "next-intl";
import { MenuItemProps } from "../MenuBlock";

export const useAppetizers = () => {
  const t = useTranslations();

  const appetizers: MenuItemProps[] = [
    {
      title: t("menu-appetizers-bakwan-title"),
      price: "17 zł",
      desc: t("menu-appetizers-bakwan-desc"),
    },
    {
      title: t("menu-appetizers-bakwan-jagung-title"),
      price: "18 zł",
      desc: t("menu-appetizers-bakwan-jagung-desc"),
    },
    {
      title: t("menu-appetizers-lumpia-mie-title"),
      price: "17 zł",
      desc: t("menu-appetizers-lumpia-mie-desc"),
    },
    {
      title: t("menu-appetizers-lumpia-sayur-title"),
      price: "16 zł",
      desc: t("menu-appetizers-lumpia-sayur-desc"),
    },
    {
      title: t("menu-appetizers-lumpia-ayam-title"),
      price: "17 zł",
      desc: t("menu-appetizers-lumpia-ayam-desc"),
    },
    {
      title: t("menu-appetizers-pangsit-goreng-chicken-title"),
      price: "17 zł",
      desc: t("menu-appetizers-pangsit-goreng-chicken-desc"),
    },
    {
      title: t("menu-appetizers-pangsit-goreng-vege-title"),
      price: "16 zł",
      desc: t("menu-appetizers-pangsit-goreng-vege-desc"),
    },
    {
      title: t("menu-appetizers-tempeh-pastry-title"),
      price: "20zł",
    },
  ];

  return appetizers;
};
