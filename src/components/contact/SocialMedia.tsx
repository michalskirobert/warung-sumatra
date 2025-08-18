import {
  Facebook,
  Instagram,
  Pyszne_PL,
  UberEats,
  WhatsApp,
} from "@src/utils/icons";
import { Iconbutton } from "../shared/custom-button/IconButton";
import {
  INSTAGRAM_URL,
  RESTAURANT_PHONE,
  FACEBOOK_URL,
  UBEREATS_URL,
  PYSZNE_PL_URL,
} from "@src/utils/constants";

export const SocialMedia = () => {
  const handleLink = (url: string) => {
    window.open(url, "_blank");
  };

  return (
    <>
      <Iconbutton
        aria-label="WhatsApp"
        onClick={() =>
          handleLink(`https://wa.me/${RESTAURANT_PHONE.replace(/\D/g, "")}`)
        }
        icon={<WhatsApp height={50} width={50} />}
      />
      <Iconbutton
        aria-label="Instagram"
        onClick={() => handleLink(INSTAGRAM_URL)}
        icon={<Instagram height={50} width={50} />}
      />
      <Iconbutton
        aria-label="Facebook"
        onClick={() => handleLink(FACEBOOK_URL)}
        icon={<Facebook height={50} width={50} />}
      />
      <Iconbutton
        aria-label="UberEats"
        onClick={() => handleLink(UBEREATS_URL)}
        icon={<UberEats height={50} width={50} />}
      />
      <Iconbutton
        aria-label="Pyszne.pl"
        onClick={() => handleLink(PYSZNE_PL_URL)}
        icon={<Pyszne_PL height={42} width={42} />}
      />
    </>
  );
};
