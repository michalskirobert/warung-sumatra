import { NMenu } from "@namespace/menu";

export const Categories = ({
  filterItems,
  categories,
  currentCategory,
}: NMenu.TMenuCategoriesProps) => {
  return (
    <div className="btn-container">
      {categories.map((category, index) => {
        return (
          <button
            key={index}
            {...{
              type: "button",
              className: `filter-btn ${
                category === currentCategory ? "active" : ""
              }`,
              onClick: () => filterItems(category),
            }}
          >
            {category}
          </button>
        );
      })}
    </div>
  );
};
