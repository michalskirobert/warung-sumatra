interface IHamburgerProps {
  isMenuOpen: boolean;
  toggleMenu: () => void;
}

export const Hamburger = ({ isMenuOpen, toggleMenu }: IHamburgerProps) => {
  return (
    <>
      <button
        className="nav-open-btn"
        aria-label="open menu"
        data-nav-toggler
        onClick={toggleMenu}
      >
        <span className="line line-1"></span>
        <span className="line line-2"></span>
        <span className="line line-3"></span>
      </button>
      <div
        className={isMenuOpen ? "overlay active" : "overlay"}
        data-nav-toggler
        data-overlay
      ></div>
    </>
  );
};
