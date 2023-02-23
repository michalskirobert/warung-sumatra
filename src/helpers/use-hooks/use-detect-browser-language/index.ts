import { LANGUAGE_HELPER } from "@components/layout/header/utils";
import { useEffect, useState } from "react";
import { NGlobalConfig } from "src/typings/global-config";

export const useDetectBrowserLanguage = () => {
  const [browserLanguage, setBrowserLanguage] =
    useState<NGlobalConfig.TLanguage>({
      label: "Polski",
      value: "pl",
    });

  const detectLanguageFullName = (
    lang: string
  ): NGlobalConfig.TLanguageLabels => {
    switch (lang) {
      case "eng":
      case "gb":
      case "en":
      case "en-GB":
      case "en-US":
        return "English";
      case "bh":
      case "id":
        return "Bahasa";
      default:
        return "Polski";
    }
  };

  const detectLanguage = () => {
    const language = navigator.language as NGlobalConfig.TLangCode;
    const userLanguage = {
      label: detectLanguageFullName(language) || "Polski",
      value:
        LANGUAGE_HELPER.find(({ value }) => value === language)?.value || "pl",
    };

    setBrowserLanguage(userLanguage);
  };

  useEffect(() => {
    detectLanguage();
  }, []);

  return { browserLanguage };
};
