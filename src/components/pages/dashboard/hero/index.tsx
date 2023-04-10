import { Carousel, CarouselItem, CarouselIndicators } from "reactstrap";

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
        hidden={true}
      />
      {HERO_ITEMS.map((item) => {
        return (
          <CarouselItem key={item.src}>
            <img
              src={item.src}
              alt={item.altText}
              {...{
                style: {
                  width: "100%",
                  backgroundSize: "cover",
                  height: "100%",
                },
              }}
            />
          </CarouselItem>
        );
      })}
    </Carousel>
  );
};
