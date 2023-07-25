import { FlagIcon } from "react-flag-kit";

import { HoverSection, StyledButton } from "./styles";
import { setIsLangOpen } from "@store/reducers/layout";

import { LANGUAGE_HELPER } from "./utils";
import { setLanguage } from "@store/reducers/global-config";
import { useLanguageChoicerService } from "./service";

export const ChooseLanguage = () => {
  const {
    currentLanguage,
    dispatch,
    isLangOpen,
    language,
    parseLanguage,
    i18n,
  } = useLanguageChoicerService();

  return (
    <div>
      <StyledButton
        {...{
          onClick: () => dispatch(setIsLangOpen(!isLangOpen)),
        }}
      >
        <FlagIcon {...{ code: currentLanguage, size: 25 }} />
      </StyledButton>
      {isLangOpen && (
        <HoverSection>
          {LANGUAGE_HELPER.filter(({ value }) => value !== language.value).map(
            ({ label, value }) => (
              <StyledButton
                onClick={() => {
                  dispatch(setLanguage({ label, value }));
                  i18n.changeLanguage(value);
                  dispatch(setIsLangOpen(false));
                }}
              >
                <FlagIcon {...{ code: parseLanguage(value), size: 25 }} />
              </StyledButton>
            )
          )}
        </HoverSection>
      )}
    </div>
  );
};
