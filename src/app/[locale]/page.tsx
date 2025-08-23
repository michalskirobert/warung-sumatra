//Images

//pages
import About from "@components/about";
import Menu from "@components/menu";
import Contact from "@components/contact";
import Bestseller from "@components/bestseller";

//Components
import NavWrapper from "@components/layout/nav/Wrapper";
import Hero from "@components/Hero";
import Section from "@components/shared/Section";
import Footer from "@components/layout/Footer";

import { getTranslations } from "next-intl/server";

export default async function Page() {
  const t = await getTranslations();

  return (
    <>
      <NavWrapper />
      <main>
        <Hero />
        <Section id="about" title={t("about-title")}>
          <About />
        </Section>
        <Section
          id="food"
          dark
          title={t("food-title")}
          subtitle={t("food-subtitle")}
        >
          <Bestseller />
        </Section>
        <Section id="menu" title={t("menu-title")}>
          <Menu />
        </Section>
        <Section id="contact" title={t("contact-title")}>
          <Contact />
        </Section>
      </main>
      <Footer />
    </>
  );
}
