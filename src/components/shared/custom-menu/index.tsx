import { NMenu } from "@namespace/menu";
import { Categories } from "../../pages/menu/categories";
import { MenuItem } from "./menu-item";

export const CustomMenu = ({ menuItems }: NMenu.TMenuProps) => {
  return <MenuItem items={menuItems} />;
};
