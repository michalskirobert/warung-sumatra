import { useTranslations } from "next-intl";
import { MenuItemProps } from "../MenuBlock";

export const useSoups = () => {
  const t = useTranslations();

  const soups: MenuItemProps[] = [
    {
      title: t("menu-soups-bakso-title"),
      price: "30 zł",
      desc: t("menu-soups-bakso-desc"),
    },
    {
      title: t("menu-soups-pangsit-title"),
      price: "27 zł",
      desc: t("menu-soups-pangsit-desc"),
    },
    {
      title: t("menu-soups-toba-title"),
      price: "27 zł",
      desc: t("menu-soups-toba-desc"),
    },
  ];

  return soups;
};
