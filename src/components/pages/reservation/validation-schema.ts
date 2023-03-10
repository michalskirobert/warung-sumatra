import { convertTimeToDate } from "@helpers/useful-functions/convert-time-to-date";
import * as yup from "yup";

export const validationSchema = yup.object().shape({
  name: yup.string().required("Name is required").min(1, "Wrong name"),
  phone: yup
    .string()
    .required("Phone number is required")
    .test("isNumber", "Incorrect phone format", (val) => {
      return Number(val?.length) === 15;
    }),
  email: yup.string().email("Email is incorrect").required("required"),
  date: yup.string().required("Date is required"),
  timeFrom: yup.string().required("Time is required"),
  timeTo: yup
    .string()
    .notRequired()
    .test("check time", "Time cannot be lower than time to", (val, context) => {
      return (
        convertTimeToDate(val) > convertTimeToDate(context.parent.timeFrom)
      );
    }),
  restaurant: yup.string().required("Restaurant is required").nullable(),
});
