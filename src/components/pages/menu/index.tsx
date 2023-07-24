import { CustomContainer } from "@components/shared";
import { useMenuService } from "./service";

import shape5 from "@assets/temp/images/shape-5.png";
import shape6 from "@assets/temp/images/shape-6.png";
import { MENU_HELPER } from "./utils";

export const Menu = () => {
  const { language } = useMenuService();

  return (
    <CustomContainer>
      <section className="section menu" aria-label="menu-label" id="menu">
        <div className="container">
          <p className="section-subtitle text-center label-2">Indonesian</p>
          <h2 className="headline-1 section-title text-center">Menu</h2>
          <ul className="grid-list">
            {MENU_HELPER[language.value].map(
              ({ desc, img, imgAlt, price, title, badge }) => (
                <li key={img}>
                  <div className="menu-card hover:card">
                    <figure
                      className="card-banner img-holder"
                      style={{ width: 100, height: 100 }}
                    >
                      <img
                        src={img}
                        width={100}
                        height={100}
                        loading="lazy"
                        alt={imgAlt}
                        className="img-cover"
                      />
                    </figure>
                    <div>
                      <div className="title-wrapper">
                        <h3 className="title-3">
                          <a href="#" className="card-title">
                            {title}
                          </a>
                        </h3>
                        {!!badge && (
                          <span className="badge label-1">{badge}</span>
                        )}
                        <span className="span title-2">{price}</span>
                      </div>
                      <p className="card-text label-1">{desc}</p>
                    </div>
                  </div>
                </li>
              )
            )}
          </ul>
          <p className="menu-text text-center">
            During winter daily from <span className="span">7:00 pm</span> to{" "}
            <span className="span">9:00 pm</span>
          </p>
          <a href="#" className="btn btn-primary">
            <span className="text text-1">View All Menu</span>
            <span className="text text-2" aria-hidden="true">
              View All Menu
            </span>
          </a>
          <img
            src={shape5}
            width={921}
            height={1036}
            loading="lazy"
            alt="shape"
            className="shape shape-2 move-anim"
          />
          <img
            src={shape6}
            width={343}
            height={345}
            loading="lazy"
            alt="shape"
            className="shape shape-3 move-anim"
          />
        </div>
      </section>
    </CustomContainer>
  );
};
