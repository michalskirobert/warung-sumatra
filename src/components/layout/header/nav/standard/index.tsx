import { CustomChoicer } from "@components/shared/custom-choicer";

import { LANGUAGE_HELPER } from "../../utils";
import { setLanguage } from "@store/actions/global-config";
import { NGlobalConfig } from "@namespace/global-config";
import {
  LanguageContainer,
  NavContainer,
  StyledButton,
  StyledLink,
} from "./styles";
import { NLayout } from "@namespace/layout";
import { useStandardNavService } from "./service";

export const StandardNav = ({
  isLinkActive,
  menuContent,
  language,
  buttonsHandler,
}: NLayout.TStandardNav) => {
  const { dispatch } = useStandardNavService();
  return (
    <NavContainer>
      <ul>
        {menuContent.map(
          ({ label, path, isBlank, action, isUniqueLink }: any) => (
            <li>
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
          )
        )}
      </ul>
      <LanguageContainer>
        <CustomChoicer
          {...{
            value: language.value,
            options: LANGUAGE_HELPER,
            onEvent: (value) =>
              dispatch(setLanguage(value as NGlobalConfig.TLanguage)),
          }}
        />
      </LanguageContainer>
    </NavContainer>
  );
};
