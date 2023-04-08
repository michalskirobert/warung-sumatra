import { useState } from "react";
import { HERO_ITEMS } from "./utils";

export const useHeroService = () => {
  const [activeIndex, setActiveIndex] = useState<number>(0);
  const [animating, setAnimating] = useState<boolean>(false);

  const next = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === HERO_ITEMS.length - 1 ? 0 : activeIndex + 1;
    setActiveIndex(nextIndex);
  };

  const previous = () => {
    if (animating) return;
    const nextIndex =
      activeIndex === 0 ? HERO_ITEMS.length - 1 : activeIndex - 1;
    setActiveIndex(nextIndex);
  };

  const goToIndex = (newIndex: number) => {
    if (animating) return;
    setActiveIndex(newIndex);
  };

  return {
    next,
    previous,
    goToIndex,
    activeIndex,
    animating,
    setAnimating,
    HERO_ITEMS,
  };
};
