import * as yup from "yup";

export const validationSchema = yup.object().shape({
  email: yup
    .string()
    .email("Incorrect E-mail")
    .required("E-mail is required to sign-in the admin page"),
  password: yup
    .string()
    .required("Password is required to sign-in the admin page"),
});
