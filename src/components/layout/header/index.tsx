import { Navbar, Container, Nav, Offcanvas } from "react-bootstrap";

import { LANGUAGE_HELPER } from "./utils";
import { useHeaderService } from "./service";
import { setLanguage } from "@store/actions/global-config";
import { NGlobalConfig } from "src/typings/global-config";

import { Img, StyledButton, StyledLink } from "./styles";

import { CustomChoicer } from "@components/shared/custom-choicer";

import logo from "@assets/images/utils/header/white_logo.png";

import * as C from "@utils/constants";

export const Header = () => {
  const {
    isLinkActive,
    menuContent,
    dispatch,
    language,
    isAdmin,
    buttonsHandler,
  } = useHeaderService();
  return (
    <header>
      <Navbar {...{ bg: "dark", variant: "dark", expand: "xxl", fixed: "top" }}>
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
                {menuContent.map(
                  ({ label, path, isBlank, action, isUniqueLink }) =>
                    !!path ? (
                      <StyledLink
                        key={label}
                        {...{
                          to: path,
                          className: `nav-link ${isLinkActive(path)}`,
                          target: isBlank ? "_blank" : "_self",
                          isUniqueLink,
                        }}
                      >
                        {label}
                      </StyledLink>
                    ) : (
                      <StyledButton
                        {...{
                          className: "nav-link",
                          type: "button",
                          onClick: () => buttonsHandler(action),
                        }}
                      >
                        {label}
                      </StyledButton>
                    )
                )}
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
    </header>
  );
};
