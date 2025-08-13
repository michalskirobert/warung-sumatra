"use client";

import { useEffect } from "react";
import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "next/navigation";
import {
  getPreferredBrowserLocale,
  getStoredLocale,
  storeLocale,
} from "@utils/language";
import { useRevealOnScroll } from "@hooks/useRevealOnScroll";

//Images
import food1 from "@public/foods/jedzenie.jpg";
import food2 from "@public/foods/jedzenie2.jpg";
import food3 from "@public/foods/jedzenie3.jpg";

//Components
import Navbar from "@components/Navbar";
import Hero from "@components/Hero";
import Section from "@components/Section";
import Card from "@components/Card";
import About from "@components/About";
import Gallery from "@components/Gallery";
import MenuLists from "@components/MenuLists";
import Contact from "@components/Contact";
import Footer from "@components/Footer";

export default function Page() {
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

  return (
    <>
      <Navbar locale={locale} onChangeLanguage={onChangeLanguage} />
      <main>
        <Hero t={t} />
        <Section id="about" title={t("about-title")}>
          <About t={t} />
        </Section>
        <Section
          id="food"
          dark
          title={t("food-title")}
          subtitle={t("food-subtitle")}
        >
          <div className="grid md:grid-cols-3 gap-8">
            <Card
              title={t("dish-nasi-title")}
              description={t("dish-nasi-desc")}
              image={food1.src}
            />
            <Card
              title={t("dish-rendang-title")}
              description={t("dish-rendang-desc")}
              image={food2.src}
            />
            <Card
              title={t("dish-gado-title")}
              description={t("dish-gado-desc")}
              image={food3.src}
            />
          </div>
        </Section>

        <Section id="menu" title={t("menu-title")}>
          <Gallery t={t} />
          <MenuLists t={t} />
        </Section>

        <Section id="contact" title={t("contact-title")}>
          <Contact t={t} />
        </Section>
      </main>
      <Footer t={t} />
    </>
  );
}
