import { useTranslations } from "next-intl";

export type MenuItemProps = { title: string; price?: string; desc?: string };
export type AdditionalProps = Omit<MenuItemProps, "desc">;
export type AllergenListProps = Pick<MenuItemProps, "title">;

interface Props {
  title: string;
  subtitle?: string;
  items?: MenuItemProps[];
  additional?: AdditionalProps[];
  additionalSauces?: AdditionalProps[];
  allergenList?: AdditionalProps[];
  className?: string;
}

export const MenuBlock = ({
  title,
  subtitle,
  items,
  additional,
  additionalSauces,
  className,
}: Props) => {
  const t = useTranslations();

  return (
    <div
      className={`bg-white rounded-2xl p-8 shadow-xl border border-stone-200 ${className}`}
    >
      <div className="mb-8 text-center">
        <h3 className="text-3xl font-heading font-bold text-stone-800 font-inter">
          {title}
        </h3>
        {subtitle && (
          <h4 className="text-sm text-stone-800 mt-1 font-poppins">
            {subtitle}
          </h4>
        )}
      </div>
      <div className="space-y-6">
        {items?.map((it, idx) => (
          <div
            key={it.title}
            className={`menu-item ${
              idx < items.length - 1 ? "border-b border-stone-200 pb-6" : ""
            }`}
            style={{ transitionDelay: `${idx * 0.1}s` }}
          >
            <div className="flex justify-between items-start mb-2">
              <h4 className="text-xl font-semibold text-stone-800">
                {it.title}
              </h4>
              <span className="text-xl font-bold text-amber-600">
                {it.price}
              </span>
            </div>
            <p className="text-stone-600">{it.desc}</p>
          </div>
        ))}
        <div className="flex justify-between w-full flex-wrap">
          {!!additional?.length && (
            <div className=" border-stone-200 pt-4">
              <h4 className="text-xl mt-2 font-semibold text-stone-800">
                {t("menu-additional-to-choose-title")}:
              </h4>
              <ul>
                {additional.map((item) => (
                  <li key={item.title} className="text-stone-600">
                    {item.title}{" "}
                    {item?.price ? (
                      <>
                        -{" "}
                        <span className="text-lg font-bold text-amber-600">
                          {item.price}
                        </span>
                      </>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          )}
          {!!additionalSauces?.length && (
            <div className=" border-stone-200 pt-4">
              <h4 className="text-xl mt-2 font-semibold text-stone-800">
                {t("menu-additional-sauce-to-choose-title")}:
              </h4>
              <ul>
                {additionalSauces?.map((item) => (
                  <li key={item.title} className="text-stone-600">
                    {item.title}{" "}
                    {item?.price ? (
                      <>
                        -{" "}
                        <span className="text-lg font-bold text-amber-600">
                          {item.price}
                        </span>
                      </>
                    ) : null}
                  </li>
                ))}
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
