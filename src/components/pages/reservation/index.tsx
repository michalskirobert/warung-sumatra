import { Button, Col, Form, Row } from "reactstrap";

import { FormContainer, Header } from "./styles";

import { Formik } from "formik";

import { validationSchema } from "./validation-schema";
import { FORM_HELPER } from "./utils";
import { CustomForm } from "@components/shared";

export const Reservate = () => {
  return (
    <Formik
      {...{
        initialValues: {
          name: "",
          phone: "",
          email: "",
          date: "",
          time: "",
          restaurant: "",
        },
        onSubmit: (values) => console.log(values),
        validateOnChange: true,
        validateOnBlur: true,
        validationSchema,
      }}
    >
      {({
        errors,
        handleChange,
        handleSubmit,
        dirty,
        isValid,
        setFieldValue,
        values,
      }) => (
        <FormContainer>
          <Header>Zrób rezerwację</Header>
          <Form onSubmit={handleSubmit}>
            <CustomForm
              {...{
                form: FORM_HELPER,
                errors,
                handleChange,
                setFieldValue,
                values,
              }}
            />
            <Row>
              <Col>
                <Button
                  {...{
                    type: "submit",
                    color: "primary",
                    disabled: !isValid || !dirty,
                  }}
                >
                  Wyślij rezerwację
                </Button>
              </Col>
            </Row>
          </Form>
        </FormContainer>
      )}
    </Formik>
  );
};
