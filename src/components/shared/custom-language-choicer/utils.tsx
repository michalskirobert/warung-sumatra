import { NGlobalConfig } from "@namespace/index";

export const LANGUAGE_HELPER: readonly NGlobalConfig.TLanguage[] =
  Object.freeze([
    { label: "Polski", value: "pl" },
    { label: "Bahasa", value: "bh" },
    { label: "English", value: "eng" },
  ]);

export const parseLanguage = (lang: NGlobalConfig.TLangCode) => {
  switch (lang) {
    case "pl":
      return "PL";
    case "bh":
      return "ID";
    case "eng":
      return "GB";
  }
};
