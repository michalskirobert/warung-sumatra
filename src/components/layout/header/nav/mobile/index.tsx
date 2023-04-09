import { CustomChoicer } from "@components/shared/custom-choicer";
import { Img } from "../../styles";
import { LANGUAGE_HELPER } from "../../utils";
import { setLanguage } from "@store/actions/global-config";
import { NGlobalConfig } from "@namespace/global-config";
import { useMobileNavService } from "./service";
import { NLayout } from "@namespace/layout";
import { Hamburger } from "./hamburger";
import {
  NavContainer,
  LinksContainer,
  LogoContainer,
  LanguageContainer,
  StyledLink,
  StyledButton,
} from "./styles";

import logo from "@assets/images/utils/header/red_logo.png";

export const MobileNav = ({
  isLinkActive,
  menuContent,
  language,
  buttonsHandler,
}: NLayout.TMobileNavProps) => {
  const { isOpen, toggle, dispatch } = useMobileNavService();

  return (
    <NavContainer>
      <Hamburger {...{ isOpen, toggle }} />
      <LinksContainer {...{ isOpen }}>
        <ul>
          <LogoContainer>
            <Img src={logo} alt="Warung Sumatra" style={{ width: "60%" }} />
          </LogoContainer>
          {menuContent.map(({ label, path, isBlank, action, isUniqueLink }) => (
            <li key={path}>
              {!!path ? (
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
              )}
            </li>
          ))}
        </ul>
        <LanguageContainer>
          <CustomChoicer
            {...{
              isMobile: true,
              value: language.value,
              options: LANGUAGE_HELPER,
              onEvent: (value) =>
                dispatch(setLanguage(value as NGlobalConfig.TLanguage)),
            }}
          />
        </LanguageContainer>
      </LinksContainer>
    </NavContainer>
  );
};
