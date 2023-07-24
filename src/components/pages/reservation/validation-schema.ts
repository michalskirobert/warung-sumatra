import { convertTimeToDate } from "@helpers/useful-functions/convert-time-to-date";
import { NGlobalConfig } from "@namespace/global-config";
import { VALIDATIONS } from "@utils/constants";

import * as yup from "yup";

export const validationSchema = (language: NGlobalConfig.TLangCode) =>
  yup.object().shape({
    name: yup
      .string()
      .required(VALIDATIONS[language].required)
      .min(1, VALIDATIONS[language].name),
    phone: yup
      .string()
      .required(VALIDATIONS[language].required)
      .test("isPhoneFormatValid", VALIDATIONS[language].phone, (val) => {
        return Number(val?.length) === 15;
      }),
    email: yup
      .string()
      .email(VALIDATIONS[language].email)
      .required(VALIDATIONS[language].required),
    date: yup.string().required(VALIDATIONS[language].required),
    timeFrom: yup.string().required(VALIDATIONS[language].required),
    timeTo: yup
      .string()
      .notRequired()
      .test("check time", VALIDATIONS[language].timeFrom, (val, context) => {
        return (
          convertTimeToDate(val) > convertTimeToDate(context.parent.timeFrom)
        );
      }),
    restaurant: yup
      .string()
      .required(VALIDATIONS[language].required)
      .nullable(),
  });
