import { CustomContainer } from "@components/shared";
import { useMenuService } from "./service";
import { CustomMenu } from "@components/shared/custom-menu";
import { Categories } from "./categories";

export const Menu = () => {
  const { categories, currentCategory, menuItems, filterItems } =
    useMenuService();

  return (
    <CustomContainer>
      <section className="menu">
        <div className="title">
          <h2>Menu</h2>
          <div className="underline"></div>
        </div>
        <Categories {...{ currentCategory, categories, filterItems }} />
        <CustomMenu {...{ categories, filterItems, menuItems }} />
      </section>
    </CustomContainer>
  );
};
