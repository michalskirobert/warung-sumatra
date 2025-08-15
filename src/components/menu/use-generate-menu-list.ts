import { useTranslations } from "next-intl";
import { AdditionalProps, MenuItemProps } from "./MenuBlock";

export const useGenerateMenuList = () => {
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

  return {
    bakmie,
    nasiGoreng,
    additional,
    additionalSoup,
    appetizers,
    soups,
    additonalTempura,
    additionalSauceTempura,
    otherDishes,
    drinks,
  };
};
