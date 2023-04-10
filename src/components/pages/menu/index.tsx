import { useState } from "react";

import { CustomContainer } from "@components/shared";
import { useMenuService } from "./service";
import { MenuItem } from "./menu-item";
import { Categories } from "./categories";

export const Menu = () => {
  const { categories, currentCategory, menuItems, filterItems } =
    useMenuService();

  return (
    <CustomContainer>
      <main>
        <section className="menu">
          <div className="title">
            <h2>Menu</h2>
            <div className="underline"></div>
          </div>
          <Categories {...{ currentCategory, categories, filterItems }} />
          <MenuItem items={menuItems} />
        </section>
      </main>
    </CustomContainer>
  );
};
