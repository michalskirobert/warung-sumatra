import { Spinner } from "@utils/icons";
import { ButtonProps } from ".";

export const Iconbutton = ({
  icon,
  isLoading,
  ...restProps
}: Omit<ButtonProps, "variant" | "content" | "color">) => {
  return (
    <button
      {...restProps}
      className="bg-none border-0 transition-transform transition-300 hover:scale-120 cursor-pointer"
      disabled={isLoading}
    >
      {isLoading ? <Spinner height={35} width={35} /> : icon}
    </button>
  );
};
