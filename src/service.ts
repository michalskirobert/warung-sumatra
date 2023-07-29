import { useEffect, useState } from "react";

import { useDetectBrowserLanguage } from "@helpers/use-hooks";
import { useAppDispatch, useAppSelector } from "@store/config";
import { getFromLocalStorage } from "@helpers/useful-functions";
import { setLanguage } from "@store/reducers/global-config";

import { useTranslation } from "react-i18next";
import i18next from "i18next";

import { RESOURCES } from "@utils/translations/settings";

import _ from "lodash";

export const useAppService = () => {
  const [isAppLoading, setIsAppLoading] = useState<boolean>(true);

  const { i18n } = useTranslation();
  const { browserLanguage } = useDetectBrowserLanguage();
  const { language } = useAppSelector(({ globalConfig }) => globalConfig);

  const dispatch = useAppDispatch();

  const setParallax = () => {
    const parallaxItems = document.querySelectorAll("[data-parallax-item]");

    let x: number, y: number;

    window.addEventListener("mousemove", function (event) {
      x = (event.clientX / window.innerWidth) * 10 - 5;
      y = (event.clientY / window.innerHeight) * 10 - 5;

      x = x - x * 2;
      y = y - y * 2;

      for (let i = 0, len = parallaxItems.length; i < len; i++) {
        x =
          x * Number((parallaxItems[i] as HTMLElement).dataset?.parallaxSpeed);
        y =
          y * Number((parallaxItems[i] as HTMLElement).dataset?.parallaxSpeed);

        parallaxItems[i].setAttribute(
          "transform",
          `translate3d(${x}px, ${y}px, 0px)`
        );
      }
    });
  };

  useEffect(() => {
    window.addEventListener("load", () => setIsAppLoading(false));

    return () => window.addEventListener("load", () => setIsAppLoading(true));
  }, []);

  useEffect(() => {
    setParallax();
  });

  useEffect(() => {
    if (
      !browserLanguage ||
      language.value === browserLanguage.value ||
      !_.isEmpty(getFromLocalStorage("language"))
    )
      return;

    i18n.changeLanguage(browserLanguage.value);
    dispatch(setLanguage(browserLanguage));
  }, [browserLanguage]);

  useEffect(() => {
    i18next.init({
      interpolation: { escapeValue: false },
      lng: language.value,
      resources: RESOURCES,
    });
  }, [language.value]);

  return { isAppLoading, language };
};
