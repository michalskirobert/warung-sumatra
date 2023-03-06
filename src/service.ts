import { useEffect } from "react";

import { useDetectBrowserLanguage } from "@helpers/use-hooks";
import { useAppDispatch, useAppSelector } from "@store/config";
import { setLanguage } from "@store/actions/global-config";
import { NGlobalConfig } from "./typings";
import { getCollection } from "./firebase";
import { NMenu } from "@namespace/menu";
import { setMenu } from "@store/actions/menu";

export const useAppService = () => {
  const { browserLanguage } = useDetectBrowserLanguage();
  const { language } = useAppSelector(({ globalConfig }) => globalConfig);

  const dispatch = useAppDispatch();

  const checkPathname = (pathname: string) =>
    window.location.pathname.includes(`/${pathname}`);

  const isAdmingPage = checkPathname("admin");

  const getInitData = async (language: NGlobalConfig.TLangCode) => {
    if (isAdmingPage) return;

    try {
      const resp = await getCollection(`${language}/KjXEgaCv4DaqUFj0VKJV/menu`);
      let data: any[] = [];

      resp.docs.forEach((doc) => data.push(doc.data()));

      dispatch(setMenu(data));
    } catch (error) {}
  };

  useEffect(() => {
    if (!browserLanguage || language.value === browserLanguage.value) return;
    dispatch(setLanguage(browserLanguage));
  }, [browserLanguage]);

  useEffect(() => {
    if (!language) return;

    getInitData(language.value);
  }, [language]);

  return { isAdmingPage, checkPathname };
};
