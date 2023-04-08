import { LANGUAGE_HELPER } from "./utils";
import { useHeaderService } from "./service";
import { setLanguage } from "@store/actions/global-config";
import { NGlobalConfig } from "src/typings/global-config";

import { Img, StyledButton, StyledLink } from "./styles";

import { CustomChoicer } from "@components/shared/custom-choicer";

import { Nav } from "./nav";

export const Header = () => {
  const {
    isLinkActive,
    menuContent,
    dispatch,
    language,
    isAdmin,
    buttonsHandler,
    isMobile,
  } = useHeaderService();

  return (
    <header>
      <Nav
        {...{
          isMobile,
          isLinkActive,
          menuContent,
          dispatch,
          language,
          isAdmin,
          buttonsHandler,
        }}
      />
    </header>
  );
};
