import { HTMLAttributes } from "react";

interface Props {
  locale: string;
  className?: HTMLAttributes<HTMLDivElement>["className"];
  onChangeLanguage: (lang: string) => void;
}

export const Language = ({ locale, className, onChangeLanguage }: Props) => (
  <div
    className={`bg-stone-700/50 rounded-lg p-2 backdrop-blur-sm ${className}`}
  >
    <select
      aria-label="language"
      value={locale}
      onChange={(e) => onChangeLanguage(e.target.value)}
      className="bg-transparent text-amber-100 text-sm border-none outline-none cursor-pointer"
    >
      <option value="pl" className="bg-stone-800">
        🇵🇱 Polski
      </option>
      <option value="en" className="bg-stone-800">
        🇬🇧 English
      </option>
      <option value="id" className="bg-stone-800">
        🇮🇩 Bahasa
      </option>
    </select>
  </div>
);
