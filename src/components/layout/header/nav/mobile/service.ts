import { useState } from "react";

export const useMobileNavService = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggle = () => setIsOpen(!isOpen);

  const changeClassName = (isOpen: boolean) =>
    !!isOpen ? "mobile.active" : "mobile";

  return { isOpen, toggle, changeClassName };
};
