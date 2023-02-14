import * as yup from "yup";

export const validationSchema = yup.object().shape({
  fullname: yup.string().required("Required"),
  phone: yup.string().required("Required"),
  email: yup.string().email("Adres email is incorrect").required("Required"),
  content: yup
    .string()
    .required("Required")
    .min(3, "The content must be more than 3 characters")
    .max(250, "Content cannot be more than 250 characters"),
});
