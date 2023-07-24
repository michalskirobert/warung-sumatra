import Y from "@assets/images/utils/foods/jedzenie.jpg";
import X from "@assets/images/utils/foods/jedzenie2.jpg";
import Z from "@assets/images/utils/foods/jedzenie3.jpg";

import tempEvent1 from "@assets/temp/images/event-1.jpg";
import tempEvent2 from "@assets/temp/images/event-2.jpg";
import tempEvent3 from "@assets/temp/images/event-3.jpg";

import temp1 from "@assets/temp/images/features-icon-1.png";
import temp2 from "@assets/temp/images/features-icon-2.png";
import temp3 from "@assets/temp/images/features-icon-3.png";
import temp4 from "@assets/temp/images/features-icon-4.png";

import shape1 from "@assets/temp/images/shape-1.png";
import shape2 from "@assets/temp/images/shape-2.png";
import shape4 from "@assets/temp/images/shape-4.png";
import shape7 from "@assets/temp/images/shape-7.png";
import shape8 from "@assets/temp/images/shape-8.png";
import shape9 from "@assets/temp/images/shape-9.png";

import dishBanner from "@assets/temp/images/special-dish-banner.jpg";

import badge1 from "@assets/temp/images/badge-1.png";

import testiAvatar from "@assets/temp/images/testi-avatar.jpg";
import { HeroSlider } from "./hero";
import { RECOMMENDED_FOODS } from "./utils";
import { useAppSelector } from "@store/config";
import { CONSTANTS } from "@utils/index";

