import { formatPhoneNumber } from "@helpers/useful-functions/format-phone-number";
import * as yup from "yup";

export const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required").min(1, "Wrong name"),
  phone: yup
    .string()
    .required("Phone number is required")
    .test("isNumber", "Incorrect phone format", (val) => {
      const formattedValue = formatPhoneNumber(val);

      return (
        Number(formattedValue?.length) >= 9 &&
        Number(formattedValue?.length) <= 15
      );
    }),
  email: yup.string().email("Email is incorrect").required("required"),
  date: yup.string().required("Date is required"),
  time: yup.string().required("Time is required"),
  restaurant: yup.string().required("Restaurant is required"),
});
