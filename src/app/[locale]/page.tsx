//Images
import rendang from "@public/foods/bakłażan_rendang.jpeg";
import dorada from "@public/foods/dorada.jpeg";
import kalaskan from "@public/foods/kalaskan.jpeg";

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
              title={t("menu-other-dishes-baklazan-rendang-title")}
              description={t("menu-other-dishes-baklazan-rendang-desc")}
              image={rendang.src}
            />
            <Card
              title={t("menu-other-dishes-dorada-timur-title")}
              description={t("menu-other-dishes-dorada-timur-desc")}
              image={dorada.src}
            />
            <Card
              title={t("menu-other-dishes-kurczak-kalasan-title")}
              description={t("menu-other-dishes-kurczak-kalasan-desc")}
              image={kalaskan.src}
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
