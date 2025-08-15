import { useTranslations } from "next-intl";
import { AdditionalProps } from "../MenuBlock";

export const useAdditionals = () => {
  const t = useTranslations();

  const additional: AdditionalProps[] = [
    {
      title: t("menu-additional-chicken-title"),
      price: "33 zł",
    },
    {
      title: t("menu-additional-pork-title"),
      price: "33 zł",
    },
    {
      title: t("menu-additional-beef-title"),
      price: "37 zł",
    },
    {
      title: t("menu-additional-tempeh-tofu-title"),
      price: "33 zł",
    },
    {
      title: t("menu-additional-duck-tempura-title"),
      price: "37 zł",
    },
    {
      title: t("menu-additional-chicken-pork-panko-title"),
      price: "38 zł",
    },
    {
      title: t("menu-additional-chicken-sate-title"),
      price: "38 zł",
    },
    {
      title: t("menu-additional-tempeh-bacen-title"),
      price: "40 zł",
    },
    {
      title: t("menu-additional-shrimp-title"),
      price: "38 zł",
    },
    {
      title: t("menu-additional-chicken-pork-tempura-title"),
      price: "38 zł",
    },
  ];

  const additionalSoup: AdditionalProps[] = [
    {
      title: t("menu-additional-soup-chicken-panko-title"),
      price: "30 zł",
    },
    {
      title: t("menu-additional-soup-chicken-title"),
      price: "28 zł",
    },
    {
      title: t("menu-additional-soup-shrimp-title"),
      price: "35 zł",
    },
    {
      title: t("menu-additional-soup-minced-beef-title"),
      price: "34 zł",
    },
    {
      title: t("menu-additional-soup-tempeh-tofu-title"),
      price: "28 zł",
    },
  ];

  const additonalTempura: AdditionalProps[] = [
    {
      title: t("menu-tempura-duck-title"),
      price: "37 zł",
    },
    {
      title: t("menu-tempura-chicken-title"),
      price: "34 zł",
    },
    {
      title: t("menu-tempura-pork-title"),
      price: "34 zł",
    },
    {
      title: t("menu-tempura-shrimp-title"),
      price: "38 zł",
    },
    {
      title: t("menu-tempura-calamari-title"),
      price: "38 zł",
    },
    {
      title: t("menu-tempura-zucchini-eggplant-title"),
      price: "34 zł",
    },
    {
      title: t("menu-tempura-tempeh-tofu-title"),
      price: "34 zł",
    },
  ];

  const additionalSauceTempura: AdditionalProps[] = [
    {
      title: t("menu-tempura-sauce-asam-manis-title"),
    },
    {
      title: t("menu-tempura-sauce-balado-title"),
    },
    {
      title: t("menu-tempura-sauce-padang-title"),
    },
    {
      title: t("menu-tempura-sauce-kacang-title"),
    },
    {
      title: t("menu-tempura-sauce-terasi-title"),
    },
    {
      title: t("menu-tempura-sauce-curry-title"),
    },
    {
      title: t("menu-tempura-sauce-lada-hitman-title"),
    },
  ];

  return {
    additional,
    additionalSoup,
    additonalTempura,
    additionalSauceTempura,
  };
};
