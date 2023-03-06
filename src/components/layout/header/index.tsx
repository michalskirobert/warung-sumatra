import React from "react";

import Select, { SingleValue } from "react-select";
import { Link } from "react-router-dom";

import { Navbar, Container, Nav, Offcanvas, Image } from "react-bootstrap";

import { LANGUAGE_HELPER, STYLED_SELECT } from "./utils";
import { useHeaderService } from "./service";
import { setLanguage } from "@store/actions/global-config";
import { NGlobalConfig } from "src/typings/global-config";

import { ContactSection, Img, Info, Phone } from "./styles";

import logo from "@assets/images/utils/header/white_logo.png";

import * as C from "@utils/constants";
import { PhoneNumbers } from "@utils/enums";
import { formatPhoneNumber } from "@helpers/useful-functions";
import { CustomChoicer } from "@components/shared/custom-choicer";
import { NCommonTypes } from "@namespace/commonTypes";

type TOption = SingleValue<{
  label: NGlobalConfig.TLanguageLabels;
  value: NGlobalConfig.TLangCode;
}>;

export const Header = () => {
  const {
    menuColor,
    isLinkActive,
    menuContent,
    dispatch,
    language,
    isAdmin,
    isMenuSticky,
  } = useHeaderService();
  return (
    <Navbar
      {...{
        bg: menuColor,
        variant: "dark",
        expand: "xxl",
        ...isMenuSticky,
      }}
    >
      <Container fluid>
        <Navbar.Brand>
          {isAdmin ? C.ADMIN_PAGE : <Img {...{ src: logo, width: 60 }} />}
        </Navbar.Brand>

        <Navbar.Toggle aria-controls={`offcanvasNavbar-expand-xxl`} />
        <Navbar.Offcanvas
          id={`offcanvasNavbar-expand-xxl`}
          aria-labelledby={`offcanvasNavbarLabel-expand-xxl`}
          placement="end"
        >
          <Offcanvas.Header closeButton>
            <Offcanvas.Title id={`offcanvasNavbarLabel-expand-xxl`}>
              {C.WELCOME}
            </Offcanvas.Title>
          </Offcanvas.Header>
          <Offcanvas.Body>
            <Nav className="me-auto">
              {menuContent.map(({ label, path, isBlank }) => (
                <Link
                  key={label}
                  {...{
                    to: path,
                    className: `nav-link ${isLinkActive(path)}`,
                    target: isBlank ? "_blank" : "_self",
                  }}
                >
                  {label}
                </Link>
              ))}
            </Nav>
            <Nav>
              {!isAdmin && (
                <CustomChoicer
                  {...{
                    value: language.value,
                    options: LANGUAGE_HELPER,
                    onEvent: (value) =>
                      dispatch(setLanguage(value as NGlobalConfig.TLanguage)),
                  }}
                />
              )}
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
