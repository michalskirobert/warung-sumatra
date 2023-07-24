import { useEffect, useMemo, useState } from "react";
import { SLIDER_HELPER, TButtonsAction } from "./utils";

export const useHeroService = () => {
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  const sliderLength = SLIDER_HELPER.length;

  const isLastSlide = useMemo(() => {
    return sliderLength === currentSlide + 1;
  }, [currentSlide]);

  const isFirstSlide = useMemo(() => {
    return currentSlide === 0;
  }, [currentSlide]);

  const slideNext = () => {
    if (isLastSlide) return;

    setCurrentSlide((prev) => prev + 1);
  };

  const slidePrev = () => {
    if (isFirstSlide) return;

    setCurrentSlide((prev) => prev - 1);
  };

  const checkButtonVisibility = (action: TButtonsAction) => {
    switch (action) {
      case "NEXT":
        return !!isLastSlide;
      case "PREV":
        return !!isFirstSlide;
      default:
        return false;
    }
  };

  const handleButtons = (action: TButtonsAction) => {
    switch (action) {
      case "NEXT":
        slideNext();
        return;
      case "PREV":
        slidePrev();
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      if (!isLastSlide) slideNext();
      else setCurrentSlide(0);
    }, 9200);

    return () => clearInterval(interval);
  }, [currentSlide]);

  return {
    currentSlide,
    handleButtons,
    checkButtonVisibility,
  };
};