export const Dashboard = () => {
  const { language } = useAppSelector(({ globalConfig }) => globalConfig);
  return (
    <main>
      <article>
        <HeroSlider />
        <section
          className="section service bg-black-10 text-center"
          aria-label="service"
        >
          <div className="container">
            <p className="section-subtitle label-2">
              Flavors of real Indonesian cousine
            </p>
            <h2 className="headline-1 section-title">Our recommendation</h2>
            <p className="section-text">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry lorem Ipsum has been the industrys standard dummy text
              ever.
            </p>

            <ul className="grid-list">
              {RECOMMENDED_FOODS[language.value].map(
                ({ img, imgAlt, title }, index) => (
                  <li key={index}>
                    <div className="service-card">
                      <a
                        href={CONSTANTS.MENU_ROUTE}
                        className="has-before hover:shine"
                      >
                        <figure
                          className="card-banner img-holder"
                          style={{ width: 285, height: 336 }}
                        >
                          <img
                            src={img}
                            width={285}
                            height={336}
                            loading="lazy"
                            alt={imgAlt}
                            className="img-cover"
                          />
                        </figure>
                      </a>
                      <div className="card-content">
                        <h3 className="title-4 card-title">
                          <a href={CONSTANTS.MENU_ROUTE}>{title}</a>
                        </h3>
                        <a
                          href={CONSTANTS.MENU_ROUTE}
                          className="btn-text hover-underline label-2"
                        >
                          View Menu
                        </a>
                      </div>
                    </div>
                  </li>
                )
              )}
            </ul>

            <img
              src={shape1}
              width={246}
              height={412}
              loading="lazy"
              alt="shape"
              className="shape shape-1 move-anim"
            />
            <img
              src={shape2}
              width={343}
              height={345}
              loading="lazy"
              alt="shape"
              className="shape shape-2 move-anim"
            />
          </div>
        </section>

        {/*
        - #SPECIAL DISH
      */}
        <section
          className="special-dish text-center"
          aria-labelledby="dish-label"
        >
          <div className="special-dish-banner">
            <img
              src={dishBanner}
              width={940}
              height={900}
              loading="lazy"
              alt="special dish"
              className="img-cover"
            />
          </div>
          <div className="special-dish-content bg-black-10">
            <div className="container">
              <img
                src={badge1}
                width={28}
                height={41}
                loading="lazy"
                alt="badge"
                className="abs-img"
              />
              <p className="section-subtitle label-2">Special Dish</p>
              <h2 className="headline-1 section-title">Randang</h2>
              <p className="section-text">
                Lorem Ipsum is simply dummy text of the printingand typesetting
                industry lorem Ipsum has been the industrys standard dummy text
                ever since the when an unknown printer took a galley of type.
              </p>
              <div className="wrapper">
                <del className="del body-3">$40.00</del>
                <span className="span body-1">$20.00</span>
              </div>
              <a href="#" className="btn btn-primary">
                <span className="text text-1">View All Menu</span>
                <span className="text text-2" aria-hidden="true">
                  View All Menu
                </span>
              </a>
            </div>
          </div>
          <img
            src={shape4}
            width={179}
            height={359}
            loading="lazy"
            alt=""
            className="shape shape-1"
          />
          <img
            src={shape9}
            width={351}
            height={462}
            loading="lazy"
            alt=""
            className="shape shape-2"
          />
        </section>

        {/*
        - #TESTIMONIALS
      */}
        <section
          className="section testi text-center has-bg-image"
          style={{
            backgroundImage:
              'url("./../../../assets/temp/images/testimonial-bg.jpg")',
          }}
          aria-label="testimonials"
        >
          <div className="container">
            <div className="quote">”</div>
            <p className="headline-2 testi-text">
              I wanted to thank you for inviting me down for that amazing dinner
              the other night. The food was extraordinary.
            </p>
            <div className="wrapper">
              <div className="separator" />
              <div className="separator" />
              <div className="separator" />
            </div>
            <div className="profile">
              <img
                src={testiAvatar}
                width={100}
                height={100}
                loading="lazy"
                alt="Sam Jhonson"
                className="img"
              />
              <p className="label-2 profile-name">Sam Jhonson</p>
            </div>
          </div>
        </section>

        {/*
        - #FEATURES
      */}
        <section className="section features text-center" aria-label="features">
          <div className="container">
            <p className="section-subtitle label-2">Why Choose Us</p>
            <h2 className="headline-1 section-title">Our Strength</h2>
            <ul className="grid-list">
              <li className="feature-item">
                <div className="feature-card">
                  <div className="card-icon">
                    <img
                      src={temp1}
                      width={100}
                      height={80}
                      loading="lazy"
                      alt="icon"
                    />
                  </div>
                  <h3 className="title-2 card-title">Hygienic Food</h3>
                  <p className="label-1 card-text">
                    Lorem Ipsum is simply dummy printing and typesetting.
                  </p>
                </div>
              </li>
              <li className="feature-item">
                <div className="feature-card">
                  <div className="card-icon">
                    <img
                      src={temp2}
                      width={100}
                      height={80}
                      loading="lazy"
                      alt="icon"
                    />
                  </div>
                  <h3 className="title-2 card-title">Fresh Environment</h3>
                  <p className="label-1 card-text">
                    Lorem Ipsum is simply dummy printing and typesetting.
                  </p>
                </div>
              </li>
              <li className="feature-item">
                <div className="feature-card">
                  <div className="card-icon">
                    <img
                      src={temp3}
                      width={100}
                      height={80}
                      loading="lazy"
                      alt="icon"
                    />
                  </div>
                  <h3 className="title-2 card-title">Skilled Chefs</h3>
                  <p className="label-1 card-text">
                    Lorem Ipsum is simply dummy printing and typesetting.
                  </p>
                </div>
              </li>
              <li className="feature-item">
                <div className="feature-card">
                  <div className="card-icon">
                    <img
                      src={temp4}
                      width={100}
                      height={80}
                      loading="lazy"
                      alt="icon"
                    />
                  </div>
                  <h3 className="title-2 card-title">Event &amp; Party</h3>
                  <p className="label-1 card-text">
                    Lorem Ipsum is simply dummy printing and typesetting.
                  </p>
                </div>
              </li>
            </ul>
            <img
              src={shape7}
              width={208}
              height={178}
              loading="lazy"
              alt="shape"
              className="shape shape-1"
            />
            <img
              src={shape8}
              width={120}
              height={115}
              loading="lazy"
              alt="shape"
              className="shape shape-2"
            />
          </div>
        </section>
        {/*
        - #EVENT
      */}
        <section className="section event bg-black-10" aria-label="event">
          <div className="container">
            <p className="section-subtitle label-2 text-center">
              Recent Updates
            </p>
            <h2 className="section-title headline-1 text-center">
              Upcoming Event
            </h2>
            <ul className="grid-list">
              <li>
                <div className="event-card has-before hover:shine">
                  <div
                    className="card-banner img-holder"
                    style={{ width: 350, height: 450 }}
                  >
                    <img
                      src={tempEvent1}
                      width={350}
                      height={450}
                      loading="lazy"
                      alt="Flavour so good you’ll try to eat with your eyes."
                      className="img-cover"
                    />
                    <time
                      className="publish-date label-2"
                      dateTime="2022-09-15"
                    >
                      15/09/2022
                    </time>
                  </div>
                  <div className="card-content">
                    <p className="card-subtitle label-2 text-center">
                      Food, Flavour
                    </p>
                    <h3 className="card-title title-2 text-center">
                      Flavour so good you’ll try to eat with your eyes.
                    </h3>
                  </div>
                </div>
              </li>
              <li>
                <div className="event-card has-before hover:shine">
                  <div
                    className="card-banner img-holder"
                    style={{ width: 350, height: 450 }}
                  >
                    <img
                      src={tempEvent2}
                      width={350}
                      height={450}
                      loading="lazy"
                      alt="Flavour so good you’ll try to eat with your eyes."
                      className="img-cover"
                    />
                    <time
                      className="publish-date label-2"
                      dateTime="2022-09-08"
                    >
                      08/09/2022
                    </time>
                  </div>
                  <div className="card-content">
                    <p className="card-subtitle label-2 text-center">
                      Healthy Food
                    </p>
                    <h3 className="card-title title-2 text-center">
                      Flavour so good you’ll try to eat with your eyes.
                    </h3>
                  </div>
                </div>
              </li>
              <li>
                <div className="event-card has-before hover:shine">
                  <div
                    className="card-banner img-holder"
                    style={{ width: 350, height: 450 }}
                  >
                    <img
                      src={tempEvent3}
                      width={350}
                      height={450}
                      loading="lazy"
                      alt="Flavour so good you’ll try to eat with your eyes."
                      className="img-cover"
                    />
                    <time
                      className="publish-date label-2"
                      dateTime="2022-09-03"
                    >
                      03/09/2022
                    </time>
                  </div>
                  <div className="card-content">
                    <p className="card-subtitle label-2 text-center">Recipie</p>
                    <h3 className="card-title title-2 text-center">
                      Flavour so good you’ll try to eat with your eyes.
                    </h3>
                  </div>
                </div>
              </li>
            </ul>
            <a href="#" className="btn btn-primary">
              <span className="text text-1">View Our Blog</span>
              <span className="text text-2" aria-hidden="true">
                View Our Blog
              </span>
            </a>
          </div>
        </section>
      </article>
    </main>
  );
};
