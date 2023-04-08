import {
  Carousel,
  CarouselItem,
  CarouselControl,
  CarouselIndicators,
  CarouselCaption,
} from "reactstrap";

import { useHeroService } from "./service";

export const Hero = () => {
  const { goToIndex, next, previous, activeIndex, HERO_ITEMS } =
    useHeroService();
  return (
    <Carousel
      {...{
        activeIndex,
        next,
        previous,
        dark: false,
        fade: true,
      }}
    >
      <CarouselIndicators
        items={HERO_ITEMS}
        activeIndex={activeIndex}
        onClickHandler={goToIndex}
      />
      {HERO_ITEMS.map((item) => {
        return (
          <CarouselItem key={item.src}>
            <img
              src={item.src}
              alt={item.altText}
              {...{ style: { width: "100vw" } }}
            />
            <CarouselCaption
              className="text-primary"
              captionText={item.caption}
              captionHeader={item.caption}
            />
          </CarouselItem>
        );
      })}
    </Carousel>
  );
};
