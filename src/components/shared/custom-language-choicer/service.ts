import { useAppDispatch, useAppSelector } from "@store/config";
import { parseLanguage } from "./utils";
import { useTranslation } from "react-i18next";

export const useLanguageChoicerService = () => {
  const { i18n } = useTranslation();

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
    i18n,
  };
};
