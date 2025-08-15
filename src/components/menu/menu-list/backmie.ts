import { useTranslations } from "next-intl";
import { MenuItemProps } from "../MenuBlock";

export const useBakmie = () => {
  const t = useTranslations();

  const bakmie: MenuItemProps[] = [
    {
      title: t("menu-bakmie-wheat-peanut-sauce-title"),
    },
    {
      title: t("menu-bakmie-rice-or-soy-oyster-sauce-title"),
    },
    {
      title: t("menu-bakmie-rice-hoisin-sauce-title"),
    },
    {
      title: t("menu-bakmie-wheat-or-rice-sumatra-sauce-title"),
    },
    {
      title: t("menu-bakmie-wheat-or-soy-tumbuk-sauce-title"),
      desc: t("menu-bakmie-wheat-or-soy-tumbuk-sauce-desc"),
    },
    {
      title: t("menu-bakmie-wheat-or-rice-harasak-sauce-title"),
      desc: t("menu-bakmie-wheat-or-rice-harasak-sauce-desc"),
    },
    {
      title: t("menu-bakmie-wheat-or-soy-jingo-sauce-title"),
      desc: t("menu-bakmie-wheat-or-soy-jingo-sauce-desc"),
    },
  ];

  return bakmie;
};
