import { Control, useController } from "react-hook-form";
import { ContactFormData } from "../types";
import { Feedback } from "./Feedback";

interface Props extends React.TextareaHTMLAttributes<HTMLTextAreaElement> {
  control: Control<ContactFormData>;
  name: keyof ContactFormData;
  label: string;
}

export const Textarea = ({ control, name, label, ...props }: Props) => {
  const {
    field,
    fieldState: { invalid, error },
  } = useController({ name, control });

  return (
    <div>
      <label className="block text-stone-800 font-semibold mb-2" htmlFor={name}>
        {label}
      </label>
      <textarea
        {...field}
        {...props}
        id={name}
        aria-label={`${name}-input`}
        className={`w-full p-4 border ${
          invalid ? "border-red-800" : "border-stone-300"
        } rounded-lg focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all ${
          props.className
        } ${props.disabled ? "opacity-50 cursor-not-allowed" : ""}`}
      />
      <Feedback message={error?.message} />
    </div>
  );
};
