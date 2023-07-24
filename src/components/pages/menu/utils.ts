import { NGlobalConfig } from "@namespace/global-config";

import Y from "@assets/images/utils/foods/jedzenie.jpg";
import X from "@assets/images/utils/foods/jedzenie2.jpg";
import Z from "@assets/images/utils/foods/jedzenie3.jpg";

type TMenuHelper = {
  img: string;
  imgAlt: string;
  price: string;
  title: string;
  desc: string;
  badge?: string;
};

export const MENU_HELPER: Record<NGlobalConfig.TLangCode, TMenuHelper[]> = {
  bh: [
    {
      title: "A",
      img: X,
      desc: "AAAAAAAA",
      badge: "Seasonal",
      imgAlt: "A",
      price: "25zł",
    },
    {
      title: "A",
      img: Y,
      desc: "AAAAAAAA",
      imgAlt: "A",
      price: "25zł",
    },
    {
      title: "A",
      img: Z,
      desc: "AAAAAAAA",
      imgAlt: "A",
      price: "25zł",
    },
    {
      title: "A",
      img: X,
      desc: "AAAAAAAA",
      imgAlt: "A",
      price: "25zł",
    },
    {
      title: "A",
      img: Y,
      desc: "AAAAAAAA",
      imgAlt: "A",
      price: "25zł",
    },
    {
      title: "A",
      img: Z,
      desc: "AAAAAAAA",
      imgAlt: "A",
      price: "25zł",
    },
  ],
  eng: [
    {
      title: "A",
      img: X,
      desc: "AAAAAAAA",
      badge: "Seasonal",
      imgAlt: "A",
      price: "25zł",
    },
    {
      title: "A",
      img: Y,
      desc: "AAAAAAAA",
      imgAlt: "A",
      price: "25zł",
    },
    {
      title: "A",
      img: Z,
      desc: "AAAAAAAA",
      imgAlt: "A",
      price: "25zł",
    },
    {
      title: "A",
      img: X,
      desc: "AAAAAAAA",
      imgAlt: "A",
      price: "25zł",
    },
    {
      title: "A",
      img: Y,
      desc: "AAAAAAAA",
      imgAlt: "A",
      price: "25zł",
    },
    {
      title: "A",
      img: Z,
      desc: "AAAAAAAA",
      imgAlt: "A",
      price: "25zł",
    },
  ],
  pl: [
    {
      title: "A",
      img: X,
      desc: "AAAAAAAA",
      badge: "Seasonal",
      imgAlt: "A",
      price: "25zł",
    },
    {
      title: "A",
      img: Y,
      desc: "AAAAAAAA",
      imgAlt: "A",
      price: "25zł",
    },
    {
      title: "A",
      img: Z,
      desc: "AAAAAAAA",
      imgAlt: "A",
      price: "25zł",
    },
    {
      title: "A",
      img: X,
      desc: "AAAAAAAA",
      imgAlt: "A",
      price: "25zł",
    },
    {
      title: "A",
      img: Y,
      desc: "AAAAAAAA",
      imgAlt: "A",
      price: "25zł",
    },
    {
      title: "A",
      img: Z,
      desc: "AAAAAAAA",
      imgAlt: "A",
      price: "25zł",
    },
  ],
};
