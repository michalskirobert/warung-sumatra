import { Link } from "@src/i18n/navigation";
import { ButtonProps } from ".";
import { Spinner } from "@src/utils/icons";

export const OutlinedButton = ({
  content,
  href,
  isLoading,
  kind = "button",
}: Omit<ButtonProps, "variant">) => {
  const className = `${
    isLoading
      ? "cursor-not-allowed pointer-events-none"
      : "hover:bg-white hover:text-stone-800 transition-all duration-300"
  } border-2 border-white text-white  px-8 py-4 rounded-lg text-lg font-semibold`;

  if (kind === "link")
    return (
      <Link className={className} href={href || "#"}>
        {content}
      </Link>
    );

  return (
    <button className={className} disabled={isLoading}>
      <Spinner height={25} width={25} visibility={isLoading ? 1 : 0} />
      {content}
    </button>
  );
};
