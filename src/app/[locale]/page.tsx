//Images
import food1 from "@public/foods/bakłażan_rendang.jpeg";
import food2 from "@public/foods/dorada.jpeg";
import food3 from "@public/foods/kalaskan.jpeg";

//Components
import Hero from "@components/Hero";
import Section from "@components/shared/Section";
import Card from "@components/Card";
import About from "@components/About";
import MenuLists from "@components/menu";
import Contact from "@components/contact";
import Footer from "@components/layout/Footer";

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
