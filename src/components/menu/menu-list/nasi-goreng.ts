import { useTranslations } from "next-intl";
import { MenuItemProps } from "../MenuBlock";

export const useNasiGoreng = () => {
  const t = useTranslations();

  const nasiGoreng: MenuItemProps[] = [
    {
      title: t("menu-nasigoreng-batak-title"),
      desc: t("menu-nasigoreng-batak-desc"),
    },
    {
      title: t("menu-nasigoreng-kampung-title"),
      desc: t("menu-nasigoreng-kampung-desc"),
    },
    {
      title: t("menu-nasigoreng-kare-title"),
      desc: t("menu-nasigoreng-kare-desc"),
    },
    {
      title: t("menu-nasigoreng-hoisin-title"),
      desc: t("menu-nasigoreng-hoisin-desc"),
    },
    {
      title: t("menu-nasigoreng-gublak-title"),
      desc: t("menu-nasigoreng-gublak-desc"),
    },
    {
      title: t("menu-nasigoreng-celor-title"),
      desc: t("menu-nasigoreng-celor-desc"),
    },
    {
      title: t("menu-nasigoreng-lada-hitman-title"),
      desc: t("menu-nasigoreng-lada-hitman-desc"),
    },
  ];

  return nasiGoreng;
};
