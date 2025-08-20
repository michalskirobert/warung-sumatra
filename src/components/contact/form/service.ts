import { useCallback, useEffect, useRef, useState } from "react";
import axios, { AxiosError } from "axios";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useLocale, useTranslations } from "next-intl";

import { generateInstanceUrl } from "@app/api/utils";

import { ContactFormData, NotificationProps } from "../types";

import useGenerateValidationSchema from "./schema";

import { defaultValues, scrollUpToAlert } from "./utils";

import type { CaptchaData, ContactFormAnswerProps } from "./types";

export const useFormService = () => {
  const calledRef = useRef(false);
  const validationSchema = useGenerateValidationSchema();

  const locale = useLocale();

  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState<
    NotificationProps | undefined
  >({
    status: undefined,
    message: "",
  });
  const [captcha, setCaptcha] = useState<CaptchaData | null>(null);

  const [isFetching, setIsFetching] = useState(false);
  const [isFetchingError, setIsFetchingError] = useState(false);

  const t = useTranslations();

  const { control, reset, handleSubmit } = useForm<ContactFormData>({
    defaultValues,
    resolver: yupResolver(validationSchema),
  });

  const captchaUrl = generateInstanceUrl(locale as Locale);

  const onSubmit = async (data: ContactFormData) => {
    if (!captcha) {
      console.error("Captcha data is not available.");
      return;
    }

    try {
      setNotification(undefined);
      setIsLoading(true);

      const response = await axios.post<ContactFormAnswerProps>(
        generateInstanceUrl(locale as Locale).contact,
        { ...data, token: captcha.token }
      );

      setNotification({ status: "success", message: response.data.message });

      reset(defaultValues);
    } catch (error) {
      if (error instanceof AxiosError)
        setNotification({
          status: "error",
          message: error.response?.data.message || t("api-status-error"),
        });
    } finally {
      setIsLoading(false);
      scrollUpToAlert();
    }
  };

  const getCaptcha = useCallback(async () => {
    try {
      setIsFetching(true);
      const res = await axios.get(captchaUrl.generateCaptcha);
      setCaptcha(res.data);
    } catch (error) {
      console.error("Error fetching captcha:", error);
      setIsFetchingError(true);
    } finally {
      setIsFetching(false);
    }
  }, [captchaUrl.generateCaptcha]);

  useEffect(() => {
    if (calledRef.current) return;

    calledRef.current = true;

    getCaptcha();
  }, [getCaptcha]);

  return {
    control,
    isLoading,
    notification,
    captcha,
    isFetching,
    isFetchingError,
    t,
    onSubmit,
    handleSubmit,
    getCaptcha,
  };
};
