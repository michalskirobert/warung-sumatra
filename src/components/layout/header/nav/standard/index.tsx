import { CustomChoicer } from "@components/shared/custom-choicer";
import { Img, StyledButton, StyledLink } from "../../styles";
import logo from "@assets/images/utils/header/white_logo.png";
import { LANGUAGE_HELPER } from "../../utils";
import { setLanguage } from "@store/actions/global-config";
import { NGlobalConfig } from "@namespace/global-config";

export const StandardNav = ({
  isLinkActive,
  menuContent,
  dispatch,
  language,
  isAdmin,
  buttonsHandler,
}: any) => {
  return (
    <nav className="nav-container">
      <Img {...{ src: logo, width: 60 }} />
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
    </nav>
  );
};
