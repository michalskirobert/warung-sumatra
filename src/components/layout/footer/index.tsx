import { useAppSelector } from "@store/config";

import Logo from "@assets/images/utils/header/white_logo.png";
import { formatPhoneNumber } from "@helpers/useful-functions";
import { PhoneNumbers } from "@utils/enums";

export const Footer = () => {
  const { language } = useAppSelector(({ globalConfig }) => globalConfig);
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
                alt="grilli home"
              />
            </a>
            <address className="body-4">Poznań, xxx-xx</address>
            <a href="mailto:booking@grilli.com" className="body-4 contact-link">
              rezerwacja@warungsumatra.pl
            </a>
            <a href="tel:+88123123456" className="body-4 contact-link">
              Booking Request : {formatPhoneNumber(PhoneNumbers.Contact)}
            </a>
            <p className="body-4">Open : 09:00 am - 01:00 pm</p>
            <div className="wrapper">
              <div className="separator" />
              <div className="separator" />
              <div className="separator" />
            </div>
            <p className="title-1">Get News &amp; Offers</p>
            <p className="label-1">
              Subscribe us &amp; Get <span className="span">25% Off.</span>
            </p>
            <form className="input-wrapper">
              <div className="icon-wrapper">
                {/* <ion-icon name="mail-outline" aria-hidden="true" /> */}
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
            </form>
          </div>
          <ul className="footer-list">
            <li>
              <a href="#" className="label-2 footer-link hover-underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className="label-2 footer-link hover-underline">
                Menus
              </a>
            </li>
            <li>
              <a href="#" className="label-2 footer-link hover-underline">
                About Us
              </a>
            </li>
            <li>
              <a href="#" className="label-2 footer-link hover-underline">
                Our Chefs
              </a>
            </li>
            <li>
              <a href="#" className="label-2 footer-link hover-underline">
                Contact
              </a>
            </li>
          </ul>
          <ul className="footer-list">
            <li>
              <a href="#" className="label-2 footer-link hover-underline">
                Facebook
              </a>
            </li>
            <li>
              <a href="#" className="label-2 footer-link hover-underline">
                Instagram
              </a>
            </li>
            <li>
              <a href="#" className="label-2 footer-link hover-underline">
                Twitter
              </a>
            </li>
            <li>
              <a href="#" className="label-2 footer-link hover-underline">
                Youtube
              </a>
            </li>
            <li>
              <a href="#" className="label-2 footer-link hover-underline">
                Google Map
              </a>
            </li>
          </ul>
        </div>
      </div>
    </footer>
  );
};
