import { AiFillCloseCircle, AiOutlineClose } from "react-icons/ai";

interface ICloseMenuButton {
  toggleMenu: () => void;
}

export const CloseMenuButton = ({ toggleMenu }: ICloseMenuButton) => {
  return (
    <button
      className="close-btn"
      aria-label="close menu"
      data-nav-toggler
      onClick={toggleMenu}
    >
      <AiOutlineClose />
    </button>
  );
};
