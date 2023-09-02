import { useAppSelector } from "@store/config";

import Logo from "@assets/images/utils/header/white_logo.png";
import { formatPhoneNumber } from "@helpers/useful-functions";
import { PhoneNumbers } from "@utils/enums";
import { CONSTANTS } from "@utils/index";
import { SOCIAL_MEDIA_HELPER, createFooterData } from "./utils";
import { useTranslation } from "react-i18next";
import { createNav } from "../header/nav/utils";
import { Link, useLocation } from "react-router-dom";

export const Footer = () => {
  const [translate] = useTranslation("common");

  const { version } = useAppSelector(({ init }) => init);

  const location = useLocation();

  const isLinkActive = (path: string) =>
    path === location.pathname ? "active" : "";

  return (
    <footer
      className="footer section has-bg-image text-center"
      style={{
        backgroundImage: 'url("./../../../assets/temp/images/footer-bg.jpg")',
      }}
    >
      <div className="container">
        <div className="footer-top grid-list">
          <div className="footer-brand has-before has-after">
            <a href="#" className="logo">
              <img
                src={Logo}
                width={160}
                height={50}
                loading="lazy"
                alt={CONSTANTS.RESTAURANT_NAME}
              />
            </a>
            {createFooterData(translate).map(({ content, type, url }) =>
              type === "text" ? (
                <p className="body-4" key={content}>
                  {content}
                </p>
              ) : (
                <a key={content} href={url} className="body-4 contact-link">
                  {content}
                </a>
              )
            )}
            {/* <div className="wrapper">
              <div className="separator" />
              <div className="separator" />
              <div className="separator" />
            </div> */}
            {/* <p className="title-1">Get News &amp; Offers</p>
            <p className="label-1">
              Subscribe us &amp; Get <span className="span">25% Off.</span>
            </p>
            <form className="input-wrapper">
              <div className="icon-wrapper">
                <ion-icon name="mail-outline" aria-hidden="true" />
                <input
                  type="email"
                  name="email_address"
                  placeholder="Your email"
                  autoComplete="off"
                  className="input-field"
                />
              </div>
              <button type="submit" className="btn btn-secondary">
                <span className="text text-1">Subscribe</span>
                <span className="text text-2" aria-hidden="true">
                  Subscribe
                </span>
              </button>
            </form> */}
            <div>Version {version}</div>
          </div>
          <ul className="footer-list">
            {createNav(translate).map(({ label, path }) => (
              <li key={path}>
                <Link
                  {...{
                    className: `label-2 footer-link hover-underline ${isLinkActive(
                      path
                    )}`,
                    to: path,
                  }}
                >
                  {label}
                </Link>
              </li>
            ))}
          </ul>
          <ul className="footer-list">
            {SOCIAL_MEDIA_HELPER.map(({ content, url }) => (
              <li key={url}>
                <a
                  href={url}
                  className="label-2 footer-link hover-underline"
                  target="_blank"
                >
                  {content}
                </a>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
};
