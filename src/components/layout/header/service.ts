import { useAppDispatch, useAppSelector } from "@store/config";
import { useLocation } from "react-router-dom";

import { useDetectDevice } from "@helpers/use-hooks";

import { checkPathname } from "@helpers/useful-functions/check-pathname";

import {
  setActiveTopbar,
  setHideTopbar,
  setIsMenuOpen,
} from "@store/reducers/layout";
import { useEffect, useMemo, useState } from "react";
import { createHeaderData } from "./utils";

import * as C from "@utils/constants";
import { useTranslation } from "react-i18next";

export const useHeaderService = () => {
  const [translate] = useTranslation("common");
  const { isMobile } = useDetectDevice();
  const { language } = useAppSelector(({ globalConfig }) => globalConfig);
  const { isMenuOpen, activeTopbar, topbarHide } = useAppSelector(
    ({ layout }) => layout
  );

  const [lastScrollPosition, setLastScrollPosition] = useState<number>(0);

  const dispatch = useAppDispatch();

  const toggleMenu = () => {
    dispatch(setIsMenuOpen(!isMenuOpen));
  };

  const headerData = useMemo(() => {
    return createHeaderData(translate);
  }, [language]);

  const pathname = useLocation().pathname;
  const isAdmin = checkPathname(C.ADMIN_ROUTE);

  const isLinkActive = (path: string) => (path === pathname ? "active" : "");

  const hideHeader = function () {
    const currentScrollPosition: number = window.scrollY;

    const isScrollBottom = lastScrollPosition < currentScrollPosition;

    if (isScrollBottom) {
      dispatch(setHideTopbar("hide"));
    } else {
      dispatch(setHideTopbar(""));
    }

    setLastScrollPosition(window.scrollY);
  };

  const handleScroll = () =>
    window.addEventListener("scroll", function () {
      if (window.scrollY >= 50) {
        dispatch(setActiveTopbar("active"));
        hideHeader();
      } else {
        dispatch(setActiveTopbar(""));
      }
    });

  useEffect(() => {
    if (isMobile && !!isMenuOpen) return;

    const timeout = setTimeout(() => handleScroll(), 50);

    return () => clearTimeout(timeout);
  });

  return {
    isLinkActive,
    language,
    dispatch,
    isAdmin,
    isMobile,
    toggleMenu,
    isMenuOpen,
    headerData,
    activeTopbar,
    topbarHide,
  };
};
