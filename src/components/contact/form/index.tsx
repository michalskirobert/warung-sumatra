import { useLocale, useTranslations } from "next-intl";
import { Notification } from "../Notification";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ContactFormData, NotificationProps } from "../types";
import axios from "axios";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { CustomButton } from "@components/shared/custom-button/Button";
import useGenerateValidationSchema from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";
import { generateInstanceUrl } from "@app/api/utils";

export const ContactForm = () => {
  const validationSchema = useGenerateValidationSchema();

  const locale = useLocale();

  const [isLoading, setIsLoading] = useState(false);
  const [notification, setNotification] = useState<NotificationProps>({
    status: undefined,
    message: "",
  });

  const t = useTranslations();

  const { control, handleSubmit, reset } = useForm<ContactFormData>({
    defaultValues: {
      name: "",
      email: "",
      message: "",
    },
    mode: "all",
    resolver: yupResolver(validationSchema),
  });

  const onSubmit = async (data: ContactFormData) => {
    try {
      setIsLoading(true);
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
    <>
      <Notification {...notification} />
      <form className="space-y-6" onSubmit={handleSubmit(onSubmit)}>
        <Input
          {...{
            name: "name",
            control,
            label: t("form-name-label"),
            placeholder: t("form-name-placeholder"),
            required: true,
            disabled: isLoading,
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
            disabled: isLoading,
          }}
        />
        <Textarea
          {...{
            control,
            name: "message",
            label: t("form-message-label"),
            placeholder: t("form-message-placeholder"),
            required: true,
            disabled: isLoading,
          }}
        />
        <CustomButton
          {...{
            color: "primary",
            content: t("form-submit-btn"),
            type: "submit",
            className: "w-full",
            isLoading,
          }}
        />
      </form>
    </>
  );
};
