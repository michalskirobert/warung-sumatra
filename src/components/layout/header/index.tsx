import { useHeaderService } from "./service";

import { Img } from "./styles";

import { Nav } from "./nav";

import logo from "@assets/images/utils/header/white_logo.png";

export const Header = () => {
  const {
    isLinkActive,
    menuContent,
    language,
    isAdmin,
    buttonsHandler,
    isMobile,
  } = useHeaderService();

  return (
    <header>
      <Img {...{ src: logo, width: 60 }} />
      <Nav
        {...{
          isMobile,
          isLinkActive,
          menuContent,
          language,
          isAdmin,
          buttonsHandler,
        }}
      />
    </header>
  );
};
