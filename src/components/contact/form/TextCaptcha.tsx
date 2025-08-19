"use client";

import { ReactNode, useEffect, useRef, useState } from "react";

import axios, { AxiosError } from "axios";
import Image from "next/image";
import { useLocale, useTranslations } from "next-intl";

import { ExclamationTriangleIcon } from "@heroicons/react/20/solid";

import { generateInstanceUrl } from "@app/api/utils";
import { CustomButton } from "@shared/custom-button/Button";

import { NotificationProps } from "../types";

import { CaptchaSkeleton } from "./CaptchaSkeleton";
import { scrollUpToAlert } from "./utils";

interface CaptchaData {
  token: string;
  image: string;
}

interface CaptchaRenderProps {
  isVerifying: boolean;
  isError: boolean;
  isFetchingError?: boolean;
}

interface Props {
  isSubmitting: boolean;
  children: (props: CaptchaRenderProps) => ReactNode;
  validate?: () => Promise<boolean>;
  onVerified: () => void;
  onErrorMessageHandler: (params: NotificationProps | undefined) => void;
}

export default function TextCaptcha({
  isSubmitting,
  onErrorMessageHandler,
  children,
  validate,
  onVerified,
}: Props) {
  const t = useTranslations();
  const locale = useLocale();

  const calledRef = useRef(false);

  const [captcha, setCaptcha] = useState<CaptchaData | null>(null);
  const [answer, setAnswer] = useState("");
  const [isError, setIsError] = useState(false);
  const [isFetchingError, setIsFetchingError] = useState(false);

  const [isVerifying, setIsVerifying] = useState(false);

  const captchaUrl = generateInstanceUrl(locale as Locale);

  const getCaptcha = async () => {
    try {
      const res = await axios.get(captchaUrl.generateCaptcha);
      setCaptcha(res.data);
    } catch (error) {
      console.error("Error fetching captcha:", error);
      setIsFetchingError(true);
    }
  };

  const submit = async () => {
    if (validate && !(await validate())) return;

    if (!answer) {
      onErrorMessageHandler({
        status: "error",
        message: t("captcha-required"),
      });
      return;
    }

    if (!captcha) return;

    try {
      setIsVerifying(true);

      await axios.post(captchaUrl.verifyCaptcha, {
        token: captcha.token,
        userResponse: answer,
      });

      onErrorMessageHandler(undefined);
      setAnswer("");
      setIsError(false);
      onVerified();
    } catch (error) {
      if (answer) {
        getCaptcha();
        setAnswer("");
      }

      const message =
        error instanceof AxiosError
          ? error.response?.data.message
          : "Incorrect input. Please try again.";

      onErrorMessageHandler({ status: "error", message: message });
      setIsError(true);
    } finally {
      setIsVerifying(false);
      scrollUpToAlert();
    }
  };

  useEffect(() => {
    if (calledRef.current) return;
    calledRef.current = true;
    getCaptcha();
  }, []);

  if (isFetchingError)
    return (
      <div>
        {children({ isVerifying, isError, isFetchingError })}
        <div className="mt-2 text-red-800 flex gap-2 items-center">
          {t("captcha-fetching-error")}
          <ExclamationTriangleIcon className="inline-block w-5 h-5" />
        </div>
      </div>
    );

  return (
    <>
      {children({ isVerifying, isError })}
      {!captcha ? (
        <CaptchaSkeleton />
      ) : (
        <div>
          <Image
            src={captcha.image}
            alt="captcha"
            className="mb-2"
            title="captcha"
            placeholder="empty"
            width={300}
            height={300}
          />
          <div className="flex flex-col sm:flex-row gap-2 sm:gap-2 w-full">
            <input
              type="text"
              value={answer}
              onChange={(e) => setAnswer(e.target.value)}
              disabled={isVerifying || isSubmitting}
              className={`w-full p-4 border ${
                !!isError ? "border-red-800" : "border-stone-300"
              } rounded-lg focus:outline-none focus:border-amber-600 focus:ring-2 focus:ring-amber-200 transition-all ${
                isSubmitting || isVerifying
                  ? "opacity-50 cursor-not-allowed"
                  : ""
              }`}
              placeholder="Enter the text shown"
            />
            <CustomButton
              {...{
                color: "primary",
                content: t("form-submit-btn"),
                type: "button",
                className: "sm:w-full w-20",
                onClick: submit,
                isLoading: isVerifying || isSubmitting,
              }}
            />
          </div>
        </div>
      )}
    </>
  );
}
