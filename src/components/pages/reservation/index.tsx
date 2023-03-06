import { Button, Col, Form, Row } from "reactstrap";

import { Header } from "./styles";

import { Formik } from "formik";

import { validationSchema } from "./validation-schema";
import { FORM_HELPER } from "./utils";
import { CustomForm } from "@components/shared";
import { PageContainer } from "@components/shared/custom-container/styles";

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
        <PageContainer>
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
        </PageContainer>
      )}
    </Formik>
  );
};
