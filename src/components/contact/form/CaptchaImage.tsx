import Image from "next/image";

import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";
import { useTranslations } from "next-intl";
import { CaptchaSkeleton } from "./CaptchaSkeleton";

interface Props {
  src: string | undefined;
  isFetching: boolean;
  isErrorFetching: boolean;
}

export const CaptchaImage = ({ src, isFetching, isErrorFetching }: Props) => {
  const t = useTranslations();

  if (isFetching) return <CaptchaSkeleton />;
  if (isErrorFetching)
    return (
      <div className="mt-2 text-red-800 flex gap-2 items-center">
        {t("captcha-fetching-error")}
        <ExclamationTriangleIcon className="inline-block w-5 h-5" />
      </div>
    );

  if (!src) return null;

  return (
    <Image
      src={src}
      alt="captcha"
      className="mb-2"
      title="Captcha"
      placeholder="empty"
      width={300}
      height={300}
    />
  );
};
