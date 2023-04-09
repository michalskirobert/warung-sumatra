import { NLayout } from "@namespace/layout";
import { MobileNav } from "./mobile";
import { StandardNav } from "./standard";

export const Nav = ({
  isMobile,
  isLinkActive,
  menuContent,
  language,
  isAdmin,
  buttonsHandler,
}: NLayout.TNavProps) => {
  if (isMobile) {
    return (
      <MobileNav
        {...{
          isLinkActive,
          menuContent,
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
        language,
        isAdmin,
        buttonsHandler,
      }}
    />
  );
};
