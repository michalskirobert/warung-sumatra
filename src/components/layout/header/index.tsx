import React from "react";

import Select, { SingleValue } from "react-select";
import { Link } from "react-router-dom";

import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";

import { LANGUAGE_HELPER, STYLED_SELECT } from "./utils";
import { useHeaderService } from "./service";
import { setLanguage } from "@store/actions/global-config";
import { NGlobalConfig } from "src/typings/global-config";

import * as C from "@utils/constants";

type TOption = SingleValue<{
  label: NGlobalConfig.TLanguageLabels | any;
  value: NGlobalConfig.TLangCode | any;
}>;

export const Header = () => {
  const { menuColor, isLinkActive, menuContent, dispatch, language, isAdmin } =
    useHeaderService();
  return (
    <Navbar
      {...{
        bg: menuColor,
        variant: "dark",
        expand: "xxl",
        fixed: isAdmin ? undefined : "top",
      }}
    >
      <Container fluid>
        <Navbar.Brand>
          {isAdmin
            ? `${C.ADMIN_PAGE} - ${C.RESTAURANT_NAME}`
            : C.RESTAURANT_NAME}
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
                <Select
                  {...{
                    styles: STYLED_SELECT,
                    options: LANGUAGE_HELPER,
                    defaultValue: LANGUAGE_HELPER[0],
                    value: language,
                    onChange: (option: TOption) => {
                      if (!option?.value) return;

                      dispatch(setLanguage(option));
                    },
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
