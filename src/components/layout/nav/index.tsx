"use client";

import { useState, useEffect } from "react";

import { Link } from "@i18n/navigation";

import clsx from "clsx";

import { useLocale, useTranslations } from "next-intl";
import Image from "next/image";

import logo from "@public/logo/white_logo.png";

import { usePathname, useRouter } from "next/navigation";
import { useRevealOnScroll } from "@hooks/useRevealOnScroll";
import {
  getPreferredBrowserLocale,
  getStoredLocale,
  storeLocale,
} from "@src/utils/language";

export default function Navbar() {
  const [scrolled, setScrolled] = useState<boolean>(false);
  const [mobileOpen, setMobileOpen] = useState<boolean>(false);

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

  useEffect(() => {
    if (mobileOpen) return;

    const onScroll = (): void => setScrolled(window.scrollY > 100);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [mobileOpen]);

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

  return (
    <nav className={navClass}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <Image src={logo} height={50} width={50} alt="Warung Sumatra" />
            <span className="text-2xl font-heading font-bold text-amber-100">
              Warung Sumatra
            </span>
          </div>

          <div className="hidden lg:flex items-center space-x-8">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="text-amber-100 hover:text-amber-300 transition-colors font-medium"
              >
                {l.label}
              </Link>
            ))}
            <div className="bg-stone-800/50 rounded-lg p-2 backdrop-blur-sm">
              <select
                aria-label="language"
                value={locale}
                onChange={(e) => onChangeLanguage(e.target.value)}
                className="bg-transparent text-amber-100 text-sm border-none outline-none cursor-pointer"
              >
                <option value="pl" className="bg-stone-800">
                  🇵🇱 Polski
                </option>
                <option value="en" className="bg-stone-800">
                  🇬🇧 English
                </option>
                <option value="id" className="bg-stone-800">
                  🇮🇩 Bahasa
                </option>
              </select>
            </div>
          </div>

          <button
            aria-label="menu"
            onClick={() => setMobileOpen(true)}
            className="lg:hidden text-amber-100 text-2xl"
          >
            ☰
          </button>
        </div>
      </div>

      {mobileOpen && (
        <div
          role="dialog"
          aria-modal="true"
          className="fixed inset-0 z-50"
          onClick={(e) => {
            if (e.target === e.currentTarget) setMobileOpen(false);
          }}
        >
          <div className="absolute inset-0 batik-pattern bg-stone-800/95 backdrop-blur-sm"></div>
          <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
            <button
              aria-label="close"
              onClick={() => setMobileOpen(false)}
              className="absolute top-8 right-8 text-amber-100 text-3xl"
            >
              ×
            </button>

            <div className="text-4xl font-heading font-bold text-amber-100 mb-12">
              Warung Sumatra
            </div>

            <div className="flex flex-col items-center space-y-8 text-center">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  onClick={() => setMobileOpen(false)}
                  className="text-2xl text-amber-100 hover:text-amber-300 transition-colors font-medium"
                >
                  {l.label}
                </a>
              ))}
            </div>

            <div className="mt-12 bg-stone-700/50 rounded-lg p-4 backdrop-blur-sm">
              <select
                aria-label="language"
                value={locale}
                onChange={(e) => onChangeLanguage(e.target.value)}
                className="bg-transparent text-amber-100 text-lg border-none outline-none cursor-pointer"
              >
                <option value="pl" className="bg-stone-800">
                  🇵🇱 Polski
                </option>
                <option value="en" className="bg-stone-800">
                  🇬🇧 English
                </option>
                <option value="id" className="bg-stone-800">
                  🇮🇩 Bahasa
                </option>
              </select>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}
