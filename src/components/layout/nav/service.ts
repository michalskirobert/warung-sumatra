"use client";

import { useState, useEffect } from "react";

import clsx from "clsx";

import { useLocale, useTranslations } from "next-intl";

import { usePathname, useRouter } from "next/navigation";
import { useRevealOnScroll } from "@hooks/useRevealOnScroll";
import {
  getPreferredBrowserLocale,
  getStoredLocale,
  storeLocale,
} from "@utils/language";
import { throttle } from "@utils/throttle";

export const useNavService = () => {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);
  const [isAnimating, setIsAnimating] = useState(false);

  const t = useTranslations();
  const locale = useLocale() as Locale;
  const router = useRouter();
  const pathname = usePathname();

  useRevealOnScroll(".fade-in, .slide-in-left, .slide-in-right");

  useEffect(() => {
    const stored = getStoredLocale();
    if (!stored) {
      const browser = getPreferredBrowserLocale();
      storeLocale(browser || locale);
    }
  }, [locale]);

  const onChangeLanguage = (newLocale: string) => {
    if (newLocale === locale) return;
    storeLocale(newLocale as Locale);
    router.replace(`/${newLocale}${pathname.replace(/^\/(pl|en|id)/, "")}`);
  };

  const openMenu = () => {
    setIsAnimating(true);
    setMobileOpen(true);
  };

  const closeMenu = () => {
    setIsAnimating(true);
    setMobileOpen(false);
    setTimeout(() => setIsAnimating(false), 300); // czas trwania animacji w ms
  };

  const navClass = clsx(
    "fixed top-0 w-full z-40 transition-all duration-300 py-4",
    scrolled && "navbar-scroll"
  );

  const links = [
    { href: "/#home", label: t("nav-home") },
    { href: "/#about", label: t("nav-about") },
    { href: "/#menu", label: t("nav-menu") },
    { href: "/#food", label: t("nav-food") },
    { href: "/#contact", label: t("nav-contact") },
  ];

  useEffect(() => {
    if (mobileOpen) return;

    let ticking = false;
    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(() => {
          setScrolled(window.scrollY > 100);
          ticking = false;
        });
        ticking = true;
      }
    };

    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileOpen]);

  useEffect(() => {
    const originalOverflow = document.body.style.overflow;

    if (mobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = originalOverflow;
    }
    return () => {
      document.body.style.overflow = originalOverflow;
    };
  }, [mobileOpen]);

  return {
    navClass,
    links,
    mobileOpen,
    isAnimating,
    locale,
    openMenu,
    closeMenu,
    onChangeLanguage,
  };
};
