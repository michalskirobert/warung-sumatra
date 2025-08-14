import { ButtonProps } from ".";

export const Iconbutton = ({
  icon,
  ...restProps
}: Omit<ButtonProps, "variant" | "content" | "color">) => {
  return (
    <button
      {...restProps}
      className="bg-none border-0 transition-transform transition-300 hover:scale-120 cursor-pointer"
    >
      {icon}
    </button>
  );
};
