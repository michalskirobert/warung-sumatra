import { CustomButton } from "./Button";
import { Iconbutton } from "./IconButton";
import { OutlinedButton } from "./Outlined";

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  kind?: "button" | "link";
  variant?: "button" | "outlined" | "icon-button";
  color?: "primary" | "secondary" | "dark";
  href?: string;
  content?: string;
  icon?: React.ReactNode;
  isLoading?: boolean;
}

export const ButtonDetail = ({ variant, ...props }: ButtonProps) => {
  if (variant === "outlined") return <OutlinedButton {...props} />;
  if (variant === "icon-button") return <Iconbutton {...props} />;
  else return <CustomButton {...props} />;
};
