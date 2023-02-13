import React from "react";

import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";
import { LANGUAGE_HELPER, STYLED_SELECT } from "./utils";
import { useHeaderService } from "./service";

import Select from "react-select";

import * as C from "@utils/constants";

export const Header = () => {
  const { menuColor, isLinkActive, menuContent } = useHeaderService();
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
                <Nav.Link
                  key={path}
                  {...{ href: path, active: isLinkActive(path) }}
                >
                  {label}
                </Nav.Link>
              ))}
            </Nav>
            <Nav>
              <Select
                {...{
                  styles: STYLED_SELECT,
                  options: LANGUAGE_HELPER,
                  defaultValue: LANGUAGE_HELPER[0],
                }}
              />
            </Nav>
          </Offcanvas.Body>
        </Navbar.Offcanvas>
      </Container>
    </Navbar>
  );
};
