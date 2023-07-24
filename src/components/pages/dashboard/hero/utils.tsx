import Hero from "@assets/images/utils/header/warung.jpg";

import MainPicture from "@assets/images/utils/foods/set_1.jpg";

import AnotherPicture from "@assets/images/utils/foods/jedzenie3.jpg";

import { CONSTANTS } from "@utils/index";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";

export type TButtonsAction = "NEXT" | "PREV";

const defaultArrowIconsStyle: React.CSSProperties = {
  transform: `translateY(0) rotate(-45deg)`,
};

export const SLIDER_HELPER: readonly {
  img: string;
  heroSubtitle: string;
  heroTitle: string;
  heroText: string;
  link?: string;
  linkUrl?: string;
}[] = [
  {
    img: Hero,
    heroSubtitle: "Tradational & Hygine",
    heroTitle: "For the love of delicious food",
    heroText: "Come with family & feel the joy of mouthwatering food",
    link: "View Our Menu",
    linkUrl: CONSTANTS.MENU_ROUTE,
  },
  {
    img: MainPicture,
    heroSubtitle: "delightful experience",
    heroTitle: "title",
    heroText: "text",
  },
  {
    img: AnotherPicture,
    heroSubtitle: "delightful experience",
    heroTitle: "title",
    heroText: "text",
  },
  {
    img: Hero,
    heroSubtitle: "Tradational & Hygine",
    heroTitle: "For the love",
    heroText: "Come with family & feel the joy of mouthwatering food",
    link: "View Our Menu",
    linkUrl: CONSTANTS.MENU_ROUTE,
  },
];

export const HERO_BUTTONS_HELPER: readonly {
  className: `slider-btn ${string}`;
  action: TButtonsAction;
  icon: JSX.Element;
}[] = [
  {
    action: "PREV",
    className: "slider-btn prev",
    icon: <AiOutlineArrowLeft {...{ style: defaultArrowIconsStyle }} />,
  },
  {
    action: "NEXT",
    className: "slider-btn next",
    icon: <AiOutlineArrowRight {...{ style: defaultArrowIconsStyle }} />,
  },
];
