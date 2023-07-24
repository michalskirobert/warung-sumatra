import { NGlobalConfig } from "@namespace/global-config";
import { VALIDATIONS } from "@utils/constants";
import * as yup from "yup";

export const validationSchema = (language: NGlobalConfig.TLangCode) =>
  yup.object().shape({
    name: yup.string().required(VALIDATIONS[language].required),
    phone: yup
      .string()
      .required(VALIDATIONS[language].required)
      .test("isPhoneFormatValid", VALIDATIONS[language].phone, (value) => {
        return Number(value?.length) === 15;
      }),
    email: yup
      .string()
      .email(VALIDATIONS[language].email)
      .required(VALIDATIONS[language].required),
    content: yup
      .string()
      .required(VALIDATIONS[language].required)
      .min(3, VALIDATIONS[language].contentMin)
      .max(250, VALIDATIONS[language].contentMax),
  });
