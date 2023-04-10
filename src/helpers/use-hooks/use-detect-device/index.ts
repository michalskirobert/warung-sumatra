import { maxScreenSizes } from "@utils/enums";
import { useMediaQuery } from "react-responsive";

interface IParseQueryProps {
  arg: "min-width" | "max-width" | "width";
  width: number;
  unit?: "px" | "rem" | "em" | "%" | "vw";
}

const parseQuery = ({ arg, width, unit }: IParseQueryProps) =>
  `(${arg}: ${width}${unit || "px"})`;

export const useDetectDevice = () => {
  const isMobile = useMediaQuery({
    query: parseQuery({ arg: "max-width", width: maxScreenSizes.mobile }),
  });

  const isTablet = useMediaQuery({
    query: parseQuery({ arg: "max-width", width: maxScreenSizes.tablet }),
  });

  const isPc = useMediaQuery({
    query: parseQuery({ arg: "min-width", width: maxScreenSizes.tablet }),
  });

  return {
    isMobile,
    isTablet,
    isPc,
  };
};
