import { useState } from "react";
import axios from "axios";

import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import { useLocale, useTranslations } from "next-intl";

import { generateInstanceUrl } from "@app/api/utils";

import { Notification } from "../Notification";
import { ContactFormData, NotificationProps } from "../types";

import { Input } from "./Input";
import TextCaptcha from "./TextCaptcha";
import { Textarea } from "./Textarea";
import useGenerateValidationSchema from "./schema";

export const ContactForm = () => {
  const validationSchema = useGenerateValidationSchema();

  const locale = useLocale();

  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState<
    NotificationProps | undefined
  >({
    status: undefined,
    message: "",
  });

  const t = useTranslations();

  const { control, getValues, trigger, reset } = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    resolver: yupResolver(validationSchema),
  });

  const handleValidation = async () => await trigger();

  const onSubmit = async () => {
    try {
      setIsLoading(true);
      const data = getValues();

      const response = await axios.post<string>(
        generateInstanceUrl(locale as Locale).sendMail,
        data
      );
      setNotification({ status: "success", message: response.data });

      reset(undefined);
    } catch (error) {
      if (error instanceof Error)
        setNotification({ status: "error", message: error.message });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <TextCaptcha
      isSubmitting={isLoading}
      onErrorMessageHandler={setNotification}
      onVerified={onSubmit}
      validate={handleValidation}
    >
      {({ isVerifying, isFetchingError }) => (
        <form className="flex gap-2 flex-col">
          <Notification {...notification} />
          <Input
            {...{
              name: "name",
              control,
              label: t("form-name-label"),
              placeholder: t("form-name-placeholder"),
              required: true,
              disabled: isLoading || isVerifying || isFetchingError,
            }}
          />
          <Input
            {...{
              name: "email",
              type: "email",
              control,
              label: t("form-email-label"),
              placeholder: t("form-email-placeholder"),
              required: true,
              disabled: isLoading || isVerifying || isFetchingError,
            }}
          />
          <Textarea
            {...{
              control,
              name: "message",
              label: t("form-message-label"),
              placeholder: t("form-message-placeholder"),
              required: true,
              disabled: isLoading || isVerifying || isFetchingError,
            }}
          />
        </form>
      )}
    </TextCaptcha>
  );
};
