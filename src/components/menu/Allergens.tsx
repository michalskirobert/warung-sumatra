import { useTranslations } from "next-intl";

export const Allergens = () => {
  const t = useTranslations();

  const allergens = [
    t("allergens-gluten"),
    t("allergens-crustaceans"),
    t("allergens-eggs"),
    t("allergens-fish"),
    t("allergens-peanuts"),
    t("allergens-soy"),
    t("allergens-milk"),
    t("allergens-celery"),
    t("allergens-mustard"),
    t("allergens-sesame"),
    t("allergens-sulphur-dioxide"),
    t("allergens-lupin"),
    t("allergens-molluscs"),
  ];

  return (
    <div className="bg-white rounded-2xl p-8 shadow-xl border border-stone-200">
      <div className="mb-8 text-center">
        <h3 className="text-3xl font-heading font-bold text-stone-800">
          {t("menu-allergens-title")}
        </h3>
      </div>
      <div className="space-y-6">
        <ul className="list-decimal pl-5">
          {allergens.map((allergen, idx) => (
            <li key={`allergen-${idx}`} className="text-stone-600">
              {allergen}
            </li>
          ))}
        </ul>
      </div>
      <div className="border-t border-stone-200 pt-4 mt-6">
        <p className="text-stone-600">* {t("allergens-gluten-free")}</p>
        <p className="text-stone-600">** {t("allergens-vegan")}</p>
      </div>
    </div>
  );
};
