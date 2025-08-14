import { Facebook, Instagram, UberEats, WhatsApp } from "@src/utils/icons";
import { Iconbutton } from "../shared/custom-button/IconButton";

export const SocialMedia = () => {
  return (
    <>
      <Iconbutton
        aria-label="WhatsApp"
        icon={<WhatsApp height={50} width={50} />}
      />
      <Iconbutton
        aria-label="Instagram"
        icon={<Instagram height={50} width={50} />}
      />
      <Iconbutton
        aria-label="Facebook"
        icon={<Facebook height={50} width={50} />}
      />
      <Iconbutton
        aria-label="UberEats"
        icon={<UberEats height={50} width={50} />}
      />
    </>
  );
};
