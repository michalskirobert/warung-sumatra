import { MobileNav } from "./mobile";
import { StandardNav } from "./standard";

export const Nav = ({
  isMobile,
  isLinkActive,
  menuContent,
  dispatch,
  language,
  isAdmin,
  buttonsHandler,
}: any) => {
  if (isMobile) {
    return (
      <MobileNav
        {...{
          isLinkActive,
          menuContent,
          dispatch,
          language,
          isAdmin,
          buttonsHandler,
        }}
      />
    );
  }

  return (
    <StandardNav
      {...{
        isLinkActive,
        menuContent,
        dispatch,
        language,
        isAdmin,
        buttonsHandler,
      }}
    />
  );
};
