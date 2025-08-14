import { ButtonProps } from ".";

export const CustomButton = ({
  content,
  ...restProps
}: Omit<ButtonProps, "variant">) => {
  return (
    <button
      {...restProps}
      className="w-full bg-amber-600 hover:bg-amber-700 text-white py-4 rounded-lg font-semibold transition-colors shadow-lg hover:shadow-xl"
    >
      {content}
    </button>
  );
};
