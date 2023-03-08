import { Form } from "reactstrap";
import { Formik } from "formik";

import { BiLogIn } from "react-icons/bi";

import { CustomContainer, CustomForm } from "@components/shared";
import { LOGIN_FORM } from "./utils";

import { FormButton, FormContainer } from "./styles";
import { validationSchema } from "./validation-schema";
import { useLoginService } from "./service";

export const LoginPage = () => {
  const { signIn } = useLoginService();

  return (
    <CustomContainer>
      <Formik
        {...{
          initialValues: { email: "", password: "" },
          onSubmit: (payload) => signIn(payload),
          validateOnBlur: true,
          validateOnChange: true,
          enableReinitialize: true,
          validationSchema,
        }}
      >
        {({ errors, values, setFieldValue, handleChange, handleSubmit }) => (
          <Form onSubmit={handleSubmit}>
            <FormContainer>
              <CustomForm
                {...{
                  form: LOGIN_FORM,
                  errors,
                  values,
                  setFieldValue,
                  handleChange,
                }}
              />
              <FormButton {...{ color: "primary", type: "submit" }}>
                Sign-in <BiLogIn />
              </FormButton>
            </FormContainer>
          </Form>
        )}
      </Formik>
    </CustomContainer>
  );
};
