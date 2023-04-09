import { CustomChoicer } from "@components/shared/custom-choicer";
import { StyledButton, StyledLink } from "../../styles";
import { LANGUAGE_HELPER } from "../../utils";
import { setLanguage } from "@store/actions/global-config";
import { NGlobalConfig } from "@namespace/global-config";
import { useMobileNavService } from "./service";
import { NLayout } from "@namespace/layout";
import { Hamburger } from "./hamburger";
import { NavContainer, LinksContainer } from "./styles";

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
        <CustomChoicer
          {...{
            value: language.value,
            options: LANGUAGE_HELPER,
            onEvent: (value) =>
              dispatch(setLanguage(value as NGlobalConfig.TLanguage)),
          }}
        />
      </LinksContainer>
    </NavContainer>
  );
};
