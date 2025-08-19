import Card from "./Card";

import rendang from "@public/foods/bakłażan_rendang.jpeg";
import dorada from "@public/foods/dorada.jpeg";
import kalaskan from "@public/foods/kalaskan.jpeg";
import { useTranslations } from "next-intl";

const Bestseller = () => {
  const t = useTranslations();

  return (
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
  );
};

export default Bestseller;
