import { Link } from "@src/i18n/navigation";
import { ButtonProps } from ".";

export const OutlinedButton = ({
  content,
  href,
  kind = "button",
}: Omit<ButtonProps, "variant">) => {
  const className =
    "border-2 border-white text-white hover:bg-white hover:text-stone-800 px-8 py-4 rounded-lg text-lg font-semibold transition-all duration-300";

  if (kind === "link")
    return (
      <Link className={className} href={href || "#"}>
        {content}
      </Link>
    );

  return <button className={className}>{content}</button>;
};
