import { useHeaderService } from "./service";

import { Topbar } from "./tolbar";

import { Nav } from "./nav";

export const Header = () => {
  const {
    isMenuOpen,
    toggleMenu,
    headerData,
    activeTopbar,
    topbarHide,
    isLinkActive,
  } = useHeaderService();

  return (
    <>
      <Topbar
        {...{
          dataSource: headerData.topbar,
        }}
      />

      <header className={`header ${activeTopbar} ${topbarHide}`} data-header>
        <div className="container">
          <Nav
            {...{
              isMenuOpen,
              toggleMenu,
              isLinkActive,
            }}
          />
        </div>
      </header>
    </>
  );
};
