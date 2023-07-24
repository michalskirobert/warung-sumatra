import { NGlobalConfig } from "@namespace/global-config";

import Y from "@assets/images/utils/foods/jedzenie.jpg";
import X from "@assets/images/utils/foods/jedzenie2.jpg";
import Z from "@assets/images/utils/foods/jedzenie3.jpg";

type TRecommendedFoods = {
  title: string;
  img: string;
  imgAlt: string;
};

export const RECOMMENDED_FOODS: Record<
  NGlobalConfig.TLangCode,
  TRecommendedFoods[]
> = {
  bh: [
    { img: Y, title: "XXX", imgAlt: "XXX" },
    { img: X, title: "YYYY", imgAlt: "YYYY" },
    { img: Z, title: "AAAA", imgAlt: "AAAAAAA" },
  ],
  eng: [
    { img: Y, title: "XXX", imgAlt: "XXX" },
    { img: X, title: "YYYY", imgAlt: "YYYY" },
    { img: Z, title: "AAAA", imgAlt: "AAAAAAA" },
  ],
  pl: [
    { img: Y, title: "XXX", imgAlt: "XXX" },
    { img: X, title: "YYYY", imgAlt: "YYYY" },
    { img: Z, title: "AAAA", imgAlt: "AAAAAAA" },
  ],
};
