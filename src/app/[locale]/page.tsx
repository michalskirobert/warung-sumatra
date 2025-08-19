//Images

//Components
import Hero from "@components/Hero";
import Section from "@components/shared/Section";
import About from "@components/About";
import MenuLists from "@components/menu";
import Contact from "@components/contact";
import Footer from "@components/layout/Footer";
import Bestseller from "@src/components/Bestseller";

import { getTranslations } from "next-intl/server";
import NavWrapper from "@components/layout/nav/Wrapper";

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
          <MenuLists />
        </Section>

        <Section id="contact" title={t("contact-title")}>
          <Contact />
        </Section>
      </main>
      <Footer />
    </>
  );
}
