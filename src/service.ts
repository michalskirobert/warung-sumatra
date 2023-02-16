import { useEffect } from "react";

import { useDetectBrowserLanguage } from "@helpers/use-hooks";
import { useAppDispatch, useAppSelector } from "@store/config";
import { setLanguage } from "@store/actions/global-config";

export const useAppService = () => {
  const { browserLanguage } = useDetectBrowserLanguage();
  const { language } = useAppSelector(({ globalConfig }) => globalConfig);

  const dispatch = useAppDispatch();

  const checkPathname = (pathname: string) =>
    window.location.pathname.includes(`/${pathname}`);

  const isAdmingPage = checkPathname("admin");

  useEffect(() => {
    if (!browserLanguage || language.value === browserLanguage.value) return;

    dispatch(setLanguage(browserLanguage));
  }, [browserLanguage, language]);

  return { isAdmingPage, checkPathname };
};
