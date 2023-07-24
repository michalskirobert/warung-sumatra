import heroIcon from "@assets/temp/images/hero-icon.png";
import { HERO_BUTTONS_HELPER, SLIDER_HELPER } from "./utils";
import { useHeroService } from "./service";

export const HeroSlider = () => {
  const { currentSlide, handleButtons, checkButtonVisibility } =
    useHeroService();

  return (
    <section className="hero text-center" aria-label="home" id="home">
      <ul className="hero-slider" data-hero-slider>
        {SLIDER_HELPER.map(
          (
            { heroSubtitle, heroText, heroTitle, img, link, linkUrl },
            index
          ) => (
            <li
              key={index}
              className={`slider-item ${
                currentSlide === index ? "active" : ""
              }`}
              data-hero-slider-item
            >
              <div className="slider-bg">
                <img
                  src={img}
                  width="1880"
                  height="950"
                  alt=""
                  className="img-cover"
                />
              </div>

              <p className="label-2 section-subtitle slider-reveal">
                {heroSubtitle}
              </p>

              <h1 className="display-1 hero-title slider-reveal">
                {heroTitle}
              </h1>

              <p className="body-2 hero-text slider-reveal">{heroText}</p>

              {!!link && (
                <a href={linkUrl} className="btn btn-primary slider-reveal">
                  <span className="text text-1">{link}</span>

                  <span className="text text-2" aria-hidden="true">
                    {link}
                  </span>
                </a>
              )}
            </li>
          )
        )}
      </ul>
      {HERO_BUTTONS_HELPER.map(({ action, className, icon }) => (
        <button
          key={action}
          {...{
            className: `${className} ${
              checkButtonVisibility(action) ? "hidden" : ""
            }`,
            onClick: () => handleButtons(action),
          }}
        >
          {icon}
        </button>
      ))}

      <a href="#" className="hero-btn has-after">
        <img src={heroIcon} width="48" height="48" alt="booking icon" />

        <span className="label-2 text-center span">Book A Table</span>
      </a>
    </section>
  );
};
