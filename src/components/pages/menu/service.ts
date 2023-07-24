import { useState } from "react";
import { NMenu } from "@namespace/menu";
import { useAppSelector } from "@store/config";

export const useMenuService = () => {
  const { language } = useAppSelector(({ globalConfig }) => globalConfig);

  return {
    language,
  };
};
