import { useTranslations } from "next-intl";
import { Notification } from "../Notification";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { ContactFormData, NotificationProps } from "../types";
import axios from "axios";
import { INSTANCE_URL } from "@app/api/utils";
import { Input } from "./Input";
import { Textarea } from "./Textarea";
import { CustomButton } from "@src/components/shared/custom-button/Button";
import useGenerateValidationSchema from "./schema";
import { yupResolver } from "@hookform/resolvers/yup";

export const ContactForm = () => {
  const validationSchema = useGenerateValidationSchema();

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
      const response = await axios.post<string>(INSTANCE_URL.sendMail, data);
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
          }}
        />
        <Textarea
          {...{
            control,
            name: "message",
            label: t("form-message-label"),
            placeholder: t("form-message-placeholder"),
            required: true,
          }}
        />
        <CustomButton
          {...{
            color: "primary",
            content: t("form-submit-btn"),
            type: "submit",
            className: "w-full",
            isLoading: true,
          }}
        />
      </form>
    </>
  );
};
