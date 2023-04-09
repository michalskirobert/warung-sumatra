import { GiHamburgerMenu } from "react-icons/gi";
import { CgClose } from "react-icons/cg";
import { WEBSITE_BASE_COLOURS } from "@utils/constants";
import { Sizes } from "@utils/enums";
import { Icon } from "./styles";

interface IHamburgerProps {
  isOpen: boolean;
  toggle: () => void;
}

export const Hamburger = ({ isOpen, toggle }: IHamburgerProps) => {
  const styles: React.CSSProperties = {
    color: isOpen
      ? WEBSITE_BASE_COLOURS.BLUE
      : WEBSITE_BASE_COLOURS.LIGHT_YELLOW,
    height: Sizes.large,
    width: Sizes.large,
  };

  if (isOpen) {
    return (
      <Icon onClick={toggle}>
        <CgClose {...{ style: { ...styles } }} />
      </Icon>
    );
  }

  return (
    <Icon onClick={toggle}>
      <GiHamburgerMenu {...{ style: { ...styles } }} />
    </Icon>
  );
};
