import { useAppSelector } from "@store/config";

export const useMenuService = () => {
  const { menu, isMenuLoading } = useAppSelector(({ menu }) => menu);

  return {
    menu,
    isMenuLoading,
  };
};
