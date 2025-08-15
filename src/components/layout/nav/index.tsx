"use client";

import { Link } from "@i18n/navigation";

import clsx from "clsx";

import Image from "next/image";

import whiteLogo from "@public/logo/white_logo.png";
import redLogo from "@public/logo/red_logo_comprassed.png";

import { useNavService } from "./service";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/16/solid";
import { Language } from "./Language";

export default function Navbar() {
  const {
    navClass,
    links,
    mobileOpen,
    isAnimating,
    locale,
    openMenu,
    closeMenu,
    onChangeLanguage,
  } = useNavService();

  return (
    <nav className={navClass}>
      <div className="container mx-auto px-4">
        <div className="flex justify-between items-center">
          <div className="flex gap-2 items-center">
            <Image src={redLogo} height={50} width={50} alt="Warung Sumatra" />
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
            <Language locale={locale} onChangeLanguage={onChangeLanguage} />
          </div>

          <button
            aria-label="menu"
            onClick={openMenu}
            className="lg:hidden text-amber-100 text-2xl"
          >
            <Bars3Icon className="h-6 w-6" />
          </button>
        </div>
      </div>

      <div
        role="dialog"
        aria-modal="true"
        className={clsx(
          "fixed inset-0 z-50 transition-transform duration-300 ease-in-out",
          mobileOpen ? "translate-x-0" : "translate-x-full",
          !isAnimating && !mobileOpen && "hidden"
        )}
        onClick={(e) => {
          if (e.target === e.currentTarget) closeMenu();
        }}
      >
        <div className="absolute inset-0 batik-pattern bg-stone-800"></div>
        <div className="relative z-10 flex flex-col items-center justify-center min-h-screen p-8">
          <button
            aria-label="close"
            onClick={closeMenu}
            className="absolute top-8 right-8 text-amber-100 text-3xl"
          >
            <XMarkIcon className="h-8 w-8" />
          </button>

          <Image
            src={whiteLogo}
            alt="Warung Sumatra"
            className="mb-5"
            height={150}
            width={150}
          />

          <div className="flex flex-col items-center space-y-8 text-center">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                onClick={closeMenu}
                className="text-2xl text-amber-100 hover:text-amber-300 transition-colors font-medium"
              >
                {l.label}
              </Link>
            ))}
          </div>
          <Language
            locale={locale}
            className="mt-12"
            onChangeLanguage={onChangeLanguage}
          />
        </div>
      </div>
    </nav>
  );
}
