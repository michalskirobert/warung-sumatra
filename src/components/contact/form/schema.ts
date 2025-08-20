import { useTranslations } from "next-intl";
import * as yup from "yup";

const useGenerateValidationSchema = () => {
  const t = useTranslations();

  const validationSchema = yup.object({
    name: yup.string().required(t("form-required-field")),
    email: yup
      .string()
      .email(t("form-invalid-email"))
      .required(t("form-required-field")),
    message: yup.string().required(t("form-required-field")),
    captcha: yup.string().required(t("captcha-required")),
  });

  return validationSchema;
};

export default useGenerateValidationSchema;
