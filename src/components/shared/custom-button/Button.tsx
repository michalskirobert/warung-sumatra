import { Spinner } from "@utils/icons";
import { ButtonProps } from ".";

export const CustomButton = ({
  content,
  isLoading,
  ...restProps
}: Omit<ButtonProps, "variant">) => {
  return (
    <button
      {...restProps}
      disabled={isLoading}
      className={`${
        isLoading
          ? "flex items-center gap-3 justify-center cursor-not-allowed bg-white text-gray-500 border-1 border-gray-300"
          : "bg-amber-600 hover:bg-amber-700 text-white hover:shadow-xl"
      } w-full py-4 rounded-lg font-semibold transition-colors shadow-lg`}
    >
      <Spinner height={25} width={25} visibility={isLoading ? 1 : 0} />
      {content}
    </button>
  );
};
