import { Button, Col, Form, Row } from "reactstrap";

import { Formik } from "formik";

import { CustomContainer, CustomForm } from "@components/shared";

import { validationSchema } from "./validation-schema";
import { FORM_HELPER } from "./utils";

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
        <CustomContainer title="Zrób rezerwację">
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
        </CustomContainer>
      )}
    </Formik>
  );
};
