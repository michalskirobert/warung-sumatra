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
  const { menuColor, isLinkActive, menuContent, dispatch, language } =
    useHeaderService();
  return (
    <Navbar fixed="top" bg={menuColor} variant="dark" expand={"xxl"}>
      <Container fluid>
        <Navbar.Brand href={C.DASHBOARD_ROUTE}>
          {C.RESTAURANT_NAME}
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
              {menuContent.map(({ label, path }) => (
                <Link
                  key={label}
                  {...{ to: path, className: `nav-link ${isLinkActive(path)}` }}
                >
                  {label}
                </Link>
              ))}
            </Nav>
            <Nav>
              <Select
                {...{
                  styles: STYLED_SELECT,
                  options: LANGUAGE_HELPER,
                  defaultValue: LANGUAGE_HELPER[0],
                  value: language,
                  onChange: (option: TOption) =>
                    dispatch(
                      setLanguage(option || { label: "Polski", value: "pl" })
                    ),
                }}
              />
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
