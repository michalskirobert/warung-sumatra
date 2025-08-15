import { useAdditionals } from "./additionals";
import { useAppetizers } from "./appetizers";
import { useBakmie } from "./backmie";
import { useDrinks } from "./drinks";
import { useNasiGoreng } from "./nasi-goreng";
import { useOtherDishes } from "./other-dishes";
import { useSoups } from "./soups";

export const useGenerateMenuList = () => {
  const bakmie = useBakmie();
  const nasiGoreng = useNasiGoreng();

  const {
    additional,
    additionalSauceTempura,
    additionalSoup,
    additonalTempura,
  } = useAdditionals();

  const appetizers = useAppetizers();
  const soups = useSoups();
  const otherDishes = useOtherDishes();
  const drinks = useDrinks();

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
