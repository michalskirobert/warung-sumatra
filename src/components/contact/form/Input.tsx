import { Control, useController } from "react-hook-form";
import { ContactFormData } from "../types";
import { Feedback } from "./Feedback";

interface Props extends React.HTMLAttributes<HTMLInputElement> {
  control: Control<ContactFormData>;
  name: keyof ContactFormData;
  label: string;
}

export const Input = ({ control, name, label, ...props }: Props) => {
  const { field, fieldState } = useController({ name, control });

  return (
    <div>
      <label className="block text-stone-800 font-semibold mb-2">{label}</label>
      <input
        {...field}
        {...props}
        className={`w-full p-4 border border-stone-300 rounded-lg focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all ${props.className}`}
      />
      <Feedback message={fieldState.error?.message} />
    </div>
  );
};
