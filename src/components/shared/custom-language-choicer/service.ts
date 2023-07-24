import { useAppDispatch, useAppSelector } from "@store/config";
import { parseLanguage } from "./utils";

export const useLanguageChoicerService = () => {
  const { isLangOpen } = useAppSelector(({ layout }) => layout);
  const { language } = useAppSelector(({ globalConfig }) => globalConfig);

  const currentLanguage: "PL" | "ID" | "GB" = parseLanguage(language.value);

  const dispatch = useAppDispatch();

  return {
    isLangOpen,
    language,
    dispatch,
    currentLanguage,
    parseLanguage,
  };
};
