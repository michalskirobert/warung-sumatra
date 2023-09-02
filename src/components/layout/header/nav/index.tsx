import Logo from "@assets/images/utils/header/white_logo.png";
import { createNav } from "./utils";
import { Link } from "react-router-dom";
import { useAppSelector } from "@store/config";
import { CONSTANTS } from "@utils/index";
import { Hamburger } from "./hamburger";
import { BookTable } from "./book-table-button";
import { MobileInformations } from "./mobile-information";
import { CloseMenuButton } from "./close-menu";
import { useTranslation } from "react-i18next";

interface INavProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
  isLinkActive: (path: string) => "" | "active";
}

export const Nav = ({ isMenuOpen, toggleMenu, isLinkActive }: INavProps) => {
  const [translate] = useTranslation("common");

  const { language } = useAppSelector(({ globalConfig }) => globalConfig);

  return (
    <>
      <a href="#" className="logo">
        <img src={Logo} width="100" height="50" alt="" />
      </a>
      <nav className={isMenuOpen ? "navbar active" : "navbar"} data-navbar>
        <CloseMenuButton {...{ toggleMenu }} />

        <a href={CONSTANTS.DASHBOARD_ROUTE} className="logo">
          <img src={Logo} width="160" height="50" alt="Warung sumatra" />
        </a>

        <ul className="navbar-list">
          {createNav(translate).map(({ label, path }) => (
            <li key={path} className="navbar-item">
              <Link
                {...{
                  to: path,
                  className: `navbar-link hover-underline ${isLinkActive(
                    path
                  )}`,
                }}
              >
                <div className="separator"></div>
                <span className="span">{label} </span>
              </Link>
            </li>
          ))}
        </ul>

        <MobileInformations />
      </nav>
      <BookTable
        {...{
          language: language.value,
        }}
      />
      <Hamburger
        {...{
          isMenuOpen,
          toggleMenu,
        }}
      />
    </>
  );
};
